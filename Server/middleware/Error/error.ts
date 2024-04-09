export class CustomError extends Error {
    constructor(message: string, public statusCode: number = 400) {
      super(message);
    }
  }