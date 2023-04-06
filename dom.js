//console.log("hello");
//console.log(document.getElementById("main-header"));
//document.all[15].textContent = "hello";

var headerTitle = document.getElementById('header-title');
headerTitle.style.borderBottom = 'solid 3px #000';

var addItem = document.getElementsByClassName('title');
addItem[0].style.color = 'green';
//console.log(addItem);
//document.all[14].style.color = 'green';

var items= document.getElementsByClassName('list-group-item');
//console.log(items);
// items[2].style.backgroundColor = 'green';
//items.style.backgroundColor ='green';

for(var i=0; i<items.length; i++)
{
    items[i].style.fontWeight='bold';
}
// var li= document.getElementsByClassName('list-outside-item');
// //console.log(li);
// li[0].style.color = 'red';
 //items.style.backgroundColor ='green';

// for(var i=0; i<li.length; i++)
// {
//     li[i].style.fontWeight='bold';
// }
// var secondItem=document.querySelector('.list-group-item:nth-child(3)');
// secondItem.style.display = 'none';

var items= document.querySelectorAll('.list-group-item');
//console.log(items);
items[1].style.color='green';

var odd= document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='green';
}