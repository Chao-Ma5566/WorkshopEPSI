
import homeImg from "../assert/img/basketHome.png"

const Home = () => {
    return(
        <div class="pl-5 pt-5 flex items-center">
            <div>
                <img class="w-80 " src={homeImg} alt="basketteur qui shoote"></img>
            </div>
            <div class="text-center w-1/2 m-auto">
                <h1 class="text-3xl text-blue-500 font-semibold text-center pb-5 underline">Bienvenue sur le site des Ducs de Loire</h1>
                <p class="text-center">Retrouvez toutes les actualités de votre club, les planning des cours, et notre nouvelle plateforme de covoiturage
                    "Let's Cov'!" pour faciliter votre quotidien.</p>
                <br></br>
                <p>Plongez dans le monde du basket à Nantes avec passion et détermination.</p>
                <p>Rejoignez-nous pour vivre l'excitation du jeu et la force de la communauté.</p> 
                <br></br>
                <p class="font-semibold text-xl">Découvrez les Ducs de Loire !</p>
            </div>
 )
}

export default Home