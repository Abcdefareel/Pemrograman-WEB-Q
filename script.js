// Menampilkan pesan selamat datang di konsol
console.log("Selamat datang di CV Farrel Rizna Afrizal!");

// Menambahkan efek klik pada nama di header
document.addEventListener("DOMContentLoaded", function () {
  const headerName = document.querySelector(".header h1");
  headerName.style.cursor = "pointer";

  headerName.addEventListener("click", function () {
    alert("Anda mengklik nama: Farrel Rizna Afrizal");
  });
});
