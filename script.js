let lastMessage = '';
let spamCount = 0;

const rudeWords = ['bad']; // Simplified list of rude words

document.getElementById('send-btn').addEventListener('click', sendMessage);

// Add event listener for the Enter key
document.getElementById('user-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') return;

    // Filter rude words
    if (rudeWords.some((word) => userInput.toLowerCase().includes(word))) {
        displayMessage('AI', "Please avoid using inappropriate language.");
        document.getElementById('user-input').value = ''; // Clear input
        return;
    }

    // Spam filter logic
    if (userInput === lastMessage) {
        spamCount++;
        if (spamCount >= 3) {
            displayMessage('AI', "Please avoid sending the same message repeatedly.");
            document.getElementById('user-input').value = ''; // Clear input
            return;
        }
    } else {
        spamCount = 0; // Reset spam count for new messages
    }

    lastMessage = userInput;

    const response = generateAIResponse(userInput);
    displayMessage('You', userInput);
    displayAITypingEffect(response); // Use the typing effect for AI response

    if (response === "I'm not sure I understand, but I'm here to help!") {
        const isModelTrainingEnabled = document.getElementById('model-training-text').checked;
        if (isModelTrainingEnabled) {
            const newResponse = prompt(`I didn't understand "${userInput}". What should I say next time?`);
            if (newResponse && newResponse.trim() !== '') {
                addToLearning(userInput, newResponse);
                alert('Thank you! I’ve learned something new.');
            }
        }
    }

    document.getElementById('user-input').value = ''; // Clear input
}

document.getElementById('menu-btn').addEventListener('click', () => {
    const menuList = document.getElementById('menu-list');
    menuList.style.display = menuList.style.display === 'none' ? 'block' : 'none';
});

// Ensure the feedback button is functional
document.querySelector('#menu-list').addEventListener('click', (event) => {
    if (event.target.id === 'feedback-btn') {
        const feedbackText = prompt('Please provide your feedback:');
        if (feedbackText && feedbackText.trim() !== '') {
            alert('Thank you for your feedback!');
            console.log('User Feedback:', feedbackText);
        } else {
            alert('Feedback cannot be empty.');
        }
    }
});

// Handle action buttons
document.querySelectorAll('.action-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const userMessage = button.textContent;
        const aiResponse = generateAIResponse(userMessage);

        displayMessage('You', userMessage); // Display the button text as the user's message
        displayMessage('AI', aiResponse);  // AI responds to the button text
    });
});

// Read the logged-in user's name from sessionStorage
function updateUserName() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('user-name').textContent = loggedInUser; // Replace "there" with the logged-in user's name
    } else {
        document.getElementById('user-name').textContent = 'there'; // Default to "there" if no user is logged in
    }
}

// Call the function to update the name on page load
updateUserName();

const learningData = {}; // Store learned responses

// Import predefined responses
// Ensure this script is included after responses.js in the HTML file
function generateAIResponse(input) {
    const lowerInput = input.toLowerCase();

    if (learningData[lowerInput]) {
        return learningData[lowerInput];
    } else if (predefinedResponses[lowerInput]) {
        return predefinedResponses[lowerInput];
    } else {
        return "I'm not sure I understand, but I'm here to help!";
    }
}

function addToLearning(input, response) {
    const lowerInput = input.toLowerCase();
    learningData[lowerInput] = response;
}

function displayMessage(sender, message) {
    const chatBox = document.querySelector('.chat-box');
    const messageElement = document.createElement('p');
    messageElement.textContent = `${sender}: ${message}`;
    messageElement.classList.add('fade-in'); // Add fade-in class
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Add AI typing effect
function displayAITypingEffect(response) {
    const chatBox = document.querySelector('.chat-box');
    const typingElement = document.createElement('p');
    typingElement.textContent = 'AI is typing...';
    typingElement.classList.add('fade-in');
    chatBox.appendChild(typingElement);
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        chatBox.removeChild(typingElement); // Remove "AI is typing..." message
        displayMessage('AI', response); // Display the actual AI response
    }, 1500); // Simulate a 1.5-second delay
}

// Handle toggling of menu options
document.getElementById('model-training-text').addEventListener('change', (event) => {
    const isChecked = event.target.checked;
    console.log(`Model training on text: ${isChecked}`);
    alert(`Model training on text is now ${isChecked ? 'enabled' : 'disabled'}.`);
});

