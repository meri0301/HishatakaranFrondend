import moment from "moment";
import GlobalHelper from "./globalHelper.js";

class DateTimeHelper {

    getTodayPeriod = () => {
        return [moment().startOf('day'), moment().endOf('day')];
    }

    getYesterdayPeriod = () => {
        return [moment().subtract(1, 'days').startOf('day'), moment().subtract(1, 'days').endOf('day')];
    }

    getLastMountPeriod = () => {
        return [moment().subtract(1, 'months').startOf('month'), moment().subtract(1, 'months').endOf('month')];
    }

    getCurrentMonthPeriod = () => {
        return [moment().startOf('month'), moment().hour(23).minute(59).second(59)];
    }

    getFirstHalfOfCurrentMonth = () => {
        return [
            moment().startOf('month'),  // Start of the current month
            moment().startOf('month').add(14, 'days').endOf('day') // End of the 15th day
        ];
    }

    getSecondHalfOfCurrentMonth = () => {
        return [
            moment().startOf('month').add(15, 'days'), // Start of the 16th day
            moment().endOf('month').hour(23).minute(59).second(59) // End of the current month
        ];
    }

    getFirstHalfOfLastMonth = () => {
        return [
            moment().subtract(1, 'months').startOf('month'), // Start of the previous month
            moment().subtract(1, 'months').startOf('month').add(14, 'days').endOf('day') // End of the 15th day of the previous month
        ];
    }

    getSecondHalfOfLastMonth = () => {
        return [
            moment().subtract(1, 'months').startOf('month').add(15, 'days'), // Start of the 16th day of the previous month
            moment().subtract(1, 'months').endOf('month').hour(23).minute(59).second(59) // End of the previous month
        ];
    }

    getCurrentMonthName = () => {
        return moment().format('MMM');
    }

    getLastMonthName = () => {
        return moment().subtract(1, 'months').format('MMM');
    }

    getCurrentMonthLength = () => {
        return moment().daysInMonth(); // Gets the number of days in the current month
    }

    getLastMonthLength = () => {
        return moment().subtract(1, 'months').daysInMonth(); // Gets the number of days in the last month
    }

    padTo2Digits = (num) => {
        return num.toString().padStart(2, '0');
    }

    getUTCDates = (startDate, endDate, utcOffset) => {
        const currentStartDate = moment(startDate).utcOffset(utcOffset);
        const currentEndDate = moment(endDate).utcOffset(utcOffset);

        const startOfDay = currentStartDate.clone().startOf('day').valueOf();
        const endOfDay = currentEndDate.clone().endOf('day').valueOf();

        return [startOfDay, endOfDay];
    }

    format = (dateTime, format) => {
        if(GlobalHelper.isNullOrUndefined(dateTime))
            return null;

        return moment(dateTime).format(format);
    }
}

export default new DateTimeHelper();