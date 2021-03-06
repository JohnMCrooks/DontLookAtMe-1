module.exports = function(app) {

    app.factory('NewsService', ['$http', '$location', function($http, $location) {

      var  newsArray = {
        async: function(pageNum, perPage) {

            var promise = $http({
                method: 'GET',
                url: '/articles',
            }).then(function(response) {
                console.log(response, "HEY THERE!");
                let start = (pageNum + 1) * perPage;

                return response.data.slice(start, start + perPage);

            });
          return promise;
        },

        //////SIGN OUT FUNCTION//////
                    signOutUser: function(){

                      $http({
                          url: '/logout',
                          method: 'POST',
                          data: {username: 'Winnie'}
                      })
                      .then(function(results) {
                          // $location('#/home')
                      });
                    }
        //////SIGN OUT FUNCTION/////////


      };
      return newsArray;

    }]);
};
