import { useState } from "react";
import profilPict from "../assert/img/profil.png"
import star from "../assert/img/star.png"
import check from "../assert/img/check.jpeg"

const Profil = () => {
    const [user, setUser] = useState({
        ID: 1,
        Numero_de_rue: 13,
        Nom_de_rue: "Rue Général De Gaulle",
        Code_postale: 44000,
        Ville: "Nantes",
    });
    return(
        <div>
            <h1>A Propos de Martin</h1>
            <div className="flex justify-center items-center">
                <img className="w-40 h-40 mr-5" src={profilPict} alt="profil"></img>
                <p className="text-center italic w-1/2">"Bonjour, je suis Martin ! Ma priorité absolue est votre sécurité et celle de vos enfants, vous pouvez compter sur moi pour vous/les emmener à destination de manière fiable et conviviale. 
                    Autre point fort : ma Ponctualité ! Rejoignez-moi pour un trajet en toute confiance !"</p>
            </div>
            <div className="text-center">
                <div className="flex justify-center items-center">
                    <img className="w-10 h-10" src={check}></img>
                    <p>Profil Confirmé</p>
                </div>
                <p>Ce que pensent les passagers de Martin : <span className="underline">voir les commentaires</span> </p>
                <div className="flex justify-center">
                    <img className="w-5 h-5" src={star}></img>
                    <img className="w-5 h-5" src={star}></img>
                    <img className="w-5 h-5" src={star}></img>
                    <img className="w-5 h-5" src={star}></img>
                    <img className="w-5 h-5" src={star}></img>
                    <p className="pl-2">5/5</p>
                </div>
            </div>

        </div>
    )
}

export default Profil