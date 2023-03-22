import { NextFunction, Request, Response } from 'express';

/* eslint-disable camelcase */
const errorToExternal = {
  no_such_party: [404, 'Not Found'],
  token_rejected: [500, 'Token Rejected'],
};
/* eslint-enable camelcase */

export function handleErrors(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  let status = 500;
  let message = 'Internal Server Error';
  const errorFormatted = errorToExternal[err.message];
  if (errorFormatted) [status, message] = errorFormatted;
  console.error({ status, err });
  res.status(status).json({ message });
}
