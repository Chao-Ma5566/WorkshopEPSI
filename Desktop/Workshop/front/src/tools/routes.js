import Error404 from '../components/Error404.jsx'
import Home from "../components/Home.jsx"

const routes = [
    {path:"/", component:<Home />},
    
    {path:"/*", component:<Error404 />}
    
]

export default routes