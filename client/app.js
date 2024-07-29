const form = document.getElementById("forms");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
});
//get the values the user types from the form

const formData = new FormData(form);
const formValues = Object.fromEntries(formData);
//console.log(formValues)
//make an api call when we submit the form

async function getMessages() {
  const response = await fetch("http://localhost:8081/guestlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  const data = await response.json();
  console.log(data);
}

// getGuestlistMessages();
// async function getGuestlistMessages() {
//   // talk to the server and ask for array of names and messages
//   const response = await fetch("http://localhost:8081/guestlist", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formValues),
//   });
// }
// const data = await response.json();
// console.log(data); // on inspect on localhost 5173 there should be array

// get text on to page

const guestlistMessages = document.getElementById("guestlist-messages");

for (let i = 0; i < data.length; i++) {
  const text = document.createElement("p");
  p.src = data[i];
  guestlistMessages.appendChild(p);
}

getMessages();
