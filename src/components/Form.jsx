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
    <>
    <form onSubmit={handleSubmit}>
      <div className=''>
        <label htmlFor='type'>Type of message</label>
        <select name='type'  onChange={handleChange}>
          <option value='text message'>Text Message</option>
          <option value='email'>Email</option>
          <option value='letter'>Letter</option>
        </select>
      </div>

      <div className=''>
        <label htmlFor='toWho'>To:</label>
        <input type='text' name='toWho'  onChange={handleChange}/>
      </div>

      <div className=''>
        <label htmlFor='tone'>Tone:</label>
        <select name='tone' onChange={handleChange}>
          <option value='neutral'>Neutral</option>
          <option value='friendly'>Friendly</option>
          <option value='professional'>Professional</option>
          <option value='romantic'>Romantic</option>
        </select>
      </div>

      <div className=''>
        <label htmlFor='about'>What is it about?</label>
        <textarea onChange={handleChange}
          name='about'
          cols='30'
          rows='10'
          placeholder='Telling my friend I love her...'
        ></textarea>
      </div>

      <button type="submit" >Write ✒️</button>
    </form>
    </>
  )
}
