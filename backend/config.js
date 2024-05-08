
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

async function generate(prompt) {
     const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });


  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  
return text;

}



module.exports={
    generate
}
