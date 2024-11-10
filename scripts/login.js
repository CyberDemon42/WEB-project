function loginUser(login, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.login === login && user.password === password);
    
    if (!user) {
        alert('Invalid email or password.');
        return false;
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    alert('Login successful!');
    window.location.href = 'adminPanel.html';
    return true;
}
