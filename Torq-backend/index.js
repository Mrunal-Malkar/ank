import { Perplexity } from "@perplexity-ai/perplexity_ai/client.js";
import express from "express";
import { configDotenv } from "dotenv";

const app=express();
const PORT=3000;
configDotenv();

app.get("/",(req,res)=>{
    res.send("this is basic code");
})

app.post("/res",async(req,res)=>{
//       const client = new Perplexity({
//   apiKey:process.env(PERPLEXITY_API_KEY), // Optional if set in environment
// });
const r="hey response is here"
// Non-streaming request
// const response = await client.chat.completions.create({
//   model: 'sonar-pro',
//   messages: [
//     { role: 'user', content: 'When is board exam of ssc board for 12th standard (india) 2026?' }
//   ],
// });

// console.log(response.choices[0].message.content);
// const r=response.choices[0].message.content;
res.send(r);
})

app.listen(PORT,(req,res)=>{
    console.log(`your app is running on port:${PORT}`);
})