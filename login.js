const users = {}; // Store user data (username and password)

document.getElementById('signup-btn').addEventListener('click', () => {
    const username = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    if (!username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    if (users[username]) {
        alert('Username already exists. Please choose another.');
        return;
    }

    users[username] = password;
    alert('Signup successful! You can now log in.');
    document.getElementById('signup-username').value = '';
    document.getElementById('signup-password').value = '';
    showLoginForm();
});

document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (!username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    if (users[username] && users[username] === password) {
        alert(`Welcome back, ${username}!`);
        sessionStorage.setItem('loggedInUser', username); // Store username in sessionStorage
        window.location.href = 'index.html'; // Redirect to the chatbot interface
    } else {
        alert('Invalid username or password.');
    }
});

document.getElementById('show-signup').addEventListener('click', (e) => {
    e.preventDefault();
    showSignupForm();
});

document.getElementById('show-login').addEventListener('click', (e) => {
    e.preventDefault();
    showLoginForm();
});

function showSignupForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}
