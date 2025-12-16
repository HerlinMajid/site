// Mengambil elemen dari HTML
const tombol = document.getElementById('tombolKlik');
const pesan = document.getElementById('pesan');

// Menambahkan fungsi ketika tombol diklik
tombol.addEventListener('click', () => {
    pesan.innerText = "Terima kasih telah mengklik tombol ini! 🎉";
    pesan.style.color = "green";
    
    // Memberikan alert sederhana
    alert("Tombol berhasil ditekan!");
});
