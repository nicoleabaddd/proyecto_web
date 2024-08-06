import firebase from '../firebase.js';
import Gifications from '../models/gamificationModel.js';
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

export const createGification = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'gifications'), data);
    res.status(200).send('Gification created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getGifications = async (req, res, next) => {
  try {
    const gifications = await getDocs(collection(db, 'gifications'));
    const gificationArray = [];

    if (gifications.empty) {
      res.status(400).send('No Gifications found');
    } else {
      gifications.forEach((doc) => {
        const gification = new Gifications(
          doc.id,
          doc.data().achievement,
          doc.data().description,
        );
        gificationArray.push(gification);
      });

      res.status(200).send(gificationArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateGification = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const gification = doc(db, 'gifications', id);
    await updateDoc(gification, data);
    res.status(200).send('Gification updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteGification = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'gifications', id));
    res.status(200).send('Gification deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};