var postsElement = document.getElementsByClassName('posts')[0];
var authorInput = document.getElementById('name');
var messageInput = document.getElementById('message');

document.getElementsByTagName('button')[0].addEventListener('click', function (event) {
  var container = document.createElement('div');
  container.insertAdjacentHTML('beforeend', `<p>${messageInput.value}</p><p>Posted By: <strong>${authorInput.value}</strong></p><hr>`);
  postsElement.appendChild(container);
});