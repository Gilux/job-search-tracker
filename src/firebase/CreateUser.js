import firebase from "firebase";

// Set the Realtime Database record with custom informations for the user
function writeBaseUserData(userId) {
  return new Promise((resolve, reject) => {
    firebase
    .database()
    .ref("users/" + userId)
    .set({
      applications: [],
      data: {
        admin: false
      }
    })
    .then((d) => {
      resolve()
    })
    .catch(err => {
      reject(err)
    })
  })
}

// Creates the user
export default function createUser(email, password) {
  return new Promise((resolve, reject) => {
    console.log(firebase)
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function(userRecord) {
      console.log("creating user.............................", userRecord)
      writeBaseUserData(userRecord.user.uid)
      .then(() => {
        resolve()
      })
    })
    .catch(function(error) {
      console.error("Error creating new user:", error);
      reject()
    });
  })
}
