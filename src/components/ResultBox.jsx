export default function ResultBox({ message, loading }) {
  return (
    <textarea
      className='md:w-1/2 align-center resize-none border-orange-500 rounded-lg p-3'
      placeholder='Your message will apear here'
      readOnly
    />
  )
}