import express, { Application } from "express";
import path from "path";
import userRoutes from "./routes/userRoutes";

const app: Application = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})
app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log("Servidor rodando...")
})