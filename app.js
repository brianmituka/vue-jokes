var joke = Vue.component('joke', {
  template: '#joke',
  data() {
    return {
      jokes: []
    };
  },
  // props: ['joke'],
  created() {
    //do something after creating vue instance
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
        // console.log(response.data.results);
        // console.log(this.jokes);
      });
  }
});

new Vue({
  el: '#main'
});
