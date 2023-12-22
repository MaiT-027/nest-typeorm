import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { EntityNotFoundError } from 'typeorm';

@Catch() // ()를 공란으로 두어 모든 예외처리를 받을 수 있도록 하였다.
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = (exception as any).message.message;

    switch (exception.constructor) {
      case HttpException: // for HttpException
        status = (exception as HttpException).getStatus();
        break;

      case EntityNotFoundError: // for TypeOrm error
        status = HttpStatus.NOT_FOUND;
        message = (exception as EntityNotFoundError).message;
        break;

      default: // default
        status = HttpStatus.INTERNAL_SERVER_ERROR;
    }
    response.status(status).json({
      statusCode: status,
      message: message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
