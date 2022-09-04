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
    teams: [
      {
        id: 1,
        title: 'West Wien 07/08',
        initials: '07/08',
        totalMembers: 12,

        bgColorClass: 'bg-indigo-500',
      },
      {
        id: 2,
        title: 'West Wien 09/10',
        initials: '09/10',
        totalMembers: 12,

        bgColorClass: 'bg-green-500',
      },
      {
        id: 3,
        title: 'Future Team',
        initials: 'U20',
        totalMembers: 12,

        bgColorClass: 'bg-yellow-500',
      },
      {
        id: 4,
        title: 'Future Team',
        initials: 'U20',
        totalMembers: 12,

        bgColorClass: 'bg-lime-500',
      },
    ],
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
      return this.aktiverUser.type;
    },
  },
  //Actions
  actions: {
    setAktivenUser(user) {
      this.aktiverUser = user;

      SaveState();
    },
    deleteAktivenUser() {
      this.aktiverUser = null;
      SaveState(true);
    },
  },
});
