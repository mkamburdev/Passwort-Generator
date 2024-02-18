const karakterler =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

function olustur(e) {
  e.preventDefault();

  const sifreUzunlugu = parseInt(
    document.getElementById("sifreUzunlugu").value
  );
  let sifre = "";
  for (let i = 0; i < sifreUzunlugu; i++) {
    const rastgeleIndex = Math.floor(Math.random() * karakterler.length);
    sifre += karakterler[rastgeleIndex];
  }
  document.getElementById("sifre").textContent = sifre;
  hesaplaGuc(sifre);

  history.pushState({}, "", "./index.html");
}

function kopyala() {
  const sifre = document.getElementById("sifre").textContent;
  navigator.clipboard.writeText(sifre);
  alert("Passwort kopiert!");
}

function hesaplaGuc(sifre) {
  let guc = 0;
  const kucukHarfler = "abcdefghijklmnopqrstuvwxyz";
  const buyukHarfler = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const rakamlar = "0123456789";
  const ozelKarakterler = "!@#$%^&*()";

  for (let i = 0; i < sifre.length; i++) {
    if (kucukHarfler.includes(sifre[i])) {
      guc++;
    } else if (buyukHarfler.includes(sifre[i])) {
      guc++;
    } else if (rakamlar.includes(sifre[i])) {
      guc++;
    } else if (ozelKarakterler.includes(sifre[i])) {
      guc++;
    }
  }

  if (sifre.length >= 12) {
    guc++;
  }

  const gucGostergesi = document.getElementById("guc-gostergesi");
  if (guc <= 3) {
    gucGostergesi.textContent = "Niedrig!";
    gucGostergesi.style.color = "red";
  } else if (guc <= 6) {
    gucGostergesi.textContent = "Mittelmäßig!";
    gucGostergesi.style.color = "orange";
  } else {
    gucGostergesi.textContent = "Stark!";
    gucGostergesi.style.color = "green";
  }
}

window.onload = function () {
  var elements = document.body.getElementsByTagName("*");

  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("animate");
  }
};
