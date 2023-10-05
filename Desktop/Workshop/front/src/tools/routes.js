import CoVoiturage from "../components/CoVoiturage.jsx"
import Error404 from '../components/Error404.jsx'
import Home from "../components/Home.jsx"
import AddTrajet from "../components/AddTrajet"
import ReservationTrajet from "../components/ReservationTrajet"
import Profil from "../components/Profil"

const routes = [

    {path:"/home", component:<Home />},
    {path:"/co-voiturage", component:<CoVoiturage />},
    {path:"/addTrajet", component:<AddTrajet />},
    {path:"/reserverTrajet", component:<ReservationTrajet />},
    {path:"/profil", component:<Profil />},
    {path:"/*", component:<Error404 />}
    
]

export default routes