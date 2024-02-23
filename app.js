'use strict';
function helloWorld(person) {
  const body = document.querySelector('body');
  const p = document.createElement('p');
  p.innerText = 'Hello ' + person;
  body.appendChild(p);
  console.log('Hello ' + person);
}

helloWorld('Bob');
