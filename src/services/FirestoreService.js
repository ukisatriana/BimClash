import { db } from 'configs/FirebaseConfig';
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const FirestoreService = {};

FirestoreService.createDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
  } catch (error) {
    throw new Error('Error adding document: ' + error.message);
  }
};

FirestoreService.getDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return documents;
  } catch (error) {
    throw new Error('Error getting documents: ' + error.message);
  }
};

FirestoreService.getDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const document = await getDoc(docRef);
    if (document.exists()) {
      return document.data();
    } else {
      throw new Error('Document not found');
    }
  } catch (error) {
    throw new Error('Error fetching document: ' + error.message);
  }
};

FirestoreService.updateDocument = async (collectionName, docId, data) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, data);
  } catch (error) {
    throw new Error('Error updating document: ' + error.message);
  }
};


FirestoreService.deleteDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
  } catch (error) {
    throw new Error('Error deleting document: ' + error.message);
  }
};

export default FirestoreService;