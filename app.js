'use strict';
function helloWorld(person) {
  const body = document.querySelector('body');
  const p = document.createElement('p');
  p.innerText = 'Hello 2 ' + person;
  body.appendChild(p);
  console.log('Hello ' + person, body, p);

  console.log('Hello ' + person, body, p);
}

helloWorld('Bob');
helloWorld('Bob');
helloWorld('Bob');
helloWorld('Bob');
