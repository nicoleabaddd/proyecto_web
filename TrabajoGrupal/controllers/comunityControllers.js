import firebase from '../firebase.js';
import Community from '../models/comunityModel.js'
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

export const createCommunity = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'Community'), data);
    res.status(200).send('Community created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getCommunities = async (req, res, next) => {
  try {
    const communities = await getDocs(collection(db, 'Community'));
    const communityArray = [];

    if (communities.empty) {
      res.status(400).send('No Communities found');
    } else {
      communities.forEach((doc) => {
        const community = new Community(
          doc.id,
          doc.data().foros,
          doc.data().name,
          doc.data().description,
          doc.data().creationdate,
          doc.data().categoryComunityCategoryId,
          doc.data().termsConditions,
        );
        communityArray.push(community);
      });

      res.status(200).send(communityArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateCommunity = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const community = doc(db, 'Community', id);
    await updateDoc(community, data);
    res.status(200).send('Community updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteCommunity = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'Community', id));
    res.status(200).send('Community deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
