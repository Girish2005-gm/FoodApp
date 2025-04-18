import React, { useContext, useEffect } from 'react'
import { IoFastFood } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { dataContext } from '../context/Usercontext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

function Nav() {
  let { input, setinput, cate, setcate,setshowcart,showcart } = useContext(dataContext)
  useEffect(() => {
    let newlist = food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
    setcate(newlist)
  }, [input])

  let items=useSelector(state=>state.cart)
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md'>
        <IoFastFood className='w-[30px] h-[30px] text-green-500' />
      </div>
      <form action=""
        className='w-[60%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]'
        onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch className='w-[20px] h-[20px] text-green-500' />
        <input type="text"
          placeholder='Search your dish...'
          className='w-[100%] outline-none text-[15px] md:text-[20px]'
          onChange={(e) => setinput(e.target.value)}
          value={input}
        />

      </form>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md relative' 
       onClick={()=>{
        setshowcart(true)
       }}
      >
        <span className='absolute top-0 right-2 text-green-500 font-semibold text-md'>{items.length}</span>
        <FaShoppingCart className='w-[30px] h-[30px] text-green-500 cursor-pointer' />
      </div>
    </div>
  )
}

export default Nav
