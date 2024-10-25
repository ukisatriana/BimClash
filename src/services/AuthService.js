import { 
	auth,
	signInWithEmailAndPassword,
	signOut,
	createUserWithEmailAndPassword,
	signInWithPopup
  } from 'auth/FirebaseAuth';
  
  const AuthService = {}
  
  AuthService.login = function (data) {
	const { email, password } = data;
	return signInWithEmailAndPassword(auth, email, password)
	  .then(userCredential => userCredential.user)
	  .catch(error => { throw error });
  }
  
  AuthService.register = function (data) {
	const { email, password } = data;
	return createUserWithEmailAndPassword(auth, email, password)
	  .then(userCredential => userCredential.user)
	  .catch(error => { throw error });
  }
  
  AuthService.logout = function () {
	return signOut(auth)
	  .then(() => true)
	  .catch(error => { throw error });
  }
  
  AuthService.loginInOAuth = function (provider) {
	return signInWithPopup(auth, provider)
	  .then(userCredential => userCredential.user)
	  .catch(error => { throw error });
  }
  
  export default AuthService;