import firebase from '../firebase.js';
import User from '../models/userModel.js';
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

// export const createUser = async (req, res, next) => {
//   try {
//     const data = req.body;
//     await addDoc(collection(db, 'user'), data);
//     res.status(200).send('User created successfully');
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };
export const createUser = async (req, res, next) => {
  try {
    const data = req.body;
    const typeUser = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      comunityReference: data.comunityReference,
      birthday: data.birthday,
      interestes: data.interestes,
      fk_typeuser: doc(db, "sub-category", data.idsubCategory)
    };
    await addDoc(collection(db, 'user'), typeUser);
    res.status(200).send('User created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};


export const getUsers = async (req, res, next) => {
  try {
    const users = await getDocs(collection(db, 'user'));
    const userArray = [];

    if (users.empty) {
      res.status(400).send('No Users found');
    } else {
      users.forEach((doc) => {
        const user = new User(
          doc.id,
          doc.data().name,
          doc.data().email,
          doc.data().phone,
          doc.data().comunityReference,
          doc.data().birthday,
          doc.data().interestes,
        );
        userArray.push(user);
      });

      res.status(200).send(userArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const user = doc(db, 'user', id);
    await updateDoc(user, data);
    res.status(200).send('User updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'user', id));
    res.status(200).send('User deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};