import firebase from '../firebase.js';
import Share from '../models/shareModel.js';
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

export const createShare = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'Shares'), data);
    res.status(200).send('Share created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getShares = async (req, res, next) => {
  try {
    const shares = await getDocs(collection(db, 'Shares'));
    const shareArray = [];

    if (shares.empty) {
      res.status(400).send('No Shares found');
    } else {
      shares.forEach((doc) => {
        const share = new Share(
          doc.id,
          doc.data().nameShare,
          doc.data().tipeComunity,
          doc.data().location,
          doc.data().date,
          doc.data().ShareDuration,
          doc.data().comunityReference,
          doc.data().categoryReference,
        );
        shareArray.push(share);
      });

      res.status(200).send(shareArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateShare = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const share = doc(db, 'Shares', id);
    await updateDoc(share, data);
    res.status(200).send('Share updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteShare = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'Shares', id));
    res.status(200).send('Share deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};