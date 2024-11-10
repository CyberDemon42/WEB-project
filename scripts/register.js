function registerUser(login, email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(user => user.login === login || user.email === email)) {
        alert('User with this username or email already exists.');
        return false;
    }

    users.push({ login, email, password, isAdmin: true });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html';
    return true;
}
