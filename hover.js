//Twitter
var icon = document.querySelector('.icon');
var nomDuSite = document.querySelector('.nomdusite');

nomDuSite.addEventListener('mouseover', function () {
	this.classList.add('hovered');
  icon.classList.add('hovered');
});

nomDuSite.addEventListener('mouseout', function () {
	this.classList.remove('hovered');
  icon.classList.remove('hovered');
});
