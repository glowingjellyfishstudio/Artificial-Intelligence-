// Load users from localStorage or initialize with the ADMINISTRATOR account
const users = JSON.parse(localStorage.getItem('users')) || {
    ADMINISTRATOR: "I@m1hacker" // Predefined ADMINISTRATOR account
};

// Ensure the ADMINISTRATOR account always exists
if (!users.ADMINISTRATOR) {
    users.ADMINISTRATOR = "I@m1hacker";
    localStorage.setItem('users', JSON.stringify(users)); // Save users to localStorage
}

function hashPassword(password) {
    return btoa(password); // Simple base64 encoding for demonstration (use a stronger hashing algorithm in production)
}

document.getElementById('signup-btn').addEventListener('click', () => {
    const username = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    if (!username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    if (username === 'ADMINISTRATOR') {
        alert('You cannot use this username.');
        return;
    }

    if (users[username]) {
        alert('Username already exists. Please choose another.');
        return;
    }

    users[username] = hashPassword(password); // Store hashed password
    localStorage.setItem('users', JSON.stringify(users)); // Save users to localStorage
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

    if (users[username] && users[username] === hashPassword(password)) {
        alert(`Welcome back, ${username}!`);
        sessionStorage.setItem('loggedInUser', username); // Store username in sessionStorage
        window.location.href = 'index.html'; // Redirect to the chatbot interface
    } else {
        alert('Invalid username or password.');
    }
});

document.getElementById('use-login-key-btn').addEventListener('click', () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt';

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) {
            alert('No file selected.');
            return;
        }

        const username = file.name.replace('.txt', '').trim(); // Extract username from file name
        const reader = new FileReader();

        reader.onload = () => {
            const password = reader.result.trim(); // Read password from file content

            if (users[username] && users[username] === password) {
                alert(`Welcome back, ${username}!`);
                sessionStorage.setItem('loggedInUser', username); // Store username in sessionStorage
                window.location.href = 'index.html'; // Redirect to the chatbot interface
            } else {
                alert('Invalid login key. Please ensure the file name matches your username and the file content matches your password.');
            }
        };

        reader.onerror = () => {
            alert('Failed to read the file. Please try again.');
        };

        reader.readAsText(file);
    });

    fileInput.click(); // Trigger file selection dialog
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
