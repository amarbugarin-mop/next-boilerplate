import moment from "moment";
/**
 * @name DateFormat
 * @description
 * A service that provides functions for formatting dates
 * @example
 * import { formatFromNow, formatWith } from 'src/common-modules/services/DateTime';
 * formatFromNow('2020-01-01');
 * formatWith('2020-01-01', 'YYYY-MM-DD');
 * @exports {function} formatFromNow
 * @exports {function} formatWith
 * @exports {function} formatNow
 *
 */
const formatFromNow = (dateInput: string) => moment(dateInput).fromNow();

const formatWith = (dateInput: string, format: string) =>
  moment(dateInput).format(format);

export { formatFromNow, formatWith };
