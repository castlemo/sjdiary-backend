"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateTransformer = void 0;
__exportStar(require("./util.module"), exports);
exports.dateTransformer = {
    to: (value) => {
        console.log('to: ', value);
        return new Date(value).toISOString();
    },
    from: (value) => {
        console.log('from: ', value);
        return new Date(value).getTime();
    },
};
//# sourceMappingURL=index.js.map