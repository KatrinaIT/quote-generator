function displayQuote(response) {
  console.log("Quote was generated");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "1ad00cd57fae02a14f050bfc3o387tf2";
  let prompt = `please generate the wisdom quote for the provided topic of ${instructionsInput.value}`;
  let context =
    "you are an experienced wisdom guru, life coach, who knows human psychology. you use old and modern wisdom sayings to teach people how to live life with fullfillment, joy, and gratitude. Who is productive and successful in each aspect of life. Add at the end <br /> and on the new line 'Your Wisdom Coach ClAI' inside the <strong> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQuote);

  console.log("Generating the Quote for you");
}

let poemFormElement = document.querySelector("#quote-gen-form");
poemFormElement.addEventListener("submit", generateQuote);
