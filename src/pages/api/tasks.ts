// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



export default function tasks(req: NextApiRequest, res: NextApiResponse) {

  let array = [
    {
      task: [],
      week: 'Segunda'
    },
    {
      task: [],
      week: 'Terça'
    },
    {
      task: [],
      week: 'Quarta'
    },
    {
      task: [],
      week: 'Quinta'
    },
    {
      task: [],
      week: 'Sexta'
    },
    {
      task: [],
      week: 'Sábado'
    },
    {
      task: [],
      week: 'Domingo'
    }
    
  ]

  res.status(200).json(array)

}

