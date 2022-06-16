
interface IComponentType {
  selector: string,
  templateUrl: string,
  styleUrls: string
}

function Component(compArgs: IComponentType) {
  return function (target: any) {
    console.log(`component decorator called with Selector - ${compArgs.selector} templateUrl - ${compArgs.templateUrl} styleUrls - ${compArgs.styleUrls} on ${target}`);
  }
}

function range(min: number, max: number) {
  return function (target: any, propertyName: string) {
    let value: any;
    Object.defineProperty(target, propertyName, {
      get() { return value },
      set(data) {
        console.log("🚀 ~ file: decoratorFactory.ts ~ line 20 ~ set ~ data", data)

        if (data > max || data < min) {
          throw new RangeError(`${propertyName} is not in specified range of min ${min} an max ${max}`);
        }
        value = data;
      }
    })
  }
}

function perf() {
  return function (target: any, methodName: string, desc: PropertyDescriptor) {
    const OriginalMethod = desc.value;
    desc.value = function (args: any[]) {
      const perfStart = performance.now();
      const result = target.apply(this, args);
      const perfStop = performance.now();
      console.log('executing time', perfStop - perfStart);
      return result;
    }
    return desc;
  }
}


@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: 'app.component.css'
})
class TestComponent {

  @range(5, 27)
  public age = 6;

  @perf
  testComponentFn() {
    console.log('component executing');
  }
}

const testComp = new TestComponent();

console.log('component execution started!');
testComp.testComponentFn();
console.log('component executing stopped!');
