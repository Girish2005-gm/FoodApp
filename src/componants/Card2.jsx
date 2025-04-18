import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { Decqty, Incqty, RemoveItem } from '../redux/cartslice'

function Card2({ name, image, id, price, qty }) {
    let dispatch=useDispatch()
    return (
        <div className='w-full h-[120px] p-3 shadow-lg flex justify-between items-center bg-white rounded-lg'>
            <div className='flex items-center gap-5 h-full w-[70%]'>
                <div className='h-full aspect-square overflow-hidden rounded-lg'>
                    <img src={image} alt="food" className='w-full h-full object-cover' />
                </div>

                <div className='flex flex-col justify-between h-full'>
                    <div className='text-lg text-gray-700 font-semibold'>{name}</div>
                    <div className='w-[110px] h-[40px] bg-slate-400 flex rounded-lg overflow-hidden font-semibold border-2 border-green-400 text-lg'>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200'
                        onClick={()=>{qty>1?dispatch(Decqty({id:id})):qty}}
                        >-</button>
                        <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400'>{qty}</span>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200'
                        onClick={()=>dispatch(Incqty({id:id}))}
                        >+</button>
                    </div>
                </div>
            </div>


            <div className='flex flex-col items-end justify-between h-full gap-2'>
                <span className='text-xl font-semibold text-green-500'>Rs {price}/-</span>
                <RiDeleteBin6Line className='w-[25px] h-[25px] text-red-500 hover:text-red-600 cursor-pointer' 
                onClick={()=>
                    dispatch(RemoveItem(id))
                }
                />
            </div>
        </div>
    )
}

export default Card2
