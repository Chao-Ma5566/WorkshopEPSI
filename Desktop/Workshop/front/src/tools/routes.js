
import Home from "../components/Home.jsx"
import Error404 from '../components/Error404.jsx'


const routes = [
    {path:"/home", component:<Home />},
    
    {path:"/*", component:<Error404 />}
    
]

export default routes