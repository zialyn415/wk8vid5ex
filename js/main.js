var newDiv = document. createElement("div");
	newDiv.className = "container text-white bg-dark";
	newDiv.style.minHeight = "500px";

	document.body.appendChild(newDiv);

var newDiv2 = document.createElement("div");
	newDiv2.className = "jumbotron bg-info";

	newDiv.appendChild(newDiv2);


var newH1 = document.createElement("h1");
	newH1.textContent = "I was made with JS";
	newH1.className = "text-uppercase display-4";

	newDiv2.appendChild(newH1);
// two exercises 1^ and 2 (below)
// the below exercise needs to be envoked in order to work
function createStuff() {
	var newDiv = document.createElement("div");
	var newH1 = document.createElement("h1");
	var newImg = document.createElement("img");

		newDiv.appendChild(newH1);
		newDiv.appendChild(newImg);
		newH1.innerText = "This is a beagle!";
		newImg.src = "https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2017/09/beagles-names.jpg";
		newImg.alt = newH1.innerText;

		document.body.appendChild(newDiv);

} 