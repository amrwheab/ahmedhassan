import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req,res)=>{
  res.json({status:'الزمالك قادم'});
});

app.listen(5000, ()=> console.log("API running"));


