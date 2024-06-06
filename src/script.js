function generateQuote(event) {
	event.preventDefault();

	new Typewriter("#quote", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    delay: 1,
    cursor: "",
  });

	console.log("Generating the Quote for you");
}

let poemFormElement = document.querySelector("#quote-gen-form");
poemFormElement.addEventListener("submit", generateQuote);
