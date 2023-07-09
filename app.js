const app = Vue.createApp({
  data() {
    return {
      goals: ['Illia', 'Boiko', 'HH', '!@#', '123'],
      newGoal: '',
      goalToDelete: '',
      me: {
        name: 'Illia',
        'last name': 'Boiko',
        age: 22,
        city: 'Lviv'
      }
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.newGoal);
      this.newGoal = '';
    },

    deleteGoal(index) {
      this.goals.splice(index, 1)
    }
  },

  watch: {
    goals: {
      handler(value) {
        if (value.length > 5) {
          value.shift();
        }
      },

      deep: true,
    }
  }
});

app.mount('#user-goals');
