importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCKek_8XaXtLK_G6ysf46sjYmezSCrtSJY",
    authDomain: "realfarm-assistant.firebaseapp.com",
    projectId: "realfarm-assistant",
    storageBucket: "realfarm-assistant.appspot.com",
    messagingSenderId: "26180360616",
    appId: "1:26180360616:web:621575bc05468bc6f8259d",
    measurementId: "G-Y85HL1SY4E"
});
const messaging = firebase.messaging();