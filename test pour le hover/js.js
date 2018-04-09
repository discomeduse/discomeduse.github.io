var icontwitter = document.querySelector('.icontwitter');
var attwitter = document.querySelector('.attwitter');

attwitter.addEventListener('mouseover', function () {
	this.classList.add('hovered');
  icon.classList.add('hovered');
});

attwitter.addEventListener('mouseout', function () {
	this.classList.remove('hovered');
  icon.classList.remove('hovered');
});
