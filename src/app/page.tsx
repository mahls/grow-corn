import Image from 'next/image'
import {Nav} from '../components/Nav.tsx'
import {StartCornBtn} from '../components/StartCornBtn.tsx'
import {Corn} from '../components/Corn.tsx'


export default function Home() {
  return (
    <main className="text-white min-h-screen bg-stone-900">
      <Nav/>
      <Corn/>
      <StartCornBtn/>
    </main>
  )
}
