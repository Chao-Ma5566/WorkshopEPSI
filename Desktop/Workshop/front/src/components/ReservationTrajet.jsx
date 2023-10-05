import React, { useState } from 'react';
import axios from "axios";
import { NavLink } from "react-router-dom"
import backgroundImg from '../assert/img/cars.png'

const ReservationTrajet = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
      };

    const [trajet, setTrajet] = useState({
        ID: 1,
        Nom: "Dupont",
        Prenom: "Martin",
        Adresse_email: "martin.dupont@gmail.com",
        Numero_de_rue: 13,
        Nom_de_rue: "Rue Général De Gaulle",
        Code_postale: 44000,
        Ville: "Nantes",
        Heure_de_la_demande: "18:30",
        Places_disponibles: 3
    });

    const [user, setUser] = useState({
        ID: 1,
        Nom_de_l_enfant: "Maria"
    })

    const [placesAReserver, setPlacesAReserver] = useState(0);

    // Fonction pour gérer le changement de sélection
    const handleSelectChange = (e) => {
        const selectedValue = parseInt(e.target.value, 10); // Convertir en nombre
        setPlacesAReserver(selectedValue);
    };

    return(
        <div style={backgroundImageStyle} >
            <div className="flex items-center flex-col drop-shadow-md">
                <h1>Réservation - Trajet de Martin</h1>
                <div className="bg-white w-1/2">
                    <h2>Chauffeur</h2>
                    <p className="text-center py-1">Prénom : <NavLink to="/profil">{trajet.Prenom}</NavLink></p>
                    <p className="text-center py-1">Contact : {trajet.Adresse_email}</p>
                </div>
                <div className="bg-white w-1/2">
                <h2>Trajet</h2>
                    <p className="text-center py-1">Heure de départ : {trajet.Heure_de_la_demande}</p>
                    <p className="text-center py-1">Adresse de Départ : {trajet.Numero_de_rue} {trajet.Nom_de_rue} {trajet.Code_postale} {trajet.Ville}</p>
                    <p className="text-center py-1">Places Disponibles: {trajet.Places_disponibles}</p>
                </div>
                <div className="bg-white w-1/2">
                <h2>Réservation</h2>
                    <form className="text-center">
                        <label>Nombre de places à réserver : <select value={placesAReserver} onChange={handleSelectChange}>
                        {[...Array(trajet.Places_disponibles + 1).keys()].map((num) => (<option key={num} value={num}>{num}</option>))}
                        </select></label>
                        <label>Passager : 
                            <select>
                            <option value={1}>{user.Nom_de_l_enfant}</option></select></label>
                    </form>
                    <div className="flex justify-center mb-5">
                        <button className="text-white bg-blue-500 hover:bg-yellow rounded-full h-10 mt-6 px-6">Valider ma demande de Réservation (-1 point)</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReservationTrajet