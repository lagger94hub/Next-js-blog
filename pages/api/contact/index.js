import validator from "validator";
import dbConnector from "../../../db/dbConnector";
const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
    const { email, name, message } = req.body;
    if (!email || !validator.isEmail(email) || !name.trim() || !message.trim())
      return res.status(400).send({ error: "Invalid Input" });
    const objectToSave = {
      email,
      name,
      message,
    };
    try {
      await dbConnector("add", {
        collection: "contacts",
        documentsArray: [objectToSave],
      });
    } catch (e) {
      res.status(500).send({ error: e.message });
    }

    res.status(201).send({ result: "Message received successfully!!" });
  }
};
export default handler;
