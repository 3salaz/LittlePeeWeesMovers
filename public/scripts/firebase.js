// FIREBASE CONFIGURATION
var firebaseConfig = {
    apiKey: "AIzaSyA1ooHgPZU_5qAKPYEwCrqcy2WteFjj37g",
    authDomain: "peeweemovers.firebaseapp.com",
    projectId: "peeweemovers",
    storageBucket: "peeweemovers.appspot.com",
    messagingSenderId: "1037281888141",
    appId: "1:1037281888141:web:92e56fef3db4d375559fc4",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase
    .database()
    .ref("videos")
    .on("value", function (snap) {
      snap.forEach(function (childNodes) {
        videoData.push(
          Object.keys(childNodes.val()).map((key) => [
            Number(key),
            childNodes.val()[key],
          ])
        );
      });
    });