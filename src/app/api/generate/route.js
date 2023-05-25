import { NextResponse } from "next/server"; //NextResponse nos permite devolver respuestas a las peticiones POST
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
if (!configuration.apiKey) throw new Error("No API key provided");
const openai = new OpenAIApi(configuration);

export async function POST(request) {
  const body = await request.json();
  if (!body.prompt || body.prompt.length === 0)
    return NextResponse.error(new Error("No prompt provided"), {
      status: 200,
    });
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "dime hola",
      temperature: 0.7,
      max_tokens: 60,
    });
    console.log(response);
    return NextResponse.json(response.data.data);
  } catch (error) {
    console.log(error);
    
    return NextResponse.error(error, {
      status: 200,
    });
  }
}
