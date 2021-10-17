"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoType = void 0;
const graphql_1 = require("@nestjs/graphql");
var TodoType;
(function (TodoType) {
    TodoType["ALL"] = "all";
    TodoType["TODAY"] = "today";
    TodoType["CATEGORY"] = "category";
})(TodoType = exports.TodoType || (exports.TodoType = {}));
(0, graphql_1.registerEnumType)(TodoType, {
    name: 'TodoType',
});
//# sourceMappingURL=todo.enum.js.map