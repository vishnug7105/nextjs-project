import React from 'react'
    import {
        Add, Cross, Home, Heart, Search,
        Profile
    }from "./Icons"
    import { BsSearch } from "react-icons/bs";
    import HeaderIcon from './HeaderIcon';
    import { IoPersonCircleOutline } from "react-icons/io5";
    
    const HEADER_ITEMS = [
        {
            icon:Home,
            url:'/',
            name:'Home'
        },
        {
            icon:Add,
            url:'/',
            name:'Add'
        },
        {
            icon:Heart,
            url:'/save',
            name:'Heart'
        },
        
        {
            icon:Profile,
            url:'/',
            name:'profile'
        }
    
    ]
    const Header = () => {
      return (
        <div className='w-full h-full bg-blue-100'>
            <header className='w-full h-16 flex items-center justify-around bg-blue-100 shadow-xl'>
                <div className='flex bg-gray-100 items-center
                 border-gray-400 rounded-md px-2 space-x-2 group group:focus:border-gray-400 border border-gray-400'>
                <label htmlFor='search' className=''>
                    <BsSearch className='text-sm text-gray-400'/></label>
                    <input type="search" name="search" id="search"
                    className='bg-gray-100 hover:bg-transparent 
                    focus:g-transparent  px-2 py-1 
                    outline-none w-full rounded-md 
                    transition' placeholder='Search'/>
                </div>
                <div>
                <div className='flex space-x-4'>
                {
                    HEADER_ITEMS.map((item)=>(               
                         <HeaderIcon
                         Icon={item.icon}
                         key={item.name}
                    />
                    ))}
                   
                </div>
                </div>
            </header>
            </div>
  )
}

export default Header