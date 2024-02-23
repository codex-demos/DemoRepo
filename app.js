'use strict';
function helloWorld(person) {
  const body = document.querySelector('body');
  const p = document.createElement('p');
  p.innerText = 'Hello ' + person;
  body.appendChild(p);
}
function helloWorl2d(person) {
  const body = document.querySelector('body');
  const p = document.createElement('p');
  p.innerText = 'Hello ' + person;
  body.appendChild(p);
}
function helloWor4ld(person) {
  const body = document.querySelector('body');
  const p = document.createElement('p');
  p.innerText = 'Hello ' + person;
  body.appendChild(p);
}
function helloWorld2(person) {
  const body = document.querySelector('body');
  const p = document.createElement('p');
  p.innerText = 'Hello ' + person;
  body.appendChild(p);
  console.log('Hello ' + person, body, p);
}

helloWorld('Bob');
