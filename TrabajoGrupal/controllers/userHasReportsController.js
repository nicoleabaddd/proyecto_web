import firebase from '../firebase.js';
import UserHasReports from '../models/userhasresportsModels.js';
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

export const createUserHasReport = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'userHasReports'), data);
    res.status(200).send('UserHasReport created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getUserHasReports = async (req, res, next) => {
  try {
    const userHasReports = await getDocs(collection(db, 'userHasReports'));
    const userHasReportArray = [];

    if (userHasReports.empty) {
      res.status(400).send('No UserHasReports found');
    } else {
      userHasReports.forEach((doc) => {
        const userHasReport = new UserHasReports(
          doc.id,
          doc.data().idUser,
          doc.data().idReport,
        );
        userHasReportArray.push(userHasReport);
      });

      res.status(200).send(userHasReportArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateUserHasReport = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const userHasReport = doc(db, 'userHasReports', id);
    await updateDoc(userHasReport, data);
    res.status(200).send('UserHasReport updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteUserHasReport = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'userHasReports', id));
    res.status(200).send('UserHasReport deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};