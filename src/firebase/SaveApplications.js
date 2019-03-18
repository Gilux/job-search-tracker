import firebase from "firebase";

export default function SaveApplications(userId, payload) {
  // We must remove the "$id" from vuex-orm, because Firebase doesn't support "$" in key names.
  Object.keys(payload).forEach(k => {
    delete payload[k].$id;
  });
  firebase
    .database()
    .ref("users/" + userId + "/applications")
    .set(payload);
}
