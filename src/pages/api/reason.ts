// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { HttpStatus, Reason } from '~/enum/.';
import { Response } from '~/types/.';
import { enumToArray } from '~/utils/.';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  res.status(HttpStatus.Success).json({
    isSuccess: true,
    message: '',
    payload: enumToArray(Reason)
  })
}
