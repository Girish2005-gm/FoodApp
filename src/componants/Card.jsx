import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartslice';
import toast, { Toaster } from 'react-hot-toast';
function Card({ name, image, id, price, type }) {
    let dispatch=useDispatch()
    return (
        <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300'>
         
            <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'><img src={image} alt="food_image" className='object-cover' /></div>
            <div className='font-semibold text-2xl'>{name}</div>
            <div className='w-full flex justify-between items-center'>
                <div className='text-lg font-bold text-green-500'>Rs {price}/-</div>
                {type === "veg" ?
                    <div className='flex justify-center items-center gap-2 text-green-500 text-lg font-semibold'>
                        <LuLeafyGreen />
                        <span>{type}</span>
                    </div> :
                    <div className='flex justify-center items-center gap-2 text-red-500 text-lg font-semibold'>
                       <GiChickenOven />
                        <span>{type}</span>
                    </div>
                }
            </div>
            <button className='w-full p-2 bg-green-300 rounded-lg text-gray-700 hover:bg-green-400 transition-all' 
            onClick={()=>
               {dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1}))
               toast.success("Item added in cart!!", {
                position: "top-center", // or "bottom-right", etc.
              });
               }
            }
            >Add to Dish</button>
        </div>
    )
}

export default Card
