import firebase from '../firebase.js';
import Events from '../models/eventModel.js';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const db = getFirestore(firebase);

export const createEvent = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'events'), data);
    res.status(200).send('Event created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getEvents = async (req, res, next) => {
  try {
    const events = await getDocs(collection(db, 'events'));
    const eventArray = [];

    if (events.empty) {
      res.status(400).send('No Events found');
    } else {
      events.forEach((doc) => {
        const event = new Events(
          doc.id,
          doc.data().nameEvent,
          doc.data().tipeComunity,
          doc.data().location,
          doc.data().date,
          doc.data().eventDuration,
          doc.data().comunityReference,
          doc.data().categoryReference,
        );
        eventArray.push(event);
      });

      res.status(200).send(eventArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const event = doc(db, 'events', id);
    await updateDoc(event, data);
    res.status(200).send('Event updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'events', id));
    res.status(200).send('Event deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};