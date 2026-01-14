import React from 'react'
import Category from '../../LeftSide/Category'
import Card from '../../LeftSide/Card'


function LeftSide() {
  return (
    <>
    <div className='h-screen md:text-start  overflow-x-scroll '>
      <Category/>
      <Card/>
    </div>
    </>
  )
}

export default LeftSide