import { Perplexity } from "@perplexity-ai/perplexity_ai";
import express from "express";
import {config as configDotenv } from "dotenv";
import cors from "cors";

configDotenv();
const app = express();
const PORT = 3000;

const corsOptions = {
      origin: "https://ank-eight.vercel.app/", // Replace with your frontend origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow cookies to be sent with cross-origin requests
  allowedHeaders: "Content-Type,Authorization", // Specify allowed headers
};

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is basic code");
});

app.post("/res", async (req, res) => {
    console.log("this is request body",req.body);
    const {prompt}=req.body;
  const client = new Perplexity({
    apiKey: process.env.PERPLEXITY_API_KEY, // Optional if set in environment
  });
  const response = 
  await client.chat.completions.create({
    model: "sonar-pro",
    messages: [
      {
        role: "tool",
        content:
        prompt
    },
    ],
  });

  console.log(response.choices[0].message.content);
  const r = response.choices[0].message.content;
  res.send({ data: r });
});

app.listen(PORT, (req, res) => {
  console.log(`your app is running on port:${PORT}`);
});
