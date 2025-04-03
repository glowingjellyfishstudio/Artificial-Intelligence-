// Load users from localStorage or initialize with the ADMINISTRATOR account
const users = JSON.parse(localStorage.getItem('users')) || {
    ADMINISTRATOR: "I@m1hacker", // Predefined ADMINISTRATOR account
    user1: hashPassword("user1"), // Predefined user1 account
    user2: hashPassword("user2"), // Predefined user2 account
    user3: hashPassword("user3"), // Predefined user3 account
    user4: hashPassword("user4"), // Predefined user4 account
    user5: hashPassword("user5"), // Predefined user5 account
    user6: hashPassword("user6"), // Predefined user6 account
    user7: hashPassword("user7"), // Predefined user7 account
    user8: hashPassword("user8"), // Predefined user8 account
    user9: hashPassword("user9"), // Predefined user9 account
    user10: hashPassword("user10"), // Predefined user10 account
    user11: hashPassword("user11"), // Predefined user11 account
    user12: hashPassword("user12"), // Predefined user12 account
    user13: hashPassword("user13"), // Predefined user13 account
    user14: hashPassword("user14"), // Predefined user14 account
    user15: hashPassword("user15"), // Predefined user15 account
    user16: hashPassword("user16"), // Predefined user16 account
    user17: hashPassword("user17"), // Predefined user17 account
    user18: hashPassword("user18"), // Predefined user18 account
    user19: hashPassword("user19"), // Predefined user19 account
    user20: hashPassword("user20"), // Predefined user20 account
    user21: hashPassword("user21"), // Predefined user21 account
    user22: hashPassword("user22"), // Predefined user22 account
    user23: hashPassword("user23"), // Predefined user23 account
    user24: hashPassword("user24"), // Predefined user24 account
    user25: hashPassword("user25"), // Predefined user25 account
    user26: hashPassword("user26"), // Predefined user26 account
    user27: hashPassword("user27"), // Predefined user27 account
    user28: hashPassword("user28"), // Predefined user28 account
    user29: hashPassword("user29"), // Predefined user29 account
    user30: hashPassword("user30"), // Predefined user30 account
    user31: hashPassword("user31"), // Predefined user31 account
    user32: hashPassword("user32"), // Predefined user32 account
    user33: hashPassword("user33"), // Predefined user33 account
    user34: hashPassword("user34"), // Predefined user34 account
    user35: hashPassword("user35"), // Predefined user35 account
    user36: hashPassword("user36"), // Predefined user36 account
    user37: hashPassword("user37"), // Predefined user37 account
    user38: hashPassword("user38"), // Predefined user38 account
    user39: hashPassword("user39"), // Predefined user39 account
    user40: hashPassword("user40"), // Predefined user40 account
    user41: hashPassword("user41"), // Predefined user41 account
    user42: hashPassword("user42"), // Predefined user42 account
    user43: hashPassword("user43"), // Predefined user43 account
    user44: hashPassword("user44"), // Predefined user44 account
    user45: hashPassword("user45"), // Predefined user45 account
    user46: hashPassword("user46"), // Predefined user46 account
    user47: hashPassword("user47"), // Predefined user47 account
    user48: hashPassword("user48"), // Predefined user48 account
    user49: hashPassword("user49"), // Predefined user49 account
    user50: hashPassword("user50"), // Predefined user50 account
    user51: hashPassword("user51"), // Predefined user51 account
    user52: hashPassword("user52"), // Predefined user52 account
    user53: hashPassword("user53"), // Predefined user53 account
    user54: hashPassword("user54"), // Predefined user54 account
    user55: hashPassword("user55"), // Predefined user55 account
    user56: hashPassword("user56"), // Predefined user56 account
    user57: hashPassword("user57"), // Predefined user57 account
    user58: hashPassword("user58"), // Predefined user58 account
    user59: hashPassword("user59"), // Predefined user59 account
    user60: hashPassword("user60"), // Predefined user60 account
    user61: hashPassword("user61"), // Predefined user61 account
    user62: hashPassword("user62"), // Predefined user62 account
    user63: hashPassword("user63"), // Predefined user63 account
    user64: hashPassword("user64"), // Predefined user64 account
    user65: hashPassword("user65"), // Predefined user65 account
    user66: hashPassword("user66"), // Predefined user66 account
    user67: hashPassword("user67"), // Predefined user67 account
    user68: hashPassword("user68"), // Predefined user68 account
    user69: hashPassword("user69"), // Predefined user69 account
    user70: hashPassword("user70"), // Predefined user70 account
    user71: hashPassword("user71"), // Predefined user71 account
    user72: hashPassword("user72"), // Predefined user72 account
    user73: hashPassword("user73"), // Predefined user73 account
    user74: hashPassword("user74"), // Predefined user74 account
    user75: hashPassword("user75"), // Predefined user75 account
    user76: hashPassword("user76"), // Predefined user76 account
    user77: hashPassword("user77"), // Predefined user77 account
    user78: hashPassword("user78"), // Predefined user78 account
    user79: hashPassword("user79"), // Predefined user79 account
    user80: hashPassword("user80"), // Predefined user80 account
    user81: hashPassword("user81"), // Predefined user81 account
    user82: hashPassword("user82"), // Predefined user82 account
    user83: hashPassword("user83"), // Predefined user83 account
    user84: hashPassword("user84"), // Predefined user84 account
    user85: hashPassword("user85"), // Predefined user85 account
    user86: hashPassword("user86"), // Predefined user86 account
    user87: hashPassword("user87"), // Predefined user87 account
    user88: hashPassword("user88"), // Predefined user88 account
    user89: hashPassword("user89"), // Predefined user89 account
    user90: hashPassword("user90"), // Predefined user90 account
    user91: hashPassword("user91"), // Predefined user91 account
    user92: hashPassword("user92"), // Predefined user92 account
    user93: hashPassword("user93"), // Predefined user93 account
    user94: hashPassword("user94"), // Predefined user94 account
    user95: hashPassword("user95"), // Predefined user95 account
    user96: hashPassword("user96"), // Predefined user96 account
    user97: hashPassword("user97"), // Predefined user97 account
    user98: hashPassword("user98"), // Predefined user98 account
    user99: hashPassword("user99"), // Predefined user99 account
    user100: hashPassword("user100") // Predefined user100 account
};

