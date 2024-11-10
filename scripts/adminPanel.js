
function loadUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function displayUsers() {
    const users = loadUsers();
    const tableBody = document.getElementById('user-table-body');
    tableBody.innerHTML = '';

    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.login}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editUser(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function editUser(index) {
    const users = loadUsers();
    const user = users[index];

    document.getElementById('edit-username').value = user.login;
    document.getElementById('edit-email').value = user.email;
    document.getElementById('edit-password').value = user.password;

    const editModal = new bootstrap.Modal(document.getElementById('editUserModal'));
    editModal.show();

    document.getElementById('save-edit').onclick = function () {
        user.login = document.getElementById('edit-username')
        user.firstName = document.getElementById('edit-firstname').value;
        user.lastName = document.getElementById('edit-lastname').value;
        user.email = document.getElementById('edit-email').value;
        user.password = document.getElementById('edit-password').value;

        users[index] = user;
        saveUsers(users);
        displayUsers();
        editModal.hide();
    };
}

function deleteUser(index) {
    if (confirm("Are you sure you want to delete this user?"))
    {
        const users = loadUsers();
        users.splice(index, 1);
        saveUsers(users);
        displayUsers();
    }
}

function checkLogin() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'login.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkLogin(); 
    displayUsers();
});
