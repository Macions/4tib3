document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("formularz").addEventListener("submit", function (e) {
		e.preventDefault();
		const imiePsa = this.imiePsa.value;
		const kolorSiersci = this.kolorSiersci.value;
		const wiekPsa = this.wiekPsa.value;

		const rokUr = new Date().getFullYear() - Number(wiekPsa);
		let ukonczyl = "";
		if (wiekPsa < 5) {
			ukonczyl = "nie";
		}
		document.getElementById("pole1").innerText =
			`Piesek przyszedł na świat w ${rokUr} roku i ${ukonczyl} ukończył 5 lat`;
		document.getElementById("pole3").innerHTML = `Pupil ma na imię ${imiePsa}`;
	});

	let obrazki = document.querySelectorAll(".obrazek");
	obrazki.forEach((obrazek) => {
		let iloscrazyklikniecia = 0;
		obrazek.addEventListener("click", () => {
			let numerObrazka = obrazek.getAttribute("numer");
			iloscrazyklikniecia++;
			document.getElementById("pole2").innerHTML =
				`Kliknięto obrazek nr ${numerObrazka} ${iloscrazyklikniecia}`;
		});
		obrazek.addEventListener("mouseover", () => {
			obrazek.style.border = "2px solid red";
		});
		obrazek.addEventListener("mouseout", () => {
			obrazek.style.border = "none";
		});
		obrazek.addEventListener("mousedown", () => {
			obrazek.style.border = "10px solid green";
		});
		obrazek.addEventListener("mouseup", () => {
			obrazek.style.border = "none";
		});
	});
});
