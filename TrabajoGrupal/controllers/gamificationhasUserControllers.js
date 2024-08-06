import firebase from '../firebase.js';
import GamificationsHasUser from '../models/gamificationhasUserModel.js';
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

export const createGificationsHasUser = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'gificationsHasUser'), data);
    res.status(200).send('GificationsHasUser created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getGificationsHasUsers = async (req, res, next) => {
  try {
    const gificationsHasUsers = await getDocs(collection(db, 'gificationsHasUser'));
    const gificationsHasUserArray = [];

    if (gificationsHasUsers.empty) {
      res.status(400).send('No GificationsHasUsers found');
    } else {
      gificationsHasUsers.forEach((doc) => {
        const gificationsHasUser = new GamificationsHasUser(
          doc.id,
          doc.data().gificationsIdgifications,
          doc.data().userIdComunity,
          doc.data().userIdUsername,
          doc.data().date,
        );
        gificationsHasUserArray.push(gificationsHasUser);
      });

      res.status(200).send(gificationsHasUserArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateGificationsHasUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const gificationsHasUser = doc(db, 'gificationsHasUser', id);
    await updateDoc(gificationsHasUser, data);
    res.status(200).send('GificationsHasUser updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteGificationsHasUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'gificationsHasUser', id));
    res.status(200).send('GificationsHasUser deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};