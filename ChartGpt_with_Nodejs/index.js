const express=require("express");
const app=express();
require("dotenv").config();
const OpenAI=require("openai")

app.use(express.json());

const Openai=new OpenAI({
    apiKey:process.env.API_KEY
});

async function chatGPT(query){
    const response=await Openai.chat.completions.create({
        model:"gpt-3.5-turbo",
        messages:[{"role":"user","content":query}],
        max_tokens:30
    
    });
    console.log(response.choices[0].message)
}
chatGPT("who is Ronaldo")


//....... create routes for chartgpt api........

// app.post("/api",async(req,res)=>{
//     try {
//         const query=req.body.query;
//         const response=await Openai.chat.completions.create({
//             model:"gpt-3.5-turbo",
//             messages:[{"role":"user","content":query}],
//             max_tokens:30
        
//         });
//         res.status(200).json({"answer":response.choices[0].message})
//     } catch (error) {
//         console.log(error)
//         res.send({"error":error})
//     }
// })
//............................................................


app.listen(4500,async()=>{
    console.log("server is running at port 4500....")
})