import auth from '@react-native-firebase/auth';

const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    console.log('User registered:', userCredential.user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Signup Error:', error.message);
    } else {
      console.error('Signup Error:', error);
    }
  }
};

const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    console.log('User signed in:', userCredential.user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Signup Error:', error.message);
    } else {
      console.error('Signup Error:', error);
    }
  }
};


const signOut = async () => {
  await auth().signOut();
  console.log('User signed out');
};


export { signUp, signIn, signOut };
