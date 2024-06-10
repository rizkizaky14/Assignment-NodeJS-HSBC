import express, { Application } from "express";

const app: Application = express();
const port: Number = 4000;

app.use(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(200).send({ status: "success" });
  }
);

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`);
});
