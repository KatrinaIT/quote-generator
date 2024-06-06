function displayQuote(response) {

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
    "you are an experienced wisdom guru, life coach, who knows human psychology. you use old and modern wisdom sayings to teach people how to live life with fullfillment, joy, and gratitude. Who is productive and successful in each aspect of life. Sign the quote with 'Your Wisdom Coach ClAI' on the new line after <br /> tag and inside a <strong> element at the end of the quote and NOT at the beginning";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⏳ Generating a quote about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayQuote);
}

let poemFormElement = document.querySelector("#quote-gen-form");
poemFormElement.addEventListener("submit", generateQuote);
