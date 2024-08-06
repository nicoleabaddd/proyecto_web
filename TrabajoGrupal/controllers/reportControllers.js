import firebase from '../firebase.js';
import Reports from '../models/userHasReportstModel.js';
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

export const createReport = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'reports'), data);
    res.status(200).send('Report created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getReports = async (req, res, next) => {
  try {
    const reports = await getDocs(collection(db, 'reports'));
    const reportArray = [];

    if (reports.empty) {
      res.status(400).send('No Reports found');
    } else {
      reports.forEach((doc) => {
        const report = new Reports(
          doc.id,
          doc.data().idUserComunity,
          doc.data().description,
    
        );
        reportArray.push(report);
      });

      res.status(200).send(reportArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateReport = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const report = doc(db, 'reports', id);
    await updateDoc(report, data);
    res.status(200).send('Report updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteReport = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'reports', id));
    res.status(200).send('Report deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};