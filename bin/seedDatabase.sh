#!/bin/sh
URL=http://localhost:3000/seed/

##### Seed mongo database with sample challenges
curl -v -X POST -H "Content-Type: application/json" -d '{ "currentIndex":1, "nextIndex": 2, "title": "Palindrome", "description": ["Create a Palindrome function that will have one input paramter that is a string.", "Return true or false if the string is a palindrome."], "examples": ["For example if your Palindrome function is sent the string 'dad' then it should return true.", "It should return false if passed the string 'foobar'."], "defaultValue: ["Palindrome(str) {", "//insert your code below", "", "};"], "tests": ["Palindrome('dad') should return 'true'", "Palindrome('foobar') should return 'false'", "Palindrome('able was I ere I saw Elba') should return 'true'"], "solution: ["Palindrome(str) {", "//insert your code below", "var str2 = str.toLowerCase().split('').reverse().join('');", "return str.toLowerCase() ==== str2;","}"] }' $URL

