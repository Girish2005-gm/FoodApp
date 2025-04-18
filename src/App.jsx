import { Toaster } from 'react-hot-toast';
import Home from "./pages/Home"

function App() {
  return (
   <div>
    <Toaster position="bottom-right" reverseOrder={false} />
    <Home></Home>
   </div>
  )
}

export default App