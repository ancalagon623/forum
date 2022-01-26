var postsElement = document.getElementsByClassName('posts')[0];
var authorInput = document.getElementById('name');
var messageInput = document.getElementById('message');

document.getElementsByTagName('button')[0].addEventListener('click', function (event) {
  var container = document.createElement('div');
  container.innerHTML = messageInput.value
  container.insertAdjacentHTML('beforeend', `<p>Posted By: <strong>${authorInput.value}</strong>`);
  postsElement.appendChild(container);
});