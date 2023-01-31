import Loader from './Loader'
import Clip from './Clip'

import { useState, useEffect } from 'react'
import styles from '@/styles/Tooltip.module.css'

export default function ResultBox({ message, loading }) {
  const [hasCopied, setHasCopied] = useState(true)

  useEffect(() => {
    if (hasCopied) {
      setTimeout(() => setHasCopied(false), 2500)
    }

  }, [hasCopied])

  const handleCopy = async () => {
    setHasCopied(true)
    return await navigator.clipboard.writeText(message)
  }

  return (
    <div className="h-[30vh] sm:w-1/2 lg:w-1/3 sm:h-auto bg-[#313135] align-center resize-none border-orange-500 rounded-lg p-4 overflow-auto">
      {loading 
      ? <Loader />
      : message 
        ? <>
            <button 
            className={`${styles.tooltip} text-sm bg-neutral-600 rounded-lg p-1 hover:bg-neutral-700`} 
            onClick={handleCopy}>
              <Clip/>
            <span className={`${styles.tooltipText} mb-[0.45rem] px-4 py-1`}>
              {!hasCopied ? 'Copy to clipboard' : 'Copied ✔️'}
            </span>
            </button>
            <p className='mt-2'>{message}</p>
          </>

        : <p className='opacity-50 text-center'>Your text will apear here</p> }
    </div>
  )
}