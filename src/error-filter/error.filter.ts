import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Response, Request } from "express";
@Catch()
export class ErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const request = host.switchToHttp().getRequest<Request>();
    let status;
    if (typeof exception.getStatus === "function") {
      status = exception.getStatus();
    } else {
      status = 500;
    }
    response.status(status);
    response.json({
      method: request.method,
      path: request.url,
      status,
      message: exception.message,
      timestamp: new Date().toLocaleDateString(),
    });
  }
}
