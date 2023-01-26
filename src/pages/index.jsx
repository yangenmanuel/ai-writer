import Head from 'next/head'
import Form from '@/components/Form'
import ResultBox from '@/components/ResultBox'
import { useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <>
      <Head>
        <title>Ai Message Generator</title>
        <meta name="description" content="An ai-provided tool that generates messages, emails, and letters for you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1>Ai Message Generator ✒️</h1>
        
        <p>Generate your desired message based on simple facts!</p>
        <main>
          <Form setMessage={setMessage} setLoading={setLoading}/>
          <ResultBox message={message} loading={loading}/>
        </main>
    </>
  )
}