document.getElementById('model-training-voice').addEventListener('change', (event) => {
    const isChecked = event.target.checked;
    console.log(`Model training on voice: ${isChecked}`);
    alert(`Model training on voice is now ${isChecked ? 'enabled' : 'disabled'}.`);
});

document.getElementById('personalisation').addEventListener('change', (event) => {
    const isChecked = event.target.checked;
    console.log(`Personalisation: ${isChecked}`);
    alert(`Personalisation is now ${isChecked ? 'enabled' : 'disabled'}.`);
});

document.getElementById('language-select').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    translatePage(selectedLanguage);
});

document.getElementById('theme-select').addEventListener('change', (event) => {
    const selectedTheme = event.target.value;
    applyTheme(selectedTheme);
});

function applyTheme(theme) {
    const body = document.body;
    const mainContainer = document.querySelector('.main-container');
    const inputBar = document.querySelector('.input-bar');
    const chatBox = document.querySelector('.chat-box');
    const actionButtons = document.querySelectorAll('.action-btn');

    // Remove existing theme classes
    body.classList.remove('day-theme', 'night-theme');
    mainContainer.classList.remove('day-theme', 'night-theme');
    inputBar.classList.remove('day-theme', 'night-theme');
    chatBox.classList.remove('day-theme', 'night-theme');
    actionButtons.forEach((btn) => btn.classList.remove('day-theme', 'night-theme'));

    // Apply the selected theme
    if (theme === 'night') {
        body.classList.add('night-theme');
        mainContainer.classList.add('night-theme');
        inputBar.classList.add('night-theme');
        chatBox.classList.add('night-theme');
        actionButtons.forEach((btn) => btn.classList.add('night-theme'));
    } else {
        body.classList.add('day-theme');
        mainContainer.classList.add('day-theme');
        inputBar.classList.add('day-theme');
        chatBox.classList.add('day-theme');
        actionButtons.forEach((btn) => btn.classList.add('day-theme'));
    }
}

// Set the default theme to Day on page load
applyTheme('day');

