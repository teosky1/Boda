/* COUNTDOWN */
const eventDate = new Date("June 15, 2026 16:00:00").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  timer.innerHTML = `${days} días · ${hours} hrs · ${minutes} min`;
}, 1000);

/* RSVP */
const form = document.getElementById("rsvpForm");
const success = document.getElementById("success");

form.addEventListener("submit", e => {
  e.preventDefault();

  fetch("https://docs.google.com/forms/d/e/TU_FORM_ID/formResponse", {
    method: "POST",
    mode: "no-cors",
    body: new FormData(form)
  });

  form.reset();
  success.classList.remove("hidden");
});