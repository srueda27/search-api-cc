import express from "express";
import routes from "./routes";

const app: express.Application = express();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port || 4000}`);
});

app.use(express.json());