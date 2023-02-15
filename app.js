
let btnEntry = document.querySelector(".btn-entry");
let gameDisplay = document.querySelector(".game");
let fName = document.querySelector(".fname");
let lName = document.querySelector(".lname");
let check = document.querySelector(".check-btn");
let flame = document.querySelectorAll(".flame");


let fnameVal;
let lnameVal;
let c;
// console.log(fName)


window.addEventListener("DOMContentLoaded", function () {
	btnEntry.addEventListener("click", function () {

		document.querySelector(".play").classList.toggle('hidden');
		document.querySelector(".play").classList.toggle('flex');
		gameDisplay.classList.toggle('hidden');


	})
	check.addEventListener("click", function () {
		document.querySelector(".end").classList.toggle("flex");
		document.querySelector(".end").classList.toggle("hidden");
		gameDisplay.classList.toggle('hidden');


		fnameVal = fName.value.split('');
		lnameVal = lName.value.split('');

		let difValues = fnameVal.filter(element => !lnameVal.includes(element)).concat(lnameVal.filter(element => !fnameVal.includes(element)));
		let count = difValues.filter((item) => item != ' ').length;


		let list = ['f', 'l', 'a', 'm', 'e', 's'];

		while (list.length > 1) {
			c = (count % list.length);
			let sIndex = c - 1;

			if (sIndex >= 0) {
				let left = list.slice(0, sIndex);

				let right = list.slice(sIndex + 1,);

				list = right.concat(left);


			} else {
				list = list.slice(0, list.length - 1);

			}

			if (list == 'f') {
				document.querySelector(".f").classList.toggle("flex");
				document.querySelector(".f").classList.toggle("hidden");

			} else if (list == "l") {
				document.querySelector(".l").classList.toggle("flex");
				document.querySelector(".l").classList.toggle("hidden");
			} else if (list == "a") {
				document.querySelector(".a").classList.toggle("flex");
				document.querySelector(".a").classList.toggle("hidden");
			} else if (list == 'm') {
				document.querySelector(".m").classList.toggle("flex");
				document.querySelector(".m").classList.toggle("hidden");
			}
			else if (list == "e") {
				document.querySelector(".e").classList.toggle("flex");
				document.querySelector(".e").classList.toggle("hidden");
			}
			else if (list == "s") {
				document.querySelector(".s").classList.toggle("flex");
				document.querySelector(".s").classList.toggle("hidden");
			}

		}

	})
})


