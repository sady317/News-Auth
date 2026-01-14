import React from 'react'
import Marquee from 'react-fast-marquee'

function MarqueeText() {
  return (
    <>
    <div className='flex items-center bg-slate-300 p-4 mt-10     rounded-md'>
        <button className='uppercase btn btn-secondary'>breaking news</button>
        <Marquee  className=' px-2 font-bold '>
  I can be a React component, multiple React components, or just some text.
</Marquee>
    </div>
    </>
  )
}

export default MarqueeText