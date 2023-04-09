document.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();
    var fullname = document.getElementById('name').value;
    
    var email = document.getElementById('email').value;

    let obj={
        name :fullname,
        email:email
    }
    localStorage.setItem('userDetails', JSON.stringify(obj));
}
// var firstName = document.getElementById('name').value;
// console.log(firstName);
//     localStorage.setItem('name', firstName);