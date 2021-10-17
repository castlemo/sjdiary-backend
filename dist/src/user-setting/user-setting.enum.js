"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartOfWeek = exports.Theme = void 0;
const graphql_1 = require("@nestjs/graphql");
var Theme;
(function (Theme) {
    Theme["DARK"] = "dark";
    Theme["WHITE"] = "white";
})(Theme = exports.Theme || (exports.Theme = {}));
var StartOfWeek;
(function (StartOfWeek) {
    StartOfWeek["MONDAY"] = "monday";
    StartOfWeek["SUNDAY"] = "sunday";
})(StartOfWeek = exports.StartOfWeek || (exports.StartOfWeek = {}));
(0, graphql_1.registerEnumType)(Theme, {
    name: 'Theme',
});
(0, graphql_1.registerEnumType)(StartOfWeek, {
    name: 'StartOfWeek',
});
//# sourceMappingURL=user-setting.enum.js.map