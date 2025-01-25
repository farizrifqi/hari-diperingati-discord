# hari-diperingati-discord
  
![Preview message](https://github.com/farizrifqi/hari-diperingati-discord/blob/main/preview.png?raw=true)


Script ini menggunakan Google Apps Script untuk mengirim notifikasi ke channel Discord melalui webhook ketika suatu tanggal tertentu diakui sebagai hari libur atau acara khusus di Indonesia. Skrip ini mengambil data hari libur dari [hari-libur-api](https://github.com/notokrs/hari-libur-api) dan mengirim pesan yang diformat ke Discord.

## Deskripsi

Script ini memeriksa apakah hari ini merupakan hari libur atau acara khusus, lalu mengirim notifikasi ke channel Discord yang ditentukan menggunakan webhook. Pesan yang dikirim mencakup nama acara dan apakah itu merupakan hari libur nasional. Script ini dirancang untuk berjalan setiap hari pada waktu yang ditentukan.

## Fitur

- Mengambil data hari libur dari [hari-libur-api](https://github.com/notokrs/hari-libur-api).
- Memfilter acara yang terjadi pada hari ini.
- Mengirim pesan yang diformat ke Discord menggunakan webhook.
- Pesan dapat disesuaikan menggunakan [Discohook](https://discohook.org/).

## Instalasi

- Server Discord.
- Akun Google untuk Google Apps Script.

### Langkah-langkah

#### 1.Buat Webhook Discord:

1. Klik kanan pada channel Discord yang diinginkan.
2. Pilih **Edit Channel** > **Integrations** > **Webhooks**.
3. Klik **New Webhook** jika belum ada.
4. Salin URL webhook.

#### 2. Setup Google Apps Script:

- Buka [script.google.com](https://script.google.com).
- Buat proyek baru.
- Ganti kode default dengan isi dari **Code.gs**.
- Set variabel `WEBHOOK_URL` dengan URL webhook Discord yang telah disalin.

#### 3. Authorize:

Jalankan script sekali agar muncul.
Jika muncul peringatan seperti "**Google hasn’t verified this app**", klik **Advanced** lalu **Go to Project (Unsafe)**.

#### 4. Atur Trigger:

Di editor Google Apps Script, klik ikon jam untuk membuka halaman trigger.

##### Tambahkan trigger baru:

- Function to run: **main**

- Event source: **Time-driven**

- Type of time: **Day timer**
- Time: Pilih waktu (contoh: **8:00 AM - 9:00 AM**)
- Failure notifications: Atur ke **weekly** untuk menghindari spam email jika terjadi kegagalan.

## Tes Skrip:

- Jalankan fungsi main secara manual untuk memastikan berfungsi berjalan dengan baik.
- Periksa channel Discord untuk melihat notifikasi.

## Custom Message

Tampilan pesan bisa diubah di function `createDiscordPayload`. Pake [Discohook](https://discohook.org/) biar mudah.

## Note

- Pastikan `WEBHOOK_URL` diatur dengan benar di dalam skrip.
- Script ini dirancang untuk berjalan setiap hari, jadi atur trigger sesuai kebutuhan.
- Jika API berubah atau down, script mungkin perlu diubah.
