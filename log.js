document.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();
    var fullname = document.getElementById('name').value;
    localStorage.setItem('name', fullname);

    var email = document.getElementById('email').value;
    localStorage.setItem('email', email);
}
// var firstName = document.getElementById('name').value;
// console.log(firstName);
//     localStorage.setItem('name', firstName);