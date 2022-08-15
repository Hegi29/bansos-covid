// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Response = {
  isSuccess: boolean,
  message: string
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const randomNumber = Math.floor(Math.random() * 2);

  if (randomNumber === 1) {
    res.status(200).json({
      isSuccess: true,
      message: 'Data berhasil disimpan'
    })
    return;
  }

  res.status(500).json({
    isSuccess: false,
    message: 'Data gagal disimpan'
  })
}
