import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'quizData.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { weight, birthday, email } = req.body;

    const data = { weight, birthday, email };
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    res.status(200).json({ message: 'Submission successful', data });
  } else if (req.method === 'GET') {
    if (fs.existsSync(dataFilePath)) {
      const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
      res.status(200).json({ message: 'Data retrieved successfully', data });
    } else {
      res.status(404).json({ message: 'No data found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}