import express from "express";
import productRoutes from "./src/Routes/productRoutes";
import { config } from "dotenv";
import cors from "cors";

// Load environment variables from .env file
config({ path: __dirname + "./env" });
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/products", productRoutes);

app.listen(port, "0.0.0.0", () => {
  console.log(`[ ready ] http://0.0.0.0:${port}`);
});
