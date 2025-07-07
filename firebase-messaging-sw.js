importScripts("https://www.gstatic.com/firebasejs/10.3.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.3.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey:  "AIzaSyBN_j_0C6m4W5ymhtwm9Ir1RpwroT31c44",
  authDomain:"pwa-portfolio-ae295.firebaseapp.com",
  projectId: "pwa-portfolio-ae295",
  appId: "1:1008296780477:web:e36ec2e3e8a5851e198dd4",
  appId: "YOUR_APP_ID",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message: ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/icons/icon-192.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
