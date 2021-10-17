"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodayUTCDate = void 0;
const getTodayUTCDate = () => {
    const korDateTime = new Date(+new Date() + 9 * 60 * 60 * 1000);
    const currentYear = korDateTime.getUTCFullYear();
    const currentMonth = korDateTime.getUTCMonth();
    const currentDate = korDateTime.getUTCDate();
    const dayBefore = new Date(Date.UTC(currentYear, currentMonth, currentDate));
    dayBefore.setDate(dayBefore.getUTCDate() - 1);
    const startDate = new Date(Date.UTC(dayBefore.getUTCFullYear(), dayBefore.getUTCMonth(), dayBefore.getUTCDate(), 15, 0, 0, 0));
    const endDate = new Date(Date.UTC(currentYear, currentMonth, currentDate, 14, 59, 59, 999));
    return {
        startDate,
        endDate,
    };
};
exports.getTodayUTCDate = getTodayUTCDate;
//# sourceMappingURL=time.util.js.map