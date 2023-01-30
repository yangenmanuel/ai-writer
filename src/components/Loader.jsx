import styles from '@/styles/Loader.module.css'

export default function Loader () {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className={styles.typewriter}>
        <div className={styles.slide}>
          <i></i>
        </div>
        <div className={styles.paper}></div>
        <div className={styles.keyboard}></div>
      </div>
    </div>
  )
}
