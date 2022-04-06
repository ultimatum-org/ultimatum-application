import { data } from "../../../data";

export default function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    return res.status(200).json(data);
  }

  if (method === "POST") {
    const { body } = request;
    data.push({ ...body, id: data.length + 1 });
    return response.status(200).json(data);
  }
}
