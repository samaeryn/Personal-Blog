// Create form
const form = document.createElement('form');
form.id = 'blogForm';

// Create input
const usernameInput = document.createElement('username');
usernameInput.type = 'username';
usernameInput.username = 'username';
usernameInput.placeholder = 'Username';

const titleInput = document.createElement('title');
titleInput.type = 'title';
titleInput.title = 'title';
titleInput.placeholder = 'Title';

const content = document.createElement('content');
contentInput.type = 'content';
contentInput.content = 'content';
content.placeholder = 'Content';

// Create submit button
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Submit';

// Append elements
form.appendChild(usernameInput);
form.appendChild(titleInput);
form.appendChild(submitButton);
