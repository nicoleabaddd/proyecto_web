import firebase from '../firebase.js';
import Notifications from '../models/notificationModel.js';
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

export const createNotification = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'notifications'), data);
    res.status(200).send('Notification created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getNotifications = async (req, res, next) => {
  try {
    const notifications = await getDocs(collection(db, 'notifications'));
    const notificationArray = [];

    if (notifications.empty) {
      res.status(400).send('No Notifications found');
    } else {
      notifications.forEach((doc) => {
        const notification = new Notifications(
          doc.id,
          doc.data().newEvent,
          doc.data().publications,
          doc.data().userComunityReference,
          doc.data().eventsReference,
          doc.data().messages,
          doc.data().reminder,
        );
        notificationArray.push(notification);
      });

      res.status(200).send(notificationArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateNotification = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const notification = doc(db, 'notifications', id);
    await updateDoc(notification, data);
    res.status(200).send('Notification updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteNotification = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'notifications', id));
    res.status(200).send('Notification deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};