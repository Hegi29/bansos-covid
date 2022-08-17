// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { HttpStatus } from 'enum/httpStatus';
import { Response } from '~/types/.';
import { enumReasonToArray } from '~/utils/.';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  res.status(HttpStatus.Success).json({
    isSuccess: true,
    message: '',
    payload: enumReasonToArray()
  })
}
