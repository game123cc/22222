// storage.js
const Storage = {
  // --- Работа с комнатами ---
  getRooms() {
    const raw = localStorage.getItem("rooms");
    return raw ? JSON.parse(raw) : [];
  },

  saveRooms(rooms) {
    localStorage.setItem("rooms", JSON.stringify(rooms));
  },

  updateRoom(room) {
    const rooms = this.getRooms();
    const index = rooms.findIndex(r => r.name === room.name);
    if (index !== -1) {
      rooms[index] = room;
      this.saveRooms(rooms);
    }
  },

  clearRooms() {
    localStorage.removeItem("rooms");
    localStorage.removeItem("currentRoom");
  },

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


