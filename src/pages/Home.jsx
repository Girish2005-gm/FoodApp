import Nav from "../componants/Nav"
import Categories from "../Categories"
import Card from "../componants/Card"
import { food_items } from "../food"
import { useContext, useState } from "react"
import { dataContext } from "../context/Usercontext"
import { RxCross1, RxCross2 } from "react-icons/rx"
import Card2 from "../componants/Card2"
import { useSelector } from "react-redux"
import toast, { Toaster } from 'react-hot-toast';

function Home() {
  let { cate, setcate, input, setshowcart, showcart } = useContext(dataContext)
  function filter(category) {
    if (category == "All") {
      setcate(food_items)
    } else {
      let newlist = food_items.filter((item) => (item.food_category === category))
      setcate(newlist)
    }
  }

  let items = useSelector(state => state.cart);

  let subtotal = items.reduce((total, item) => total + (item.qty * item.price), 0)
  let delivaryfee = 20
  let tax = subtotal * 0.5 / 100
  let granttotal = Math.floor(subtotal + delivaryfee + tax);

  return (
    <div className="w-full min-h-screen bg-slate-200 ">
      <Nav />
      {!input ?
        <div className="flex flex-wrap justify-center items-center gap-8">
          {
            Categories.map((categories, index) => (
              <div key={index}
                className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-md shadow-lg hover:bg-green-200 cursor-pointer transition-all duration-200"
                onClick={() => filter(categories.name)}
              >
                {categories.icon}
                {categories.name}
              </div>
            ))
          }
        </div>
        : null
      }

      {cate.length > 1 ?
        <div className="w-full flex flex-wrap justify-center gap-5 px-5 items-center pt-8 pb-8 ">
          {cate.map((item) => (
            <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
          ))}
        </div> :
        <div className="text-center text-2xl font-semibold text-green-500 pt-8">No Dish Found</div>
      }

      <div className={`w-[100%] md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 overflow-auto ${showcart ? "translate-x-0" : "translate-x-full"}`}>
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-[20px] font-semibold text-green-400">Order items</span>
          <RxCross2 className="text-[20px] w-[30px] h-[30px] text-green-400 cursor-pointer hover:text-gray-600"
            onClick={() => setshowcart(false)}
          />
        </header>

        {items.length > 0 ?
          <>
            <div className="w-full mt-9 flex flex-col gap-8">
              {
                items.map((item) => (
                  <Card2 key={item.id} name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
                ))
              }
            </div>

            <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8 ">
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">Subtotal</span>
                <span className="text-lg font-semibold text-green-400">Rs {subtotal}/-</span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">Delivery Fee</span>
                <span className="text-lg font-semibold text-green-400">Rs {delivaryfee}/-</span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">Tax</span>
                <span className="text-lg font-semibold text-green-400">Rs {tax}/-</span>
              </div>
            </div>

            <div className="w-full flex justify-between items-center p-9">
              <span className="text-2xl text-gray-600 font-semibold">Total</span>
              <span className="text-2xl font-semibold text-green-400">Rs {granttotal}/-</span>
            </div>

            <button
              className="w-full p-2 bg-green-300 rounded-lg text-gray-700 hover:bg-green-400 transition-all"
              onClick={() => toast.success("Order placed!", {
                position: "bottom-right"
              })
              }
            >
              Place Order
            </button>

          </>
          :
          <div className="text-center text-2xl font-semibold text-green-500 pt-8">Empty Cart</div>
        }
      </div>
    </div>
  )
}

export default Home
