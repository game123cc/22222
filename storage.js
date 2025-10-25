// storage.js

// 🔥 Подключение Firebase
const firebaseConfig = {
  apiKey: "ТВОЙ_API_KEY",
  authDomain: "ТВОЙ_ПРОЕКТ.firebaseapp.com",
  databaseURL: "https://ТВОЙ_ПРОЕКТ.firebaseio.com",
  projectId: "ТВОЙ_ПРОЕКТ",
  storageBucket: "ТВОЙ_ПРОЕКТ.appspot.com",
  messagingSenderId: "XXX",
  appId: "1:XXX:web:XXX"
};

if (!window.firebaseApp) {
  firebase.initializeApp(firebaseConfig);
  window.firebaseApp = true;
}
const db = firebase.database();

// --- Работа с комнатами ---
const Storage = {
  async getRooms() {
    const snapshot = await db.ref("rooms").once("value");
    const data = snapshot.val();
    return data ? Object.values(data) : [];
  },

  async saveRooms(rooms) {
    const updates = {};
    rooms.forEach(r => updates[r.name] = r);
    await db.ref("rooms").set(updates);
  },

  async addRoom(room) {
    await db.ref("rooms/" + room.name).set(room);
  },

  async updateRoom(room) {
    await db.ref("rooms/" + room.name).update(room);
  },

  async clearRooms() {
    await db.ref("rooms").remove();
  },

  // --- Текущее состояние ---
  getCurrentRoom() {
    return localStorage.getItem("currentRoom");
  },
  setCurrentRoom(name) {
    localStorage.setItem("currentRoom", name);
  },

  // --- Работа с ником ---
  setNickname(nickname) {
    localStorage.setItem("nickname", nickname);
  },
  getNickname() {
    return localStorage.getItem("nickname") || "username";
  },
  clearNickname() {
    localStorage.removeItem("nickname");
  }
};


