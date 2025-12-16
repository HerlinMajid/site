const tombol = document.getElementById("tombolKlik");
const pesan = document.getElementById("pesan");

tombol.addEventListener("click", () => {
    pesan.innerText = "Tombol berhasil diklik!";
});
