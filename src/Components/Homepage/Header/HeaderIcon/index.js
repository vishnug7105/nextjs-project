import React from 'react'

const HeaderIcon = ({Icon, name }) => {
  return (
    <div className='hover:bg-violet-300 hover:text-white rounded cursor-pointer p-2 '>
   <Icon className="" size={25} />
   </div>
  )
}

export default HeaderIcon