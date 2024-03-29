
import Image from 'next/image';


import {  AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsThreeDots } from 'react-icons/bs';



const Post = () => {

  return (
    <div className='flex flex-col w-full border border-gray-100 bg-black/50 border-1 '>
    <div className='flex p-1 space-x-2 bg-blue-100 items-center justify-between'>
    <div className='flex space-x-2 items-center justify-center'>
    <div className='w-10 h-10 bg-gray-400 border border-2 border-pink-400 rounded-full'/>
    <div>username</div>
    </div>
    <div className='w-4 ml-auto select-none'><BsThreeDots/></div>
    </div>
    <div className='w-full h-full bg-black aspect-square'>
    <img src="https://via.placeholder.com/600/92c952"/>
    </div>
    <div className='flex items-center justify-between p-2 '>
      <div className='flex items-center space-x-2'>
        
        <div>
          <AiOutlineHeart size={23}
           className='text-black cursor-pointer hover:text-black/50'/>
        </div>
      
      </div>
      <div className=''><BsBookmark size={20}
       className='text-black cursor-pointer hover:text-black/50'/></div>
    </div>
   

   </div>
  );
};

export default Post;