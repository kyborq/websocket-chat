window.onload = function () {
  // ...
  var textField = document.getElementById('text-field');
  var sendButton = document.getElementById('send-button');

  var user = 'Константин';
  var text = '';

  textField.onkeyup = function () {
    text = textField.value;
    // console.log(text);
  };

  sendButton.onclick = function () {
    var chatContainer = document.getElementById('chat');

    var messageContainer = document.createElement('div');
    messageContainer.classList.add('message', 'my');
    var messageAuthor = document.createElement('div');
    messageAuthor.classList.add('message-author');
    messageAuthor.innerText = user;
    var messageText = document.createElement('div');
    messageText.classList.add('message-content');
    messageText.innerText = text;

    messageContainer.appendChild(messageAuthor);
    messageContainer.appendChild(messageText);
    chatContainer.appendChild(messageContainer);

    textField.value = '';
  };
};
