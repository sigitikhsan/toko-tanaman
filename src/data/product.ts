// =====================================================================
// DATA PRODUK KATALOG  |  STATUS: PLACEHOLDER
// Nama tanaman nyata, tetapi harga, ukuran, dan foto adalah CONTOH.
// Cari "TODO-GANTI" untuk melihat bagian yang wajib diperbarui.
// =====================================================================

export type Kategori = "indoor" | "outdoor" | "sukulen" | "perlengkapan";
export type TingkatPerawatan = "mudah" | "sedang" | "perlu perhatian";

export interface Produk {
  id: string;
  nama: string;
  namaLatin?: string;
  kategori: Kategori;
  harga: number; // dalam Rupiah (TODO-GANTI)
  ukuran: string; // mis. "tinggi ±30 cm" (TODO-GANTI)
  perawatan: TingkatPerawatan;
  cahaya: string; // kebutuhan cahaya, singkat
  gambar: string; // path di /public (TODO-GANTI)
  alt: string; // deskripsi gambar untuk aksesibilitas
  besar?: boolean; // true = tampil sebagai kartu besar di grid asimetris
}

export const produk: Produk[] = [
  {
    id: "monstera",
    nama: "Monstera",
    namaLatin: "Monstera deliciosa",
    kategori: "indoor",
    harga: 150000,
    ukuran: "tinggi ±40 cm",
    perawatan: "mudah",
    cahaya: "Cahaya terang tidak langsung",
    gambar: "/images/produk/monstera.svg",
    alt: "Monstera dengan daun besar berlubang dalam pot terakota",
    besar: true,
  },
  {
    id: "snake-plant",
    nama: "Lidah Mertua",
    namaLatin: "Sansevieria trifasciata",
    kategori: "indoor",
    harga: 75000,
    ukuran: "tinggi ±35 cm",
    perawatan: "mudah",
    cahaya: "Cahaya rendah hingga sedang",
    gambar: "/images/produk/lidah-mertua.svg",
    alt: "Lidah mertua tegak dengan daun bergaris kuning di tepinya",
  },
  {
    id: "zz-plant",
    nama: "ZZ Plant",
    namaLatin: "Zamioculcas zamiifolia",
    kategori: "indoor",
    harga: 110000,
    ukuran: "tinggi ±40 cm",
    perawatan: "mudah",
    cahaya: "Cahaya rendah hingga sedang",
    gambar: "/images/produk/zz-plant.svg",
    alt: "ZZ plant dengan daun hijau mengilap",
  },
  {
    id: "kaktus-mini",
    nama: "Kaktus Mini",
    kategori: "sukulen",
    harga: 25000,
    ukuran: "tinggi ±8 cm",
    perawatan: "mudah",
    cahaya: "Sinar matahari langsung",
    gambar: "/images/produk/kaktus-mini.svg",
    alt: "Tiga kaktus mini dalam pot kecil",
  },
  {
    id: "echeveria",
    nama: "Echeveria",
    namaLatin: "Echeveria elegans",
    kategori: "sukulen",
    harga: 35000,
    ukuran: "diameter ±8 cm",
    perawatan: "sedang",
    cahaya: "Sinar matahari pagi",
    gambar: "/images/produk/echeveria.svg",
    alt: "Echeveria berbentuk roset hijau kebiruan",
  },
  {
    id: "calathea",
    nama: "Calathea",
    namaLatin: "Calathea orbifolia",
    kategori: "indoor",
    harga: 130000,
    ukuran: "tinggi ±35 cm",
    perawatan: "perlu perhatian",
    cahaya: "Cahaya tidak langsung, lembap",
    gambar: "/images/produk/calathea.svg",
    alt: "Calathea dengan daun lebar bergaris perak",
  },
  {
    id: "pot-terakota",
    nama: "Pot Terakota",
    kategori: "perlengkapan",
    harga: 30000,
    ukuran: "diameter 15 cm",
    perawatan: "mudah",
    cahaya: "-",
    gambar: "/images/produk/pot-terakota.svg",
    alt: "Pot terakota polos berdiameter 15 cm",
  },
  {
    id: "pupuk-organik",
    nama: "Pupuk Organik",
    kategori: "perlengkapan",
    harga: 20000,
    ukuran: "kemasan 500 gr",
    perawatan: "mudah",
    cahaya: "-",
    gambar: "/images/produk/pupuk-organik.svg",
    alt: "Kemasan pupuk organik 500 gram",
  },
];
