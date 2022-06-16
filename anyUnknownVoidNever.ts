

// any

let anyData: any;

anyData = 1;
anyData = () => {
  return 'Im Function';
}
anyData = 'Im String';


//unknown

let unknownData: unknown;

unknownData = 1;

unknownData = () => {
  return 'Im Unknown Function';
}

console.log((unknownData as number) + 2);

unknownData();

//void

const voidFunction = (): void => {
    return undefined;
}

// never
const neverFunction = (): never => {
  throw new Error('Im error from never function');
};
