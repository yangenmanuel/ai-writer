import { useState } from "react"
import getCohereData from "@/lib/cohere"

export default function Form ({ setMessage, setLoading }) {
  const [input, setInput] = useState({
    type: 'text message',
    toWho: '',
    tone: 'neutral',
    about: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(input)

    setMessage('')
    setLoading(true)

    const response = await getCohereData(input)
    setMessage(response)
    setLoading(false)
  }
  
  const handleChange = (e) => {
      const { name, value } = e.target
      setInput({ ...input, [name]: value  })
    }

  return (
    <form onSubmit={handleSubmit} className='p-3 rounded-lg bg-[#313135] md:w-1/2'>
      
      <div className="flex gap-3">
        <div className='w-full'>
          <label htmlFor='type' className="block mb-2 text-sm font-medium">Type of message</label>
          <select name='type' className="bg-[#3c3c3e] text-sm rounded-lg border-2 border-[#474749] border-opacity-30 focus:border-orange-500 focus:border-2 focus:outline-none block w-full p-2.5 mb-3" onChange={handleChange}>
            <option value='text message'>Text Message</option>
            <option value='email'>Email</option>
            <option value='letter'>Letter</option>
          </select>
        </div>
        <div className='w-full'>
          <label htmlFor='tone' className="block mb-2 text-sm font-medium">Tone:</label>
          <select name='tone' className="bg-[#3c3c3e] text-sm rounded-lg border-2 border-[#474749] border-opacity-30 focus:border-orange-500 focus:border-2 focus:outline-none block w-full p-2.5 mb-3" onChange={handleChange}>
            <option value='neutral'>Neutral</option>
            <option value='friendly'>Friendly</option>
            <option value='professional'>Professional</option>
            <option value='romantic'>Romantic</option>
          </select>
        </div>
      </div>

      <div className='mb-4'>
        <label htmlFor='toWho' className="block mb-2 text-sm font-medium">Receiver:</label>
        <input type='text' name='toWho' className="bg-[#3c3c3e] text-sm rounded-lg border-2 border-[#474749] border-opacity-30 focus:border-orange-500 focus:border-2 outline-none block w-full p-2.5 bg-black-300 placeholder-gray-400 shadow" placeholder="Ex: My friend / My boss" onChange={handleChange}/>
      </div>

      <div className='mb-4'>
        <label htmlFor='about' className="block mb-2 text-sm font-medium">What is it about?</label>
        <textarea onChange={handleChange}
          className='bg-[#3c3c3e] resize-none w-full h-40 rounded-lg p-3 border-2 border-[#474749] border-opacity-30 focus:border-orange-500 focus:outline-none'
          name='about'
          placeholder='Telling my friend I love her...'
        ></textarea>
      </div>

      <div className="flex justify-center">
        <button type="submit" className="w-2/5 bg-orange-500 p-2 rounded-lg font-medium" >Write ✒️</button>
      </div>
    </form>
  )
}
