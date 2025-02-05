const kartlar = document.getElementById("kartlar");
const kartSayisi = 15; // Örnek olarak 15 kart

function kartOlustur(index) {
    const kart = document.createElement("div");
    kart.classList.add("flip-card");

    const kartIcerik = `
        <div class="flip-card-inner">
          <a href="'<data:post.url/>'">  <div class="flip-card-front">
                Ön Yüz ${index + 1}
            </div>
            <div class="flip-card-back"><div id="overlay">
                Arka Yüz ${index + 1}
                  </div>
            </div>
        </div>
    `;
    kart.innerHTML = kartIcerik;
    return kart;
}

function reklamKartiOlustur() {
    const reklamKarti = document.createElement("div");
    reklamKarti.classList.add("ad-card");
    reklamKarti.innerHTML = '<img alt="Reklam" src="https://via.placeholder.com/300x150"/>'; // Placeholder reklam
    return reklamKarti;
}

for (let i = 0; i < kartSayisi; i++) {
    if (i % 6 === 5) { // Her 6 kartta bir reklam
        kartlar.appendChild(reklamKartiOlustur());
    }
    kartlar.appendChild(kartOlustur(i));
}
