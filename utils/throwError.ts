/**
 * Throws an error with the given message
 *
 * @returns {never}
 * We use type never because function is never going to reach a return statement
 */
const throwErr = (): never => {
  throw new Error("Something went wrong");
};

export default throwErr;
