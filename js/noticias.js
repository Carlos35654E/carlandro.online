document.addEventListener('DOMContentLoaded', function() {
	var btn = document.getElementById('ir-arriba');
	if (btn) {
		btn.addEventListener('click', function() {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}
});


function goToMatricula() {
    window.location.href = '../matricula/';
}