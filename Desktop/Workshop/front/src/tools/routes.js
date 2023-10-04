import Error404 from '../components/Error404.jsx'
import Home from "../components/Home.jsx"
import AddTrajet from "../components/AddTrajet"

const routes = [
    {path:"/", component:<Home />},
    {path:"/addTrajet", component:<AddTrajet />},
    {path:"/*", component:<Error404 />}
    
]

export default routes