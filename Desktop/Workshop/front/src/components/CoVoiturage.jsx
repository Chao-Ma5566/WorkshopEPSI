import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Calendar, momentLocalizer } from 'react-big-calendar'

import { NavLink } from "react-router-dom"
import moment from 'moment'
import { useState } from 'react'

const CoVoiturage = () => {
    const localizer = momentLocalizer(moment)
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    
    const myEventsList = [
        {
          start: moment().toDate(), // Date et heure de début de l'événement (actuelle)
          end: moment().add(2, 'hours').toDate(), // Date et heure de fin de l'événement (2 heures plus tard)
          title: 'Trajet de Martin', // Titre de l'événement
          placesDispo: 2,
          adresse: "18 rue les grandchildren, 44200"
        },
        {
          start: moment().add(1, 'day').toDate(), // Date et heure de début de l'événement (demain)
          end: moment().add(1, 'day').add(3, 'hours').toDate(), // Date et heure de fin de l'événement (demain, 2 heures plus tard)
          title: 'Trajet de Julie', // Titre de l'événement
          placesDispo: 3,
          adresse: "18 bd grande biesse, 44200"
        },
        {
          start: moment().add(1, 'day').add(5, 'hours').toDate(), // Date et heure de début de l'événement (demain)
          end: moment().add(1, 'day').add(7, 'hours').toDate(), // Date et heure de fin de l'événement (demain, 2 heures plus tard)
          title: 'Trajet de Quentin', // Titre de l'événement
          placesDispo: 3,
          adresse: "10 rue les grandchildren, 44200"
        },
        // Ajoutez d'autres événements selon vos besoins
      ];
    //   const myEventsList = [
    //     {
    //       start: moment('2023-10-05T14:30:00Z').toDate(),
    //       end: moment('2023-10-05T16:30:00Z').toDate(),
    //       title: 'Trajet 1',
    //       placesDispo: 2,
    //     },
    //     {
    //       start: moment('2023-10-06T10:00:00Z').toDate(),
    //       end: moment('2023-10-06T12:00:00Z').toDate(),
    //       title: 'Trajet 2',
    //       placesDispo: 3,
    //     },
    //     // Ajoutez d'autres événements selon vos besoins
    //   ];
      const EventComponent = ({ event }) => (
        <div className="bg-blue-200 text-white p-2 rounded-lg">
          <strong>{event.title}</strong>
          <p>Places : {event.placesDispo}</p>
          <p className="hidden">Adresse de départ : {event.adresse}</p>
        </div>
      );

      const handleEventClick = (event, e) => {
        e.preventDefault();
        setSelectedEvent(event);
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
        setSelectedEvent(null);
      };
      
    return(
        <div className="font-satoshi">
            <section className="flex flex-row justify-evenly w-full text-white mt-6">
                <NavLink className="flex flex-col items-center mr-4 bg-bleu-500 rounded-full h-10 p-2 hover:bg-yellow" to="/co-voiturage" title="Trajets Proposés">
                    Trajets Proposés
                </NavLink>
                <NavLink className="flex flex-col items-center mr-4 bg-bleu-500 rounded-full h-10 p-2 hover:bg-yellow" to="/home" title="Mes trajets">
                    Mes trajets
                </NavLink>
                <NavLink className="flex flex-col items-center bg-bleu-500 rounded-full h-10 p-2 hover:bg-yellow" to="/home" title="Ajouter trajets">
                    Ajouter trajets
                </NavLink>
            </section>
            <h1 className="text-center my-10 text-3xl">Trajets Proposés</h1>
            <div className="mx-8 mb-4">
                <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                onSelectEvent={handleEventClick}
                components={{
                    event: EventComponent,
                }}    
                />
            </div>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center text-center">
                    <div className="modal-bg fixed inset-0 bg-black opacity-50"></div>
                    <div className="modal-container bg-white w-1/2 rounded-lg p-4 relative">
                    <span className="modal-close text-gray-500 hover:text-gray-700 absolute top-2 right-2 p-2 cursor-pointer" onClick={closeModal}>
                        &times;
                    </span>
                    {selectedEvent && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">{selectedEvent.title}</h2>
                            <p className="mb-2">Date : {selectedEvent.start.toDateString()}</p>
                            <p className="mb-2">Heure de début : {selectedEvent.start.toLocaleTimeString()}</p>
                            <p className="mb-2">Heure de fin : {selectedEvent.end.toLocaleTimeString()}</p>
                            <p className="mb-2">Adresse de départ: {selectedEvent.adresse}</p>
                            <p className="mb-2">Place disponible: {selectedEvent.placesDispo}</p>
                            <div>
                            <NavLink className="flex flex-col items-center bg-bleu-500 rounded-full text-white h-10 p-2 hover:bg-yellow" to="/home" title="Réserver ce trajet">
                                Réserver
                            </NavLink>
                            <NavLink className="flex flex-col items-center bg-bleu-500 rounded-full text-white h-10 p-2 hover:bg-yellow" to="/home" title="Réserver ce trajet">
                                Message
                            </NavLink>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
                )}
        </div>
        )
    
}

export default CoVoiturage