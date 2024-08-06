import firebase from '../firebase.js';
import Categories from '../models/categoriesModel.js';
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

export const createCategory = async (req, res, next) => {
  try {
    const data = req.body;
    await addDoc(collection(db, 'categories'), data);
    res.status(200).send('Category created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getCategories = async (req, res, next) => {
  try {
    const categories = await getDocs(collection(db, 'categories'));
    const categoryArray = [];

    if (categories.empty) {
      res.status(400).send('No Categories found');
    } else {
      categories.forEach((doc) => {
        const category = new Categories(
          doc.id,
          doc.data().Community,
          doc.data().Sports,
          doc.data().Learning,
          doc.data().Events,
          doc.data().CategoriesEvents,
          doc.data().CategoriesCommunity,
          doc.data().CommunityIdComunity,
          doc.data().CommunityCategoryComunityCategoryId,
        );
        categoryArray.push(category);
      });

      res.status(200).send(categoryArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const category = doc(db, 'categories', id);
    await updateDoc(category, data);
    res.status(200).send('Category updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, 'categories', id));
    res.status(200).send('Category deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};