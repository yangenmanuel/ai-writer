import cohere from "cohere-ai"

export default async function handler(req, res) {
  const apiKey = process.env.COHERE_API_KEY

  cohere.init(apiKey)

  const output = await cohere.generate({
    prompt: `Write an email telling my boss in a professional tone that I'm quitting`, 
    model: 'command-xlarge-20221108',
    max_tokens: 500,
    temperature: 0.9,
    k: 0,
    p: .75,
    frequency_penalty: 0,
    return_likelihoods: 'NONE'
  })

  res.json({
    status: output.statusCode,
    response: output.body.generations[0].text
  })
}
