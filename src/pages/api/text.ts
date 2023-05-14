// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



export default function tasks(req: NextApiRequest, res: NextApiResponse) {

  let text = '- Hoje eu preciso estudar para mais para frente conseguir um trabalho ao qual ganharei um bom dinheiro ou então torcer para que o dropshipping de muito certo.'

  res.status(200).json(text)

}

