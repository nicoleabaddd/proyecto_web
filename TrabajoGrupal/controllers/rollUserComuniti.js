import firebase from '../firebase.js';
import RollUserComunity from '../models/rollUserComunity.js';
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

export const createRollUserComunity = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'rollUserComunity'), data);
    res.status(200).send('RollUserComunity created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getRollUserComunitys = async (req, res, next) => {
  try {
    const rollUserComunitys = await getDocs(collection(db, 'rollUserComunity'));
    const rollUserComunityArray = [];

    if (rollUserComunitys.empty) {
      res.status(400).send('No RollUserComunitys found');
    } else {
      rollUserComunitys.forEach((doc) => {
        const rollUserComunity = new RollUserComunity(
          doc.id,
          doc.data().comunityIdComunity,
          doc.data().userIdComunity,
          doc.data().userIdUsername,
          doc.data().rollsIdrolls,
          doc.data().joinigDate,
        );
        rollUserComunityArray.push(rollUserComunity);
      });

      res.status(200).send(rollUserComunityArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateRollUserComunity = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const rollUserComunity = doc(db, 'rollUserComunity', id);
    await updateDoc(rollUserComunity, data);
    res.status(200).send('RollUserComunity updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteRollUserComunity = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'rollUserComunity', id));
    res.status(200).send('RollUserComunity deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};