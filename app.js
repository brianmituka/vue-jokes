var joke = Vue.component('joke', {
  template: '#joke',
  data() {
    return {
      jokes: []
    };
  },
  created() {
    axios
      .get('https://icanhazdadjoke.com/search', {
        headers: {
          Accept: 'application/json'
        },
        params: {
          limit: 30
        }
      })
      .then(response => {
        this.jokes = response.data.results;
      });
  }
});

new Vue({
  el: '#main'
});
