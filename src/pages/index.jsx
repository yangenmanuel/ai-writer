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
        <title>AI Writer</title>
        <meta lang='en'/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="An ai-provided tool that generates messages, emails, and essays for you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
        <main className='w-full flex flex-col h-auto sm:max-h-[29rem] sm:flex-row sm:w-[80%] mx-auto justify-center p-3 gap-5'>
          <Form setMessage={setMessage} setLoading={setLoading} loading={loading}/>
          <ResultBox message={message} loading={loading}/>
        </main>
    </>
  )
}
