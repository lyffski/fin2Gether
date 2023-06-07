import { NextApiRequest, NextApiResponse } from 'next';
//@ts-ignore
import { connectToDatabase } from '../../utils/connectBD.ts';
import { Db } from 'mongodb';


const submitRequestHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      // Retrieve the form data from the request body
      const { firstname, lastname, email, procedure, telefon } = req.body;

      // Perform any necessary validation or data manipulation here

      // Connect to the database
      const client = await connectToDatabase();
      const db: Db = client.db();

      // Store the form data in the database
      const collection = db.collection('kundenTest');
      const result = await collection.insertOne({
        firstname,
        lastname,
        email,
        procedure,
        telefon,
      });

      // Handle success scenario
      console.log('submitRequestHandler', result);
      res.status(200).json({ message: 'Request submitted successfully!' });
    } else {
      // Handle unsupported HTTP methods
      res.status(405).end();
    }
  } catch (error) {
    // Handle error scenario
    console.error('Error submitting request:', error);
    res.status(500).json({ message: 'Error submitting request.' });
  }
};



export default submitRequestHandler;
