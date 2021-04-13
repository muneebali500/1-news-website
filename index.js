import express, { urlencoded } from "express";
import ejs from "ejs";
import path from "path";
import newsRouter from "./src/routes/newsRouter.js";

const app = express();
const __dirname = path.resolve();
//app.use(express.urlencoded({ extended: true }));

// SETTING STATIC FILES
app.use(express.static(`public`));

// SETTING TEMPLATE ENGINE
app.set(`views`, `${__dirname}/src/views`);
app.set(`view engine`, `ejs`);

// GETTING DATA FROM BODY
app.use(express.urlencoded({ extended: true }));

app.use(newsRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});
