import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute.jsx"
import routes from '../tools/routes.js'

const Router = () => {
    return (
        <Routes>
            {/* on récupère la liste des routes et on la map */} 
            {routes.map(({ path, auth, component },i) => {
                return(
                    <Route 
                        key={i} 
                        path={path} 
                        element={
                            // <PrivateRoute auth={auth}> 
                            //     {component}
                            // </PrivateRoute>
                            component
                        } 
                    />
                )
            })}
        </Routes>
    )
}

export default Router