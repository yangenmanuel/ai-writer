export default function Form() {
  return (
    <form>
      <div className=''>
        <label htmlFor='typeSelector'>Type of message</label>
        <select name='typeSelector' id=''>
          <option value='textMessage'>Text Message</option>
          <option value='email'>Email</option>
          <option value='letter'>Letter</option>
        </select>
      </div>

      <div className=''>
        <label htmlFor='receiver'>To:</label>
        <input type='text' name='receiver' />
      </div>

      <div className=''>
        <label htmlFor='tone'>Tone:</label>
        <select name='tone'>
          <option value='neutral'>Neutral</option>
          <option value='friendly'>Friendly</option>
          <option value='professional'>Professional</option>
          <option value='romantic'>Romantic</option>
        </select>
      </div>

      <div className=''>
        <label htmlFor='about'>What is it about?</label>
        <textarea
          name='about'
          cols='30'
          rows='10'
          placeholder='Telling my friend I love her...'
        ></textarea>
      </div>
    </form>
  )
}
