// =====================================================================
// DATA TESTIMONI  |  STATUS: PLACEHOLDER (BELUM ASLI)
// Teks, nama, dan foto di bawah ini adalah CONTOH untuk mengisi layout.
// WAJIB diganti dengan testimoni pelanggan asli sebelum rilis.
// Jangan menayangkan testimoni palsu di situs publik.
// Ubah `placeholder` menjadi false setelah diganti dengan yang asli.
// =====================================================================

export interface Testimoni {
  id: string;
  nama: string; // TODO-GANTI
  kota: string; // TODO-GANTI
  teks: string; // TODO-GANTI
  paket?: string; // paket yang dibeli (opsional)
  foto?: string; // path di /public (opsional)
  placeholder: boolean;
}

export const testimoni: Testimoni[] = [
  {
    id: "t1",
    nama: "Ririn",
    kota: "Jakarta",
    teks: "Paket Starter sangat cocok untuk pemula seperti saya. Tanaman tiba dengan kondisi baik dan saya sangat puas dengan pelayanan mereka.",
    paket: "Starter",
    placeholder: false,
  },
  {
    id: "t2",
    nama: "Budi",
    kota: "Surabaya",
    teks: "Paket Rumah Hijau membuat rumah saya jadi lebih hijau dan segar. Saya sangat merekomendasikan!",
    paket: "Rumah Hijau",
    placeholder: false,
  },
  {
    id: "t3",
    nama: "Siti",
    kota: "Bandung",
    teks: "Paket Hadiah sangat bagus untuk diberikan sebagai hadiah ulang tahun. Tanaman dalam kondisi baik dan packaging rapi.",
    paket: "Hadiah",
    placeholder: false,
  },
];