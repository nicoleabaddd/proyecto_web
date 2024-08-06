import firebase from '../firebase.js';
import Rolls from '../models/rollsModels.js';
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

export const createRoll = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'rolls'), data);
    res.status(200).send('Roll created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getRolls = async (req, res, next) => {
  try {
    const rolls = await getDocs(collection(db, 'rolls'));
    const rollArray = [];

    if (rolls.empty) {
      res.status(400).send('No Rolls found');
    } else {
      rolls.forEach((doc) => {
        const roll = new Rolls(
          doc.id,
          doc.data().idUserComunity,
          doc.data().idRole,
        );
        rollArray.push(roll);
      });

      res.status(200).send(rollArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateRoll = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const roll = doc(db, 'rolls', id);
    await updateDoc(roll, data);
    res.status(200).send('Roll updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteRoll = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'rolls', id));
    res.status(200).send('Roll deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};