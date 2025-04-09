let examBasic = document.getElementById('exam');
let info = document.getElementById("info");

window.addEventListener("DOMContentLoaded", infoLink)

function infoLink() {
  info.setAttribute("href", `arak.html#${examBasic.value}`);
}


examBasic.addEventListener("change", () => {
  info.setAttribute("href", `arak.html#${examBasic.value}`);
})





function showSelected() {
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let taj = document.getElementById('taj').value.trim();
  let date = document.getElementById('date').value;
  let hour = document.getElementById('hour').value;
  let minute = document.getElementById('minute').value;
  let exam = document.getElementById('exam').value;
  let btnAnim = document.getElementById('forAnim');

  btnAnim.classList.remove("btn-animation");


  if (!name || !email || !taj || !date) {
    document.getElementById('result').textContent = "Kérlek, töltsd ki az összes mezőt!";
    return;
  } else {
    let selectedDateTime = `${date} ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    btnAnim.classList.add(".btn-animation");

    document.getElementById('result').innerHTML = `
      <p><strong>Név:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>TAJ-szám:</strong> ${taj}</p>
      <p><strong>Időpont:</strong> ${selectedDateTime}</p>
      <p><strong>Vizsgálat:</strong> ${exam}</p>
      <hr>
      <button onclick="backMainPage()" class="btn btn-primary">Vissza a főoldalra</button>
      <br>
      <p id="countdown"></p>
    `;

  }
}

function backMainPage(delayMs = 5000) {
  let countdownElem = document.getElementById("countdown");
  let remainingSec = Math.floor(delayMs / 1000);

  let interval = setInterval(() => {
    remainingSec--;
    countdownElem.textContent = `${remainingSec} ms múlva visszairányítás a főoldalra...`;

    if (remainingSec <= 0) {
      clearInterval(interval);
      window.location.href = "../index.html";
    }
  }, 1000);
}
