class AppError extends Error {
  public statusCode: number;
  public success: boolean;
  constructor(success:boolean,statusCode: number, message: string, stack = '') {
    super(message);
    this.success=success;
    this.statusCode = statusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export default AppError;
