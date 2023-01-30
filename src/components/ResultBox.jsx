import Loader from './Loader'

export default function ResultBox({ message, loading }) {
  return (
    <div className="md:w-1/2 mt-4 md:mt-0 bg-[#313135] align-center resize-none border-orange-500 rounded-lg p-3 overflow-auto">
      {loading 
      ? <Loader />
      : message 
        ? <p className=''>{message}</p> 
        : <p className='opacity-50 text-center'>Your message will apear here</p> }
    </div>
  )
}