import Image from "next/image"
import Link from "next/link"
import Separator from "./Separator"

export default function Header () {
  return (
    <section className='bg-orange-500 relative min-h-[30vh]'>
      <header className="h-[20vh] p-6 flex flex-row items-center justify-between">
        <h1 className="text-4xl md:text-5xl font-['Dancing_Script']">AI Writer 🖋️</h1>
        <Link href={'https://github.com/yangenmanuel/ai-writer'} target='_blank' >
          <Image src={'/github.svg'} alt='See github repo' width={35} height={35}/>
        </Link>
      </header>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
         <Separator />
      </div>
    </section>
  )
}
