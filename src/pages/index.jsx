import Head from 'next/head'

import Form from '@/components/Form'
import ResultBox from '@/components/ResultBox'
import Header from '@/components/Header'

import { useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <>
      <Head>
        <title>Ai Message Generator</title>
        <meta lang='en'/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="An ai-provided tool that generates messages, emails, and letters for you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
        <main className='p-4 flex flex-col md:flex-row md:w-2/4 mx-auto gap-5'>
          <Form setMessage={setMessage} setLoading={setLoading}/>
          <ResultBox message={message} loading={loading}/>
        </main>
    </>
  )
}
