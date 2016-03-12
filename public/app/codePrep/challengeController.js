app.controller('ChallengeController', ['$scope', '$http', function($scope, $http) {

  var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
    autoCloseBrackets: false,
    foldGutter: true,
    gutters: ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    keyMap: "sublime",
    lineNumbers: true,
    lineWrapping: true,
    lint: true,
    matchBrackets: true,
    mode: "javascript",  //TODO this value will be set by the language the user selects
    theme: "monokai"
  });



  var originalCode = "var palindrome = function(str){\n  return str;\n};\n"; 

  editor.setValue(originalCode);


  $scope.reset = function(){
    editor.setValue(originalCode);
  };

  $scope.submit = function(){
    var code = editor.getValue();
    var backup = code;
    //append the function code

    var repl = new ReplitClient(
      'api.repl.it',
      '80',
      'nodejs',
        {
         "time_created": 1457813501021,
         "msg_mac": "CVT++OppJtvFjCOGp9TAOaZKzWRzhMXZr7dEY15GHbQ="
        }
    );
    repl.connect().then(function() {
        return repl.evaluate(code, {stdout: function(out) { console.log(out);} } );
    }).then(function(result) {
        alert(result.data);
        console.log('result: ', result.error || result.data);
    }, function(err){
      console.log('Error: ', err);  
    });
    console.log('report bug button clicked');
  };

}]);
