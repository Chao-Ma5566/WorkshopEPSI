import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';

const AddTrajet = () => {
    const [ addressIsChecked, setAddressIsChecked ] = useState(false);
    const [ retourIsChecked, setRetourIsChecked ] = useState(true);
    const [ autreAddressIsChecked, setAutreAddressIsChecked] = useState(false);
    
    const [user, setUser] = useState({
        ID: 1,
        Numero_de_rue: 13,
        Nom_de_rue: "Rue Général De Gaulle",
        Code_postale: 44000,
        Ville: "Nantes",
    });

    const [ newTrajet, setNewTrajet ] = useState({
        ID_de_l_utilisateur_conducteur: '',
        Places_disponibles: '',
        Date_de_depart: '',
        Heure_de_la_demande: '',
        Adresse_de_depart: '',
        Aller_ou_retour: '',
        Heure_de_retour: ''
    })
    
    useEffect(() => {
        if (addressIsChecked) {
          setAutreAddressIsChecked(false);
        }
      }, [addressIsChecked]);

      useEffect(() => {
        if (autreAddressIsChecked) {
          setAddressIsChecked(false);
        }
      }, [autreAddressIsChecked]);

    const toggleCheckbox = () => {
        setAddressIsChecked(!addressIsChecked);
        if (addressIsChecked) {
            setAutreAddressIsChecked(false);
          }
    };

    const toggleCheckboxAutre = () => {
        setAutreAddressIsChecked(!autreAddressIsChecked);
        if (autreAddressIsChecked) {
            setAddressIsChecked(false);
          }
    };
    
    const toggleCheckboxRetour = () => {
        setRetourIsChecked(!retourIsChecked)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setNewTrajet({...newTrajet,[name]:value})
    }
    
     const submit = (e) => {
        e.preventDefault();
        let data = {
            ID_de_l_utilisateur_conducteur: newTrajet.ID_de_l_utilisateur_conducteur ,
            Places_disponibles: '',
            Date_de_depart: '',
            Heure_de_la_demande: '',
            Adresse_de_depart: '',
            Aller_ou_retour: '',
            Heure_de_retour: ''
        }

        if(addressIsChecked && retourIsChecked) {
            data.Adresse_de_depart = user.Numero_de_rue + user.Nom_de_rue + user.Code_postale + user.Ville;
            data.Aller_ou_retour = true;
            data.Heure_de_retour = newTrajet.Heure_de_retour;

        } else if (addressIsChecked && !retourIsChecked) {
            data.Adresse_de_depart = user.Numero_de_rue + user.Nom_de_rue + user.Code_postale + user.Ville;
            data.Aller_ou_retour = false;
            data.Heure_de_retour = '';

        } else if (autreAddressIsChecked && retourIsChecked) {
            data.Adresse_de_depart = newTrajet.Numero_de_rue + newTrajet.Nom_de_rue + newTrajet.Code_postale + newTrajet.Ville;
            data.Aller_ou_retour = true;
            data.Heure_de_retour = newTrajet.Heure_de_retour;

        } else if (autreAddressIsChecked && !retourIsChecked) {
            data.Adresse_de_depart = newTrajet.Numero_de_rue + newTrajet.Nom_de_rue + newTrajet.Code_postale + newTrajet.Ville;
            data.Aller_ou_retour = false;
            data.Heure_de_retour = '';
        }

    //     axios.post(`${BASE_URL}/addTrajet`,{data})
    //    .catch(err => console.log(err))
    }

    return(
        <div className="text-center">
            <h1>Ajouter un trajet</h1>
            <form onSubmit={submit} className="lg:flex lg:justify-around">
                <fieldset className="mt-4 mb-10 border inline w-full lg:w-5/12">
                    <legend className = "mb-3 text-2xl text-gray-500 px-5">Départ</legend>
                    <div>
                        <label>Date de Départ : <input className="border-solid" type="date" name="date-depart" value={newTrajet.Date_de_depart}/></label>
                    </div>
                    <div>
                        <label>Heure de Départ : <input type="time" name="heure-depart" value={newTrajet.Heure_de_la_demande}/></label>
                    </div>
                    <div>
                        <label className="mb-6">Adresse de Départ : <input type="checkbox" className="form-checkbox text-indigo-600 h-5 w-4 align-middle" checked={addressIsChecked} value={addressIsChecked} onChange={toggleCheckbox} ></input>
                        <label className="mt-4 pr-3">Mon Adresse</label></label>
                        <input type="checkbox" className="form-checkbox text-indigo-600 h-5 w-4 align-middle" checked={autreAddressIsChecked} value={autreAddressIsChecked} onChange={toggleCheckboxAutre} ></input><label className="mb-6">Autre adresse</label>
                    </div>
                    {autreAddressIsChecked && (
                        <div>
                            <label>Numéro : </label>
                            <input value={newTrajet.Numero_de_rue} type='text' onChange={handleChange}></input><br></br>
                            <label>Nom de la rue : </label>
                            <input value={newTrajet.Nom_de_rue} type='text' onChange={handleChange}></input><br></br>
                            <label>Code Postal : </label>
                            <input value={newTrajet.Code_postale}type='text' onChange={handleChange}></input><br></br>
                            <label>Ville : </label>
                            <input value={newTrajet.Ville} type='text' onChange={handleChange}></input>
                        </div>
                        
                    )}

                    <div className="py-2">
                        <label>Nombre de places disponibles :
                            <select name = "places-dispo" className="mb-10" value={newTrajet.Places_disponibles}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                            </select>
                        </label>
                    </div>
                </fieldset>
                <fieldset className=" flex flex-col justify-center mt-4 mb-10 border inline w-full lg:w-5/12">
                    <legend className = "text-2xl px-5 text-gray-500 mb-3">Retour</legend>
                    <div>
                        <input type="checkbox" className="align-middle form-checkbox text-indigo-600 h-5 w-4" checked={retourIsChecked} value={retourIsChecked} onChange={toggleCheckboxRetour}></input><label>Aller-Retour</label>
                    </div>
                    {retourIsChecked && (
                    <div>
                        <label>Heure de Retour : <input type="time" name="heure-depart" /></label>
                    </div>)}
                </fieldset>
            </form>
            <div className="justify-center">
                <button className="tems-center mb-10 bg-bleu-500 rounded-full h-10 p-2 hover:bg-yellow">Valider mon Trajet</button>
            </div>
        </div>
        )
}

export default AddTrajet