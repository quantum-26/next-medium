// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import { SanityClient } from '@sanity/client'
import { 
    createClient
} from "next-sanity";

const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: process.env.NEXT_PUBLIC_NODE_ENV === "production",
    token: process.env.SANITY_API_TOKEN,
}

const client = createClient(config)

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { _id, name, email, comment } = JSON.parse(req.body)
    try{
        await client.create({
            _type: 'comment',
            post: {
                _type: 'reference',
                _ref: _id
            },
            name,
            email,
            comment
        })
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            message: "Couldn't submit comment", err
        });
    }
    
    return res.status(200).json({
        message: "comment submitted"
    });
};
