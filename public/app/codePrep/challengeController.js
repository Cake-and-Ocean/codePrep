app.controller('ChallengeController', ['$scope', function($scope) {
  // var myCodeMirror = CodeMirror(document.getElementById('code'));
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


  
}]);