class HttpException extends Error {
  constructor(
    public statusCode: number = 500,
    data:
      | string
      | {
          message: string;
          [key: string]: any;
        }
  ) {
    super(typeof data === "string" ? data : data.message);
    this.statusCode = statusCode;
  }
}

export default HttpException;
