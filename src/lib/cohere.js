import cohere from "cohere-ai"

export default async function getCohereData (data) {
  const { type, toWho, tone, about } = data

  cohere.init('FEX7syHQdP9udAY8uYIuIckBBRf76195uXzjJfx3')

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

  return output.body.generations[0].text
}
