import express from "express";
import itemsRouter from "./routes/items.routes.js";

const app = express();

app.use(express.json());

app.use("/items", itemsRouter);

app.listen(4000, () => {
  console.log(`App is running on port 4000`);
});
