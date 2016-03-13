app.factory('Auth', ['$state', function() {
  var isAuth = (function isAuth(){
    var auth = false;
    function set (obj) {
      auth = obj;
    }
    function get () {
      return auth;
    }
    return {
      set: set,
      get: get
    };
  })();

  var signup = function(){
    $http.post('/signup', {
      email: 'test1@fakeGmail.com',
      password: 'asdf123'
    }).then(function(res){
      isAuth.set({email: res.body.email});
    }, function(err){
      console.log('Error: ', err);
    });
  };

  var login = function(){
    $http.post('/login', {
      email: 'test1@fakeGmail.com',
      password: 'asdf123'
    }).then(function(res){
      isAuth.set({email: res.body.email});
    }, function(err){
      console.log('Error: ', err);
    });
  };

  var logout = function(){
    $http.get('logout').then(function(res){
      isAuth.set(false);
      $state.go('landing');
    }, function (err){
      console.log('Error: ', err);
    });
  };

  return {
    isAuth: isAuth.get,
    signup: signup,
    login: login,
    logout: logout
  };

}]);