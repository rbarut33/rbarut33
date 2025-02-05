const kartlar = document.getElementById("kartlar");
const kartSayisi = 15; // Örnek olarak 15 kart

// Kart oluşturma fonksiyonu
function kartOlustur(index) {
    const kart = document.createElement("div");
    kart.classList.add("flip-card");

    const kartIcerik = `
        <div class="flip-card-inner">
          <a href="data:post.url">  
            <div class="flip-card-front">
              <h1>Başlık ${index + 1}</h1> <!-- Bu kısmı JavaScript'te dinamik olarak değiştirebilirsiniz -->
              Ön Yüz ${index + 1}
            </div>
            <div class="flip-card-back">
              <div id="overlay">
                <p>Arka Yüz ${index + 1}</p>
                <p>Yayın Tarihi: <span>2025-02-05</span></p> <!-- Tarih kısmını da dinamik hale getirebilirsiniz -->
                <p>Açıklama: Özel bir açıklama buraya gelecek.</p> <!-- Buraya açıklama eklemek için dinamik alanlar kullanabilirsiniz -->
              </div>
            </div>
          </a>
        </div>
    `;
    kart.innerHTML = kartIcerik;
    return kart;
}

// Reklam kartı oluşturma fonksiyonu
function reklamKartiOlustur() {
    const reklamKarti = document.createElement("div");
    reklamKarti.classList.add("ad-card");
    reklamKarti.innerHTML = '<img alt="Reklam" src="https://www.medya724.com/images/haberler/medya7-24-haber-sitemize-reklam-vermek-ister-misiniz.jpg"/>'; // Placeholder reklam
    return reklamKarti;
}

// Kartları ve reklamları oluşturma
for (let i = 0; i < kartSayisi; i++) {
    if (i % 6 === 5) { // Her 6 kartta bir reklam
        kartlar.appendChild(reklamKartiOlustur());
    }
    kartlar.appendChild(kartOlustur(i));
}
