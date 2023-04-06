var itemList = document.querySelector('#items');

//console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title', 'hello div');

var newDivText=document.createTextNode('Hello');
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

container.insertBefore(newDiv, h1);

var newLi=document.createElement('li');

var newLiText=document.createTextNode('Hello');
newLi.appendChild(newLiText);
console.log(newLi);

// var parent=document.querySelector(' .list-group');
// console.log(parent.parentNode);
var container1=document.querySelector('div .list-group');
 var li=document.querySelector('div li');

 container1.insertBefore(newLi, li);