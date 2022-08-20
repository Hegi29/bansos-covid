// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { DELAY_RESPONSE, MESSAGE_FAILED_API, MESSAGE_SUCCESS_API } from '~/constants/.';
import { HttpStatus } from '~/enum/.';
import { Response } from '~/types/.';
import { getRandomNumber } from '~/utils/.';

const responseSuccess = (res: NextApiResponse<Response>) => {
  return res.status(HttpStatus.Success).json({
    isSuccess: true,
    message: MESSAGE_SUCCESS_API
  })
}

const responseFailed = (res: NextApiResponse<Response>) => {
  return res.status(HttpStatus.InternalServerError).json({
    isSuccess: false,
    message: MESSAGE_FAILED_API
  })
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const randomNumber = getRandomNumber;

  setTimeout(() => {
    if (randomNumber === 1) {
      responseSuccess(res);
      return;
    }

    responseFailed(res);
  }, DELAY_RESPONSE);
}
