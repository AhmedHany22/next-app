import Link from 'next/link'
import ProductCard from '../components/ProductCard'

export default function Home() {
  return (
    <>
      <h1 className='text-center text-5xl text-slate-800 my-6 font-semibold'>Hello</h1>
      <ProductCard />
      <Link className='bg-slate-500 hover:bg-slate-700 text-white text-center font-bold py-2 px-4 rounded w-1/3 my-6 inline-block' href="/users">Users</Link>
    </>
  )
}
