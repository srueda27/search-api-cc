import express from "express";
var cors = require('cors')
import routes from "./routes";

const app: express.Application = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT || 4000}`);
});

app.use(cors);
app.options('*', cors());

app.use("/", routes);
