document.getElementById("open-modal").addEventListener('click',function(){
	document.getElementById("modal").classList.add('open')
})

window.addEventListener('keydown', (e) => {
	if (e.key == 'Escape'){
		document.getElementById('modal').classList.remove('open')
	}
});

document.querySelector("#modal .modal_window").addEventListener('click', event => {
	event._isClickWithInModal = true;
});
document.getElementById('modal').addEventListener('click', event => {
	if (event._isClickWithInModal) return;
	event.currentTarget.classList.remove('open');
});