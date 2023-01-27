import Image from "next/image"
import Separator from "./Separator"

export default function Header () {
  return (
    <section className='bg-orange-500 relative min-h-[30vh]'>
      <header className="min-h-[20vh] p-6 flex flex-row items-center justify-between">
        <h1 className="text-2xl">Ai message generator ✒️</h1>
        <Image src={'/github.svg'} alt='See github repo' width={40} height={40}/>
      </header>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
         <Separator />
      </div>
    </section>
  )
}
