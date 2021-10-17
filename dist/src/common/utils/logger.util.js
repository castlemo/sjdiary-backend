"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleLog = void 0;
const consoleLog = (functionName, valueArray) => {
    console.log(`START=====================${functionName}=====================`);
    valueArray.forEach((value) => console.log(`${value.key}: `, value.value));
    console.log(`END=====================${functionName}=====================`);
};
exports.consoleLog = consoleLog;
//# sourceMappingURL=logger.util.js.map