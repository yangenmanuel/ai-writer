import { useState } from "react"
import getCohereData from "@/lib/cohere"

export default function Form ({ setMessage, setLoading }) {
  const [type, setType] = useState('text message')
  const [toWho, setToWho] = useState('')
  const [tone, setTone] = useState('neutral')
  const [about, setAbout] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    setMessage('')
    setLoading(true)
    // const res = await fetch(`api/cohere?type=${type}&toWho=${toWho}&tone=${tone}&about=${about}`)
    const response = await getCohereData({ type, toWho, tone, about })
    setMessage(response)
    setLoading(false)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className=''>
        <label htmlFor='typeSelector'>Type of message</label>
        <select name='typeSelector'  onChange={(e) => setType(e.target.value)}>
          <option value='text message'>Text Message</option>
          <option value='email'>Email</option>
          <option value='letter'>Letter</option>
        </select>
      </div>

      <div className=''>
        <label htmlFor='receiver'>To:</label>
        <input type='text' name='receiver'  onChange={(e) => setToWho(e.target.value)}/>
      </div>

      <div className=''>
        <label htmlFor='tone'>Tone:</label>
        <select name='tone' onChange={(e) => setTone(e.target.value)}>
          <option value='neutral'>Neutral</option>
          <option value='friendly'>Friendly</option>
          <option value='professional'>Professional</option>
          <option value='romantic'>Romantic</option>
        </select>
      </div>

      <div className=''>
        <label htmlFor='about'>What is it about?</label>
        <textarea onChange={(e) => setAbout(e.target.value)}
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
