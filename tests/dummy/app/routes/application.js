import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return fetch('assets/sample.json').then(
      function (response) {
        return response.json().then(function(data) {
          return data;
        });
      }
    )
  }
}
