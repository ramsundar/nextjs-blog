import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    id: number
    title: string,
    completed: boolean
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    res.status(200).json([
        { 
            id: 1,
            title: "Complete Azure Fundamentals",
            completed: true
        },
        { 
            id: 2,
            title: "Learn Next.JS",
            completed: true
        },
        { 
            id: 3,
            title: "Learn OutSystems",
            completed: false
        },
        { 
            id: 4,
            title: "Complete Azure Developer Associate",
            completed: false
        },
    ])
}
