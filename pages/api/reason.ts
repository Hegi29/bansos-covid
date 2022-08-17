// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Reason } from 'enum/reason';
import type { NextApiRequest, NextApiResponse } from 'next'

import { HttpStatus } from '~/constants/.';
import { Response } from '~/types/.';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  let id = 0;

  const data = Object.values(Reason)
    .filter((v) => isNaN(Number(v)))
    .map((name) => {
      id++;

      return {
        id,
        name,
      };
    });

  res.status(HttpStatus.Success).json({
    isSuccess: true,
    message: '',
    payload: data
  })
}
