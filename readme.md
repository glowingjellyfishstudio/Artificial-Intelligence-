# AI Chatbot

Welcome to the AI Chatbot project! This application is designed to provide a personal assistant experience for learning, planning, and more.

## Features

- **Chat Interface**: Interact with the chatbot for advice, brainstorming, and assistance.
- **Login and Signup**: Securely create an account or log in to access personalized features.
- **Login Key Support**: Use a secure login key file for authentication.
- **Language Support**: Translate the interface into multiple languages.
- **Theme Customization**: Switch between day and night themes.
- **Feedback System**: Provide feedback to improve the chatbot.
- **Privacy and Terms**: Clear policies to ensure user trust.

## File Structure

- **`index.html`**: The main chatbot interface.
- **`home.html`**: The home page for navigation.
- **`login.html`**: The login and signup page.
- **`terms.html`**: Terms and conditions of the application.
- **`privacy.html`**: Privacy policy details.
- **`styles.css`**: Stylesheet for the application.
- **`script.js`**: Main JavaScript file for chatbot functionality.
- **`login.js`**: Handles login and signup logic.
- **`responses.js`**: Contains predefined chatbot responses.

## How to Use

1. **Home Page**: Start at `home.html` to navigate to different sections of the application.
2. **Login or Signup**: Create an account or log in via `login.html`. You can also use a login key file for authentication.
3. **Chat**: Use `index.html` to interact with the chatbot.
4. **Customize**: Change the theme or language using the menu options.
5. **Feedback**: Provide feedback through the menu.

## Requirements

- A modern web browser (e.g., Chrome, Firefox, Edge).
- No server setup required; the application runs entirely in the browser.

## Development

### Adding Translations
To add a new language, update the `translations` object in `script.js`:
```javascript
addTranslation('languageCode', {
    greeting: "Your greeting here",
    prompt: "Your prompt here",
    feedback: "Your feedback text here",
    login: "Your login text here",
    terms: "Your terms text here",
    privacy: "Your privacy text here",
});
```

### Adding Predefined Responses
To add new chatbot responses, update the `predefinedResponses` object in `responses.js`:
```javascript
predefinedResponses["your keyword"] = "Your response here";
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For questions or feedback, contact us at [digitaldarkness2024@outlook.com](mailto:digitaldarkness2024@outlook.com).