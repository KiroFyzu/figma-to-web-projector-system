# 📽️ [ FIGMA TO DESIGN ] Sistem Peminjaman Proyektor

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

> Platform web untuk memudahkan mahasiswa dalam mengajukan peminjaman, booking, dan pengembalian proyektor secara online.

## 📋 Daftar Isi

- [Tentang Projek](#-tentang-projek)
- [Fitur](#-fitur)
- [Teknologi](#-teknologi)
- [Struktur Projek](#-struktur-projek)
- [Instalasi](#-instalasi)
- [Penggunaan](#-penggunaan)
- [Halaman](#-halaman)
- [Screenshot](#-screenshot)
- [Kontribusi](#-kontribusi)
- [Lisensi](#-lisensi)
- [Kontak](#-kontak)

## 🎯 Tentang Projek

Sistem Peminjaman Proyektor adalah aplikasi web yang dirancang untuk memudahkan manajemen peminjaman proyektor di lingkungan kampus. Sistem ini menyediakan interface yang user-friendly dengan desain modern menggunakan glass morphism effect dan backdrop blur untuk pengalaman pengguna yang optimal.

### Tujuan Projek

- Mempermudah proses peminjaman proyektor untuk mahasiswa
- Mengelola data peminjaman secara terstruktur
- Menyediakan dashboard monitoring untuk admin
- Mengurangi proses manual dalam peminjaman proyektor

## ✨ Fitur

### 🔐 Autentikasi
- **Login**: Sistem login untuk user
- **Registrasi**: Pendaftaran akun baru dengan 6 field (username, NIM, password, role, nama lengkap, email, telepon)

### 📊 Dashboard
- **Landing Page**: Halaman utama dengan informasi sistem
- **Dashboard Peminjaman**: Panel admin dengan statistik lengkap
  - Total peminjaman
  - Status peminjaman aktif
  - Proyektor yang dikembalikan
  - Statistik hari ini, minggu ini, bulan ini
  - Proyektor terpopuler
  - Activity feed real-time
  - Status proyektor tersedia

### 📝 Manajemen Peminjaman
- **Form Peminjaman**: Pengajuan peminjaman proyektor dengan foto bukti
- **Form Booking**: Reservasi proyektor untuk tanggal tertentu
- **Form Pengembalian**: Pengembalian proyektor dengan verifikasi foto

### 🔍 Fitur Lainnya
- **Search & Filter**: Pencarian berdasarkan nama, NIM, kelas, dosen, proyektor, dan tanggal
- **Export Data**: Export ke PDF dan Excel
- **Camera Integration**: Pengambilan foto bukti menggunakan webcam
- **Form Validation**: Validasi input real-time
- **Responsive Design**: Tampilan optimal di semua perangkat

## 🛠️ Teknologi

### Frontend
- **HTML5**: Struktur markup semantik
- **CSS3**: Styling dengan fitur modern
  - Glass morphism effect
  - Backdrop filter blur
  - CSS Grid & Flexbox
  - Transitions & Animations
  - Media queries untuk responsive
- **JavaScript (Vanilla)**: Interaktivitas dan logika aplikasi
  - Camera API (getUserMedia)
  - Form validation
  - DOM manipulation
  - Event handling

### Design System
- **Font**: Google Fonts - Poppins (300, 400, 500, 600, 700)
- **Color Palette**:
  - Primary Blue: `#6495ED`
  - Navy: `#191970`
  - Light Blue: `#64BDED`
  - Purple: `#C395EB`
  - Dark Navy: `#2E3E66`

## 📁 Struktur Projek

```
figma-an/
├── 📄 login.html                 # Halaman login
├── 📄 registrasi.html            # Halaman registrasi
├── 📄 index.html             # Landing page
├── 📄 dashboard-peminjaman.html  # Dashboard admin
├── 📄 ajukan.html                # Form peminjaman proyektor
├── 📄 booking.html               # Form booking proyektor
├── 📄 pengembalian.html          # Form pengembalian proyektor
├── 🖼️ logo.svg                   # Logo aplikasi
└── 📖 README.md                  # Dokumentasi
```

## 🚀 Instalasi

### Prasyarat
- Web browser modern (Chrome, Firefox, Edge, Safari)
- Text editor (VS Code, Sublime Text, atau lainnya)
- Local server (opsional: Live Server extension untuk VS Code)

### Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/username/sistem-peminjaman-proyektor.git
   cd sistem-peminjaman-proyektor
   ```

2. **Buka dengan browser**
   - Langsung: Buka file `index.html` di browser
   - Atau gunakan Live Server di VS Code untuk development

3. **Akses kamera (untuk fitur foto)**
   - Pastikan browser memiliki izin akses kamera
   - Gunakan HTTPS atau localhost untuk Camera API

## 💻 Penggunaan

### Flow Aplikasi

1. **Halaman Awal**
   - Buka `index.html` sebagai landing page
   - Klik tombol "Login" untuk masuk

2. **Login/Registrasi**
   - Login dengan username dan password
   - Atau daftar akun baru di halaman registrasi

3. **Dashboard Peminjaman**
   - Setelah login, akses dashboard peminjaman
   - Lihat statistik dan status peminjaman

4. **Ajukan Peminjaman**
   - Pilih "Ajukan Proyektor" dari navigation
   - Isi form dengan data lengkap
   - Ambil foto bukti menggunakan webcam
   - Submit form

5. **Booking**
   - Gunakan tab "Booking" untuk reservasi
   - Pilih tanggal dan jam
   - Submit booking

6. **Pengembalian**
   - Pilih "Kembalikan Proyektor"
   - Input jam selesai pengembalian
   - Ambil foto bukti pengembalian
   - Submit pengembalian

## 📱 Halaman

### 1. Login (`login.html`)
- Form login dengan username dan password
- Link ke registrasi
- Link ke halaman utama

### 2. Registrasi (`registrasi.html`)
- Form dengan 6 field:
  - Username
  - NIM (hanya angka)
  - Password
  - Role (dropdown: Mahasiswa/Dosen/Admin)
  - Nama Lengkap
  - Email
  - Nomor Telepon (hanya angka)

### 3. Dashboard Landing (`index.html`)
- Hero section dengan judul dan deskripsi
- 3 navigation cards (Dashboard, Ajukan, Kembalikan)
- Feature cards dengan action buttons
- Info sections (Fitur Unggulan, Cara Penggunaan)
- Terms & Conditions

### 4. Dashboard Peminjaman (`dashboard-peminjaman.html`)
- 7 statistik cards:
  - Total Peminjaman
  - Sedang Dipinjam
  - Sudah Dikembalikan
  - Hari Ini
  - Proyektor Terpopuler
  - Minggu Ini
  - Bulan Ini
- Aktivitas terbaru
- Status proyektor
- Search & filter functionality
- Tabel data peminjaman
- Export buttons (PDF/Excel)

### 5. Ajukan Proyektor (`ajukan.html`)
- Tab switcher (Peminjaman/Booking)
- Form fields:
  - Nama
  - NIM
  - Kelas
  - Dosen
  - Jam Kuliah
  - WhatsApp
  - Proyektor (dropdown)
- Camera modal untuk foto bukti
- Form validation

### 6. Booking (`booking.html`)
- Tab switcher (Peminjaman/Booking)
- Form fields:
  - Tanggal (date picker dengan min=today)
  - Jam Mulai
  - Jam Selesai
  - Keperluan (textarea)
- Validasi tanggal dan jam

### 7. Pengembalian (`pengembalian.html`)
- Jam Selesai input
- Camera modal untuk foto bukti
- Tombol Cancel (dengan konfirmasi)
- Tombol Submit (disabled sampai foto diambil)
- Success message dengan redirect

## 📸 Screenshot

<!-- Tambahkan screenshot di sini -->
```
screenshots/
├── login.png
├── dashboard.png
├── dashboard-peminjaman.png
├── ajukan.png
├── booking.png
└── pengembalian.png
```

> 💡 **Note**: Tambahkan folder `screenshots/` dengan gambar-gambar di atas untuk dokumentasi yang lebih lengkap.

## 🎨 Design Patterns

### Glass Morphism
```css
background: linear-gradient(226deg, 
    rgba(255, 255, 255, 0.8) 0%, 
    rgba(216, 224, 241, 0.8) 50%, 
    rgba(188, 210, 255, 0.8) 100%);
backdrop-filter: blur(50px);
```

### Blur Backgrounds
- Multiple blur circles dengan opacity berbeda
- Filter blur 75px
- Posisi fixed untuk parallax effect

### Navigation Cards
- Hover effects dengan transform
- Active state dengan box-shadow
- Decorative white bar di atas

## 🔧 Konfigurasi

### Camera Settings
```javascript
navigator.mediaDevices.getUserMedia({ 
    video: { 
        facingMode: 'user',
        width: { ideal: 1280 },
        height: { ideal: 720 }
    } 
});
```

### Date Settings
```javascript
// Set minimum date to today
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);
```

## 🐛 Known Issues

1. **Camera API**: Memerlukan HTTPS atau localhost untuk berfungsi
2. **Export Functions**: Saat ini placeholder (perlu implementasi backend)
3. **Data Persistence**: Tidak ada database (data tidak tersimpan)

## 🚧 Roadmap

- [ ] Backend integration (PHP/Node.js)
- [ ] Database implementation (MySQL/MongoDB)
- [ ] Real authentication system
- [ ] Actual export to PDF/Excel functionality
- [ ] Email notifications
- [ ] WhatsApp integration
- [ ] Admin panel untuk manajemen user
- [ ] Barcode/QR code untuk proyektor
- [ ] Push notifications
- [ ] Dark mode

## 🤝 Kontribusi

Kontribusi selalu diterima! Berikut cara berkontribusi:

1. Fork projek ini
2. Buat branch fitur (`git checkout -b feature/FigmaDesign`)
3. Commit perubahan (`git commit -m 'Add some FigmaDesign'`)
4. Push ke branch (`git push origin feature/FigmaDesign`)
5. Buat Pull Request

### Guidelines

- Ikuti konvensi penamaan yang ada
- Tulis kode yang clean dan readable
- Tambahkan komentar untuk kode yang kompleks
- Test di berbagai browser sebelum submit PR

## 📝 Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

```
MIT License

Copyright (c) 2025 KiroFyzu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Author

**[Your Name]**
- GitHub: [@kirofyzu](https://github.com/kirofyzu)
- Email: kirofyzu@gmail.com

## 🙏 Acknowledgments

- Design inspiration dari Figma
- Google Fonts untuk Poppins font family
- MDN Web Docs untuk referensi API
- Camera API documentation

---

<div align="center">

### ⭐ Jangan lupa berikan star jika projek ini membantu! ⭐

Made with ❤️ by Kiro Fyzu

[⬆ Kembali ke atas](#-sistem-peminjaman-proyektor)

</div>
