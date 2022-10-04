import { defineStore } from 'pinia';

//Die Funktion läuft intern bei allen actions ab um den State im localstorage zu speichern
function SaveState(abmelden) {
  const store = PiniaStore();

  //   State speichern
  if (store.aktiverUser != null) {
    localStorage.setItem(store.$id, JSON.stringify(store.$state));
  } else if (abmelden) {
    localStorage.setItem(store.$id, JSON.stringify(store.$state));
  }
}

//MainStore
export const PiniaStore = defineStore('weManage', {
  //State
  state: () => ({
    aktiverUser: null,
    teams: [],
  }),
  //Getter
  getters: {
    getAktivenUser() {
      return this.aktiverUser;
    },
    getTeams() {
      return this.teams;
    },
    isTrainer() {
      try {
        if (this.aktiverUser.type === 'Trainer') return true;
        else return false;
      } catch (error) {
        return false;
      }
    },
    getNamen() {
      return `${this.aktiverUser.data.vorname} ${this.aktiverUser.data.nachname}`;
    },
  },
  //Actions
  actions: {
    setAktivenUser(user) {
      this.aktiverUser = user;

      SaveState();
    },
    deleteAktivenUser() {
      this.teams = [];
      this.aktiverUser = null;
      SaveState(true);
    },
    setMannschaften(mannschaften) {
      this.teams = mannschaften;
    },
  },
});
