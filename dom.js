
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


// Form submit event
form.addEventListener('submit', addItem);




// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newInput = document.getElementById('description').value;
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newInput));
  //Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  

  // Append button to li
  li.appendChild(deleteBtn);

  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-success btn-sm float-right';
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(editBtn);
  // Append li to list
  itemList.appendChild(li);
}

// Delete event
itemList.addEventListener('click', removeItem);
// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
  
  let items=document.getElementsByClassName('list-group-item');
  for(var i=0; i<items.length; i++){
    // console.log("hii");
    // console.log(items[i]);
    let editBtn = document.createElement('button');
  editBtn.className = 'btn btn-success btn-sm float-right mr-1';
  editBtn.appendChild(document.createTextNode('Edit'));
    items[i].append(editBtn);
  }
  
  var filter = document.getElementById('filter');
  // Filter event
 filter.addEventListener('keyup', filterItems);

 // Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // console.log(text);
    // Get lis
    var items = itemList.getElementsByTagName('li');
    //console.log(items);
    // // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      let description = item.childNodes[1].textContent;

      if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }