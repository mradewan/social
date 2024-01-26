function validateForm(event) {
    event.preventDefault(); 

    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in all the fields.');
    } else {
        alert('Form submitted successfully!\nUsername: ' + username + '\nPassword: ' + password);
    }
}
