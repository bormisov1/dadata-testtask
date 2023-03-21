import { NextFunction, Request, Response } from 'express';

export function handleErrors(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  let status = 500;
  let message = 'Internal Server Error';
  if (err.message === 'no_such_party') {
    status = 404;
    message = 'Not Found';
  }
  console.error({ status, err });
  res.status(status).json({ message });
}
