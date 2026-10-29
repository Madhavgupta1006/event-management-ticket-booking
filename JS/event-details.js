function toggleAgenda() {
  let list = document.getElementById("agendaList");
  let btn = document.getElementById("toggleAgendaBtn");

  if (list.style.display === "none") {
    list.style.display = "block";
    btn.innerText = "Hide Agenda";
  } else {
    list.style.display = "none";
    btn.innerText = "Show Agenda";
  }
}

function bookAlert() {
  alert(
    "Redirecting to the ticket booking page for Annual Tech Conference 2026!",
  );
}
