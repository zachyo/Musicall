import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Make sure you have your API key here
});
const openai = new OpenAIApi(configuration);

export async function generateDescription(
  title,
  artist
) {
  const prompt = `Generate a short description for an album/playlist/podcast called "${title}" by ${artist}.`;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003", // You can use a more specific or latest model
      prompt: prompt,
      max_tokens: 100, // Adjust token limit for longer/shorter descriptions
      temperature: 0.7, // Adjust the creativity level
    });

    const description = response.data.choices[0].text.trim();
    return description;
  } catch (error) {
    console.error("Error generating description:", error);
    return "Could not generate a description at this time.";
  }
}
