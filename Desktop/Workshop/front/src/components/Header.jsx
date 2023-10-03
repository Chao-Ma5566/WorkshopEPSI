import NavBar from "./Navbar"
import { useContext } from "react"
import { StoreContext } from "../tools/context.js"

const Header = () => {
    const [state, dispatch] = useContext(StoreContext)

    return(
        <header>
            <NavBar />
        </header>
        
        )
    
}

export default Header