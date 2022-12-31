import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
    console.log(request.query)

    const users = [
        { id: 1, name: 'Flavio'},
        { id: 2, name: 'Erica'},
        { id: 3, name: 'Bella'},
    ]

    return response.json(users)
}