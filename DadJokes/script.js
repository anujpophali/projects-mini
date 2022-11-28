const jokes = document.querySelector("#quotes");
const btn = document.querySelector("#btn");

const generateJokes = async () => {
  try {
    const setHeaders = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch("https://icanhazdadjoke.com", setHeaders);
    const data = await res.json();
    console.log(data);
    jokes.innerHTML = data.joke;
  } catch (err) {
    console.log(`Error is ${err}`);
  }
};

btn.addEventListener("click", generateJokes);
generateJokes();

// const jokes = document.querySelector("#quotes");
// const btn = document.querySelector("#btn");

// const generateJokes = async () => {
//   const setHeaders = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   const res = await fetch("https://icanhazdadjoke.com/", setHeaders);
//   const data = await res.json();
//   jokes.innerHTML = data.joke;
//   console.log(data);
// };
// btn.addEventListener("click", generateJokes);
// generateJokes();

// const jokes = document.querySelector("#quotes");
// const btn = document.querySelector("#btn");

// const generateJokes = async () => {
//   const response = await fetch("https://icanhazdadjoke.com/", {
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   const data = await response.json();
//   jokes.innerHTML = data.joke;
//   console.log(data);
// };

// btn.addEventListener("click", generateJokes);
// generateJokes();
