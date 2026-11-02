// =====================================================================
// DATA PAKET  |  STATUS: PLACEHOLDER
// Semua harga dan isi di bawah ini CONTOH. Ganti sebelum rilis.
// Cari "TODO-GANTI" untuk melihat bagian yang wajib diperbarui.
// =====================================================================

export interface Paket {
  id: string;
  nama: string;
  cocokUntuk: string;
  deskripsi: string;
  harga: number; // dalam Rupiah, tanpa titik (TODO-GANTI)
  isi: string[]; // daftar item yang termasuk
  unggulan: boolean; // true = ditandai "Paling Diminati" (hanya satu paket)
  gambar: string; // path di /public
}

export const paket: Paket[] = [
  {
    id: "starter",
    nama: "Starter",
    cocokUntuk: "Pemula, meja kerja",
    deskripsi: "Awal yang mudah dan nyaris tanpa risiko.",
    harga: 80000, // TODO-GANTI
    isi: [
      "3 kaktus mini",
      "1 pot keramik kecil",
      "Pupuk 100 gr",
      "Kartu panduan perawatan",
    ],
    unggulan: false,
    gambar: "/images/paket/starter.webp", // TODO-GANTI
  },
  {
    id: "meja-kerja",
    nama: "Meja Kerja",
    cocokUntuk: "Pekerja WFH",
    deskripsi: "Hijau secukupnya untuk menemani jam kerja.",
    harga: 170000, // TODO-GANTI
    isi: [
      "2 sukulen",
      "1 snake plant (sansevieria)",
      "2 pot",
      "Pupuk 250 gr",
      "Media tanam 1 kg",
    ],
    unggulan: false,
    gambar: "/images/paket/meja-kerja.webp", // TODO-GANTI
  },
  {
    id: "rumah-hijau",
    nama: "Rumah Hijau",
    cocokUntuk: "Ruang tamu & keluarga",
    deskripsi: "Paket terlengkap untuk mengisi satu sudut rumah.",
    harga: 300000, // TODO-GANTI
    isi: [
      "5 tanaman indoor campuran",
      "5 pot",
      "Pupuk 500 gr",
      "Media tanam 3 kg",
      "Semprotan air",
      "Konsultasi perawatan 1 bulan",
    ],
    unggulan: true,
    gambar: "/images/paket/rumah-hijau.webp", // TODO-GANTI
  },
  {
    id: "hadiah",
    nama: "Hadiah",
    cocokUntuk: "Kado & ucapan",
    deskripsi: "Siap diberikan, sudah dikemas rapi.",
    harga: 120000, // TODO-GANTI
    isi: [
      "1 tanaman pilihan",
      "Pot dekoratif",
      "Kartu ucapan",
      "Kemasan kado",
      "Pupuk 100 gr",
    ],
    unggulan: false,
    gambar: "/images/paket/hadiah.webp", // TODO-GANTI
  },
];

// ---------------------------------------------------------------------
// Helper: format harga dan link WhatsApp
// Nomor diisi lewat env: PUBLIC_WA_NUMBER=628xxxxxxxxxx (tanpa + atau 0 di depan)
// ---------------------------------------------------------------------
export const formatRupiah = (n: number): string =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

export const waLink = (p: Paket): string => {
  const nomor = import.meta.env.PUBLIC_WA_NUMBER ?? "628000000000"; // TODO-GANTI
  const pesan = `Halo, saya mau pesan Paket ${p.nama} (${formatRupiah(p.harga)}).`;
  return `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
};