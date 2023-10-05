import CoVoiturage from "../components/CoVoiturage.jsx"
import Error404 from '../components/Error404.jsx'
import Home from "../components/Home.jsx"

const routes = [

    {path:"/home", component:<Home />},
    {path:"/co-voiturage", component:<CoVoiturage />},
    {path:"/*", component:<Error404 />}
    
]

export default routes