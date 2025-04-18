import React, { createContext, useState } from 'react'
import { food_items } from '../food'
export const dataContext = createContext()
function Usercontext({ children }) {
    const [input, setinput] = useState("")
    const [cate, setcate] = useState(food_items)
    const [showcart, setshowcart] = useState(false)
    let data = {
        input,
        setinput,
        cate,
        setcate,
        setshowcart,
        showcart
    }
    return (
        <div>
            <dataContext.Provider value={data}>
                {children}
            </dataContext.Provider>
        </div>
    )
}

export default Usercontext
