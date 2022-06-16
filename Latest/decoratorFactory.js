"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Component(compArgs) {
    return function (target) {
        console.log(`component decorator called with Selector - ${compArgs.selector} templateUrl - ${compArgs.templateUrl} styleUrls - ${compArgs.styleUrls} on ${target}`);
    };
}
function range(min, max) {
    return function (target, propertyName) {
        let value;
        Object.defineProperty(target, propertyName, {
            get() { return value; },
            set(data) {
                console.log("🚀 ~ file: decoratorFactory.ts ~ line 20 ~ set ~ data", data);
                if (data > max || data < min) {
                    throw new RangeError(`${propertyName} is not in specified range of min ${min} an max ${max}`);
                }
                value = data;
            }
        });
    };
}
function perf() {
    return function (target, methodName, desc) {
        const OriginalMethod = desc.value;
        desc.value = function (args) {
            const perfStart = performance.now();
            const result = target.apply(this, args);
            const perfStop = performance.now();
            console.log('executing time', perfStop - perfStart);
            return result;
        };
        return desc;
    };
}
let TestComponent = class TestComponent {
    constructor() {
        this.age = 6;
    }
    testComponentFn() {
        console.log('component executing');
    }
};
__decorate([
    range(5, 27),
    __metadata("design:type", Object)
], TestComponent.prototype, "age", void 0);
__decorate([
    perf,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestComponent.prototype, "testComponentFn", null);
TestComponent = __decorate([
    Component({
        selector: 'app-component',
        templateUrl: 'app.component.html',
        styleUrls: 'app.component.css'
    })
], TestComponent);
const testComp = new TestComponent();
console.log('component execution started!');
testComp.testComponentFn();
console.log('component executing stopped!');
