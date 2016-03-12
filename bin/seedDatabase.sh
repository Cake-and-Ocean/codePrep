

curl --request POST \
  --url http://localhost:3000/seed \
  --header 'cache-control: no-cache' \
  --header 'content-type: application/json' \
  --header 'postman-token: dbbe9e14-a10c-a6a5-e534-e2308fae8efe' \
  --data '{\n    "currentIndex":1, \n    "nextIndex": 2, \n    "title": "Palindrome", \n    "description": ["Create a Palindrome function that will have one input paramter that is a string.", "Return true or false if the string is a palindrome."], \n    "examples": ["For example if your Palindrome function is sent the string '\''dad'\'' then it should return true.", "It should return false if passed the string '\''foobar'\''."], \n    "defaultValue": ["Palindrome(str) {", "//insert your code below", "", "};"], \n    "tests": ["Palindrome('\''dad'\'') should return '\''true'\''", "Palindrome('\''foobar'\'') should return '\''false'\''", "Palindrome('\''able was I ere I saw Elba'\'') should return '\''true'\''"], \n    "solution": ["Palindrome(str) {", "//insert your code below", "var str2 = str.toLowerCase().split('\'''\'').reverse().join('\'''\'');", "return str.toLowerCase() ==== str2;","}"]\n}\n\n'