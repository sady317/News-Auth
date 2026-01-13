import React from 'react'

function Container({children}) {
  return (
    <div className='lg:max-w-6xl md:max-w-2xl px-2 xl:px-0 mx-auto font-montserrat'>{children}</div>
  )
}

export default Container