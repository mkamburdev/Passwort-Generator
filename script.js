const karakterler = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

function olustur(e) {
    e.preventDefault();

    let sifreUzunlugu = parseInt(document.getElementById("sifreUzunlugu").value);

<<<<<<< HEAD
    if (sifreUzunlugu > 20) {
        document.getElementById("uyari").style.display = "inline";
        return;
    }

    let sifre = "";
    for (let i = 0; i < sifreUzunlugu; i++) {
        const rastgeleIndex = Math.floor(Math.random() * karakterler.length);
        sifre += karakterler[rastgeleIndex];
    }

    document.getElementById("sifre").textContent = sifre;
    hesaplaGuc(sifre);

    history.pushState({}, "", "/index.html");
=======
  history.pushState({}, "", "index.html");
>>>>>>> 79b80ac31e21630a162cd51e23874adc4bdd1abb
}

function kopyala() {
  const sifre = document.getElementById("sifre").textContent;

  navigator.clipboard.writeText(sifre)
      .then(() => {
          alert("Passwort kopiert!");
      })
      .catch(err => {
          console.error('Kopieren fehlgeschlagen! ', err);
      });
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

    const gucGostergesi = document.getElementById("guc-gostergesi");
    if (guc <= 7) {
        gucGostergesi.textContent = "Niedrig!";
        gucGostergesi.style.color = "red";
    } else if (guc <= 9) {
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