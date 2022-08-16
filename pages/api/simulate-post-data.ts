// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { DELAY_RESPONSE, HttpStatus } from '~/constants/.';
import { Response } from '~/types/.';
import { getRandomNumber } from '~/utils/.';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const randomNumber = getRandomNumber;

  setTimeout(() => {
    if (randomNumber === 1) {
      res.status(HttpStatus.Success).json({
        isSuccess: true,
        message: 'Data berhasil disimpan'
      })
      return;
    }

    res.status(HttpStatus.InternalServerError).json({
      isSuccess: false,
      message: 'Data gagal disimpan'
    })
  }, DELAY_RESPONSE);
}
