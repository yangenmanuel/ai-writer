import cohere from "cohere-ai"

export default async function handler(req, res) {
  const apiKey = process.env.COHERE_API_KEY
  const { type, toWho, tone, about } = req.query

  cohere.init(apiKey)

  const output = await cohere.generate({
    prompt: `Write a ${type} telling ${toWho} in a ${tone} tone that ${about}`, 
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
