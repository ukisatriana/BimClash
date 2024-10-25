import { 
  auth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword
}  from 'auth/FirebaseAuth';

const FirebaseService = {}

FirebaseService.signInEmailRequest = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password).then(user => user).catch(err => err);
}

FirebaseService.signOutRequest = async () =>
	await signOut(auth).then(user => user).catch(err => err);

FirebaseService.signUpEmailRequest = async (email, password) =>
	await createUserWithEmailAndPassword(auth, email, password).then(user => user).catch(err => err);	
	
export default FirebaseService