interface ValueArray {
  key: string;
  value: any;
}

export const consoleLog = (
  functionName: string,
  valueArray: ValueArray[],
): void => {
  console.log(`START=====================${functionName}=====================`);
  valueArray.forEach((value) => console.log(`${value.key}: `, value.value));
  console.log(`END=====================${functionName}=====================`);
};
