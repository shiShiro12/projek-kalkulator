const angkaA = document.getElementById("angka-a");
const angkaB = document.getElementById("angka-b");
const tombolTambah = document.getElementById("tombol-tambah");
const tombolKurang = document.getElementById("tombol-kurang");
const tombolKali = document.getElementById("tombol-kali");
const tombolBagi = document.getElementById("tombol-bagi");
const tombolHapus = document.getElementById("tombol-hapus");
const hasil = document.getElementById("hasil");
const statistik = document.getElementById("statistik");
const sifatHasil = document.getElementById("sifat-hasil");
const panduan = document.getElementById("panduan");
const tombolPanduan = document.getElementById("tombol-panduan");
const infoPembuat = document.getElementById("info-pembuat");

let jumlahPerhitungan = 0;
let panduanTampil = false;

function hitung(operasi) {
  if (angkaA.value === "" || angkaB.value === "") {
    hasil.textContent = "Masukkan kedua angka terlebih dahulu.";
    sifatHasil.textContent = "Sifat hasil: -";
    return;
  }

  const a = Number(angkaA.value);
  const b = Number(angkaB.value);
  let hasilHitung;

  if (operasi === "tambah") {
    hasilHitung = a + b;
  } else if (operasi === "kurang") {
    hasilHitung = a - b;
  } else if (operasi === "kali") {
    hasilHitung = a * b;
  } else if (operasi === "bagi") {
    if (b === 0) {
      hasil.textContent = "Tidak bisa dibagi dengan nol.";
      sifatHasil.textContent = "Sifat hasil: -";
      return;
    }
    hasilHitung = a / b;
  }

  hasil.textContent = "Hasil: " + hasilHitung;

  jumlahPerhitungan++;
  statistik.textContent = "Jumlah perhitungan: " + jumlahPerhitungan;

  if (hasilHitung > 0) {
    sifatHasil.textContent = "Sifat hasil: Positif";
  } else if (hasilHitung < 0) {
    sifatHasil.textContent = "Sifat hasil: Negatif";
  } else {
    sifatHasil.textContent = "Sifat hasil: Nol";
  }
}

tombolTambah.addEventListener("click", function () {
  hitung("tambah");
});

tombolKurang.addEventListener("click", function () {
  hitung("kurang");
});

tombolKali.addEventListener("click", function () {
  hitung("kali");
});

tombolBagi.addEventListener("click", function () {
  hitung("bagi");
});

tombolHapus.addEventListener("click", function () {
  angkaA.value = "";
  angkaB.value = "";
  hasil.textContent = "Hasil: 0";
  sifatHasil.textContent = "Sifat hasil: -";
});

tombolPanduan.addEventListener("click", function () {
  if (panduanTampil === false) {
    panduan.style.display = "block";
    tombolPanduan.textContent = "Sembunyikan Panduan";
    panduanTampil = true;
  } else {
    panduan.style.display = "none";
    tombolPanduan.textContent = "Tampilkan Panduan";
    panduanTampil = false;
  }
});

infoPembuat.textContent =
  "2026 Praktikum Pemrograman Web Dasar | Dibuat oleh Raditya P (NIM: 250202120) - D3 Teknik Informatika";