const translations = {
    en: {
        greeting: "Hi there! Artificial Intelligence here.",
        prompt: "What’s on your mind today?",
        feedback: "Give Feedback",
        login: "Login",
        terms: "Terms and Conditions",
        privacy: "Privacy Policy",
    },
    ar: {
        greeting: "مرحبًا! أنا Artificial Intelligence.",
        prompt: "ما الذي يدور في ذهنك اليوم؟",
        feedback: "إعطاء ملاحظات",
        login: "تسجيل الدخول",
        terms: "الشروط والأحكام",
        privacy: "سياسة الخصوصية",
    },
    eu: {
        greeting: "Kaixo! Artificial Intelligence hemen.",
        prompt: "Zer duzu buruan gaur?",
        feedback: "Eman iritzia",
        login: "Saioa hasi",
        terms: "Baldintzak eta baldintzak",
        privacy: "Pribatutasun politika",
    },
    bn: {
        greeting: "হ্যালো! আমি Artificial Intelligence।",
        prompt: "আজ আপনার মনে কী আছে?",
        feedback: "প্রতিক্রিয়া দিন",
        login: "লগইন করুন",
        terms: "শর্তাবলী",
        privacy: "গোপনীয়তা নীতি",
    },
    bg: {
        greeting: "Здравейте! Аз съм Artificial Intelligence.",
        prompt: "Какво ви е на ум днес?",
        feedback: "Дайте обратна връзка",
        login: "Вход",
        terms: "Общи условия",
        privacy: "Политика за поверителност",
    },
    ca: {
        greeting: "Hola! Aquí Artificial Intelligence.",
        prompt: "Què tens al cap avui?",
        feedback: "Donar feedback",
        login: "Inicia sessió",
        terms: "Termes i condicions",
        privacy: "Política de privacitat",
    },
    zh: {
        greeting: "你好！我是 Artificial Intelligence。",
        prompt: "今天你在想什么？",
        feedback: "提供反馈",
        login: "登录",
        terms: "条款和条件",
        privacy: "隐私政策",
    },
    hr: {
        greeting: "Pozdrav! Ovdje je Artificial Intelligence.",
        prompt: "Što vam je danas na umu?",
        feedback: "Dajte povratne informacije",
        login: "Prijava",
        terms: "Uvjeti korištenja",
        privacy: "Pravila o privatnosti",
    },
    cs: {
        greeting: "Ahoj! Tady je Artificial Intelligence.",
        prompt: "Co máte dnes na mysli?",
        feedback: "Dejte zpětnou vazbu",
        login: "Přihlásit se",
        terms: "Podmínky použití",
        privacy: "Zásady ochrany osobních údajů",
    },
    da: {
        greeting: "Hej! Her er Artificial Intelligence.",
        prompt: "Hvad har du på hjertet i dag?",
        feedback: "Giv feedback",
        login: "Log ind",
        terms: "Vilkår og betingelser",
        privacy: "Privatlivspolitik",
    },
    nl: {
        greeting: "Hallo! Hier is Artificial Intelligence.",
        prompt: "Wat houdt je vandaag bezig?",
        feedback: "Geef Feedback",
        login: "Inloggen",
        terms: "Algemene Voorwaarden",
        privacy: "Privacybeleid",
    },
    et: {
        greeting: "Tere! Siin on Artificial Intelligence.",
        prompt: "Mis sul täna mõttes on?",
        feedback: "Anna tagasisidet",
        login: "Logi sisse",
        terms: "Tingimused",
        privacy: "Privaatsuspoliitika",
    },
    fi: {
        greeting: "Hei! Tässä on Artificial Intelligence.",
        prompt: "Mitä sinulla on mielessä tänään?",
        feedback: "Anna palautetta",
        login: "Kirjaudu sisään",
        terms: "Käyttöehdot",
        privacy: "Tietosuojakäytäntö",
    },
    fr: {
        greeting: "Salut ! Artificial Intelligence ici.",
        prompt: "Qu'avez-vous en tête aujourd'hui ?",
        feedback: "Donner un Avis",
        login: "Connexion",
        terms: "Termes et Conditions",
        privacy: "Politique de Confidentialité",
    },
    de: {
        greeting: "Hallo! Artificial Intelligence hier.",
        prompt: "Was hast du heute im Kopf?",
        feedback: "Feedback geben",
        login: "Anmelden",
        terms: "Allgemeine Geschäftsbedingungen",
        privacy: "Datenschutz-Bestimmungen",
    },
    hi: {
        greeting: "नमस्ते! मैं Artificial Intelligence हूँ।",
        prompt: "आज आपके दिमाग में क्या है?",
        feedback: "प्रतिक्रिया दें",
        login: "लॉगिन करें",
        terms: "नियम और शर्तें",
        privacy: "गोपनीयता नीति",
    },
    // Add remaining languages here...
};

function translatePage(language) {
    const defaultLanguage = 'en';
    const translation = translations[language] || translations[defaultLanguage];

    const elementsToTranslate = [
        { selector: '.main-header h1', key: 'greeting' },
        { selector: '.main-header p', key: 'prompt' },
        { selector: '#feedback-btn', key: 'feedback' },
        { selector: '#login-link', key: 'login' },
        { selector: 'a[href="terms.html"]', key: 'terms' },
        { selector: 'a[href="privacy.html"]', key: 'privacy' },
    ];

    elementsToTranslate.forEach(({ selector, key }) => {
        const element = document.querySelector(selector);
        if (element && translation[key]) {
            element.textContent = translation[key];
        }
    });
}

// Dynamically load translations for additional languages
function addTranslation(language, translationData) {
    translations[language] = translationData;
}

// Example: Adding a new language dynamically
addTranslation('es', {
    greeting: "¡Hola! Aquí Artificial Intelligence.",
    prompt: "¿Qué tienes en mente hoy?",
    feedback: "Dar Retroalimentación",
    login: "Iniciar Sesión",
    terms: "Términos y Condiciones",
    privacy: "Política de Privacidad",
});

function updateAuthMenu() {
    const loginLink = document.getElementById('login-link');
    const loggedInUser = sessionStorage.getItem('loggedInUser');

    if (loggedInUser) {
        loginLink.textContent = 'Sign Out';
        loginLink.href = '#';
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.removeItem('loggedInUser');
            alert('You have been signed out.');
            window.location.reload(); // Reload the page to reset the state
        });
    } else {
        loginLink.textContent = 'Login';
        loginLink.href = 'login.html'; // Redirect to the login page
    }
}

// Call the function to update the menu on page load
updateAuthMenu();