// Ensure the ADMINISTRATOR and predefined user accounts always exist
if (!users.ADMINISTRATOR) {
    users.ADMINISTRATOR = "I@m1hacker";
}
if (!users.user1) {
    users.user1 = hashPassword("user1");
}
if (!users.user2) {
    users.user2 = hashPassword("user2");
}
if (!users.user3) {
    users.user3 = hashPassword("user3");
}
if (!users.user4) {
    users.user4 = hashPassword("user4");
}
if (!users.user5) {
    users.user5 = hashPassword("user5");
}
if (!users.user6) {
    users.user6 = hashPassword("user6");
}
if (!users.user7) {
    users.user7 = hashPassword("user7");
}
if (!users.user8) {
    users.user8 = hashPassword("user8");
}
if (!users.user9) {
    users.user9 = hashPassword("user9");
}
if (!users.user10) {
    users.user10 = hashPassword("user10");
}
if (!users.user11) {
    users.user11 = hashPassword("user11");
}
if (!users.user12) {
    users.user12 = hashPassword("user12");
}
if (!users.user13) {
    users.user13 = hashPassword("user13");
}
if (!users.user14) {
    users.user14 = hashPassword("user14");
}
if (!users.user15) {
    users.user15 = hashPassword("user15");
}
if (!users.user16) {
    users.user16 = hashPassword("user16");
}
if (!users.user17) {
    users.user17 = hashPassword("user17");
}
if (!users.user18) {
    users.user18 = hashPassword("user18");
}
if (!users.user19) {
    users.user19 = hashPassword("user19");
}
if (!users.user20) {
    users.user20 = hashPassword("user20");
}
if (!users.user21) {
    users.user21 = hashPassword("user21");
}
if (!users.user22) {
    users.user22 = hashPassword("user22");
}
if (!users.user23) {
    users.user23 = hashPassword("user23");
}
if (!users.user24) {
    users.user24 = hashPassword("user24");
}
if (!users.user25) {
    users.user25 = hashPassword("user25");
}
if (!users.user26) {
    users.user26 = hashPassword("user26");
}
if (!users.user27) {
    users.user27 = hashPassword("user27");
}
if (!users.user28) {
    users.user28 = hashPassword("user28");
}
if (!users.user29) {
    users.user29 = hashPassword("user29");
}
if (!users.user30) {
    users.user30 = hashPassword("user30");
}
for (let i = 31; i <= 100; i++) {
    const username = `user${i}`;
    if (!users[username]) {
        users[username] = hashPassword(username);
    }
}
localStorage.setItem('users', JSON.stringify(users)); // Save users to localStorage

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
