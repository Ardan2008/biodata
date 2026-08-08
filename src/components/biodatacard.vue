<script setup>
import { computed, ref } from "vue";
import { biodata } from "../data/biodata.js";

// Mengambil inisial dari nama lengkap (maks 2 kata) untuk fallback foto profil
const initials = computed(
  () =>
    biodata.identitas.namaLengkap
      .split(" ") // pecah nama jadi array per kata, misal "Budi Santoso" -> ["Budi", "Santoso"]
      .filter(Boolean) // buang elemen kosong/falsy (misal jika ada spasi ganda jadi string kosong "")
      .slice(0, 2) // ambil maksimal 2 kata pertama saja, misal ["Budi", "Santoso"]
      .map((w) => w[0]) // ambil huruf pertama dari tiap kata, jadi ["B", "S"]
      .join("") // gabungkan huruf-huruf itu jadi satu string, jadi "BS"
      .toUpperCase(), // ubah jadi huruf kapital semua, hasil akhir "BS"
);

// State untuk menandai apakah user sudah pernah scroll konten utama (dipakai untuk toggle overlay & indikator scroll)
const isScrolled = ref(false);

// Handler yang dipanggil setiap kali event scroll terjadi di elemen <main>
const handleScroll = (e) => {
  // e.target adalah elemen <main> yang di-scroll, scrollTop = jarak scroll dari atas dalam px
  if (e.target.scrollTop > 20) {
    // jika sudah scroll lebih dari 20px, anggap "sudah discroll" -> sembunyikan gradient & indikator
    isScrolled.value = true;
  } else {
    // jika masih di posisi awal (<=20px), tampilkan kembali gradient & indikator
    isScrolled.value = false;
  }
};
</script>

<template>
  <!-- Container utama, full-screen dengan background abu-abu dan konten di tengah -->
  <div
    class="min-h-screen bg-neutral-100 text-neutral-900 font-poppins flex justify-center items-center px-4 py-6 md:py-10"
  >
    <!-- Card utama: layout 2 kolom (sidebar kiri + konten kanan) pada layar medium ke atas -->
    <div
      class="w-full max-w-250 h-auto md:h-[86vh] md:max-h-205 rounded-[28px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-neutral-900/5 grid grid-cols-1 md:grid-cols-[320px_1fr] bg-white relative"
    >
      <!-- ==================== Sidebar Kiri ==================== -->
      <aside
        class="relative bg-neutral-900 text-white px-6 py-7 md:px-8 md:py-8 flex flex-col justify-between overflow-y-auto sidebar-no-scrollbar h-full"
      >
        <!-- Dekorasi lingkaran transparan di pojok sidebar -->
        <div
          class="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/5"
        ></div>
        <div
          class="pointer-events-none absolute -bottom-20 -left-10 w-48 h-48 rounded-full bg-white/3"
        ></div>

        <div class="relative">
          <!-- Foto Profil: tampilkan foto jika ada url, jika tidak tampilkan inisial -->
          <div
            class="relative w-20 h-20 rounded-full ring-4 ring-white/10 flex items-center justify-center text-xl font-semibold tracking-wide overflow-hidden bg-white text-neutral-900 mb-4 shadow-lg"
          >
            <img
              v-if="biodata.foto.url"
              :src="biodata.foto.url"
              :alt="biodata.identitas.namaLengkap"
              class="w-full h-full object-cover"
            />
            <span v-else>{{ initials }}</span>
          </div>

          <!-- Nama & Profesi -->
          <h1
            class="relative text-xl font-bold leading-snug mb-1.5 tracking-tight"
          >
            {{ biodata.identitas.namaLengkap }}
          </h1>
          <p
            class="relative inline-flex w-fit items-center text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-300 bg-white/10 rounded-full px-2.5 py-1 mb-5"
          >
            {{ biodata.profesional.profesi }}
          </p>

          <!-- Detail Kontak: Email, Telepon, Alamat -->
          <dl class="relative m-0 space-y-2.5">
            <div>
              <dt
                class="text-[9px] uppercase tracking-[0.14em] text-neutral-500 mb-0.5 font-medium"
              >
                Email
              </dt>
              <dd
                class="m-0 text-[12px] leading-relaxed text-white wrap-break-word"
              >
                <a
                  :href="`mailto:${biodata.kontak.email}`"
                  class="text-white/90 hover:text-white transition-colors underline underline-offset-4"
                  >{{ biodata.kontak.email }}</a
                >
              </dd>
            </div>
            <div>
              <dt
                class="text-[9px] uppercase tracking-[0.14em] text-neutral-500 mb-0.5 font-medium"
              >
                Telepon
              </dt>
              <dd
                class="m-0 text-[12px] leading-relaxed text-white wrap-break-word"
              >
                <a
                  :href="`tel:${biodata.kontak.telepon}`"
                  class="text-white/90 hover:text-white transition-colors underline underline-offset-4"
                  >{{ biodata.kontak.telepon }}</a
                >
              </dd>
            </div>
            <div>
              <dt
                class="text-[9px] uppercase tracking-[0.14em] text-neutral-500 mb-0.5 font-medium"
              >
                Alamat
              </dt>
              <dd
                class="m-0 text-[11px] leading-relaxed text-white/80 wrap-break-word"
              >
                {{ biodata.kontak.alamat }}, {{ biodata.kontak.kabupaten }},
                {{ biodata.kontak.provinsi }} {{ biodata.kontak.kodePos }}
              </dd>
            </div>
          </dl>
        </div>

        <!-- Sosial Media: Github & LinkedIn, diletakkan di bawah sidebar -->
        <div class="relative pt-4 mt-5 border-t border-white/10">
          <dl class="m-0 space-y-2.5">
            <div>
              <dt
                class="text-[9px] uppercase tracking-[0.14em] text-neutral-500 mb-0.5 font-medium"
              >
                Github
              </dt>
              <dd
                class="m-0 text-[12px] leading-relaxed text-white wrap-break-word"
              >
                <a
                  :href="`https://${biodata.profesional.github}`"
                  target="_blank"
                  rel="noopener"
                  class="text-white/90 hover:text-white transition-colors underline underline-offset-4"
                  >{{ biodata.profesional.github }}</a
                >
              </dd>
            </div>
            <div>
              <dt
                class="text-[9px] uppercase tracking-[0.14em] text-neutral-500 mb-0.5 font-medium"
              >
                LinkedIn
              </dt>
              <dd
                class="m-0 text-[12px] leading-relaxed text-white wrap-break-word"
              >
                <a
                  :href="`https://${biodata.profesional.linkedin}`"
                  target="_blank"
                  rel="noopener"
                  class="text-white/90 hover:text-white transition-colors underline underline-offset-4"
                  >{{ biodata.profesional.linkedin }}</a
                >
              </dd>
            </div>
          </dl>
        </div>
      </aside>

      <!-- Konten Kanan -->
      <div class="relative h-full overflow-hidden">
        <!-- Area konten utama, listen event scroll untuk toggle indikator -->
        <main
          @scroll="handleScroll"
          class="h-full overflow-y-auto px-7 py-8 md:px-10 visible-scrollbar"
        >
          <!-- Deskripsi Profil singkat -->
          <section class="mb-7">
            <p class="m-0 text-[13px] leading-relaxed text-neutral-600">
              {{ biodata.profesional.deskripsi }}
            </p>
          </section>

          <!-- Grid 2 kolom: Identitas & Pendidikan -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Identitas: TTL, jenis kelamin, agama -->
            <section>
              <h2
                class="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] mb-2.5 text-neutral-900"
              >
                <span class="w-4 h-0.5 bg-neutral-900 rounded-full"></span>
                Identitas
              </h2>
              <dl class="m-0 divide-y divide-neutral-100">
                <div class="py-2 flex flex-col gap-0.5">
                  <dt class="text-[10px] text-neutral-400">
                    Tempat, Tanggal Lahir
                  </dt>
                  <dd class="m-0 text-xs font-medium text-neutral-900">
                    {{ biodata.identitas.tempatLahir }},
                    {{ biodata.identitas.tanggalLahir }}
                  </dd>
                </div>
                <div class="py-2 flex flex-col gap-0.5">
                  <dt class="text-[10px] text-neutral-400">Jenis Kelamin</dt>
                  <dd class="m-0 text-xs font-medium text-neutral-900">
                    {{ biodata.identitas.jenisKelamin }}
                  </dd>
                </div>
                <div class="py-2 flex flex-col gap-0.5">
                  <dt class="text-[10px] text-neutral-400">Agama</dt>
                  <dd class="m-0 text-xs font-medium text-neutral-900">
                    {{ biodata.identitas.agama }}
                  </dd>
                </div>
              </dl>
            </section>

            <!-- Pendidikan: status, sekolah, jurusan, kelas -->
            <section>
              <h2
                class="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] mb-2.5 text-neutral-900"
              >
                <span class="w-4 h-0.5 bg-neutral-900 rounded-full"></span>
                Pendidikan
              </h2>
              <dl class="m-0 divide-y divide-neutral-100">
                <div class="py-2 flex flex-col gap-0.5">
                  <dt class="text-[10px] text-neutral-400">Status</dt>
                  <dd class="m-0 text-xs font-medium text-neutral-900">
                    {{ biodata.pendidikan.status }}
                  </dd>
                </div>
                <div class="py-2 flex flex-col gap-0.5">
                  <dt class="text-[10px] text-neutral-400">Sekolah</dt>
                  <dd class="m-0 text-xs font-medium text-neutral-900">
                    {{ biodata.pendidikan.sekolah }}
                  </dd>
                </div>
                <div class="py-2 flex flex-col gap-0.5">
                  <dt class="text-[10px] text-neutral-400">Jurusan</dt>
                  <dd class="m-0 text-xs font-medium text-neutral-900">
                    {{ biodata.pendidikan.jurusan }}
                  </dd>
                </div>
                <div class="py-2 flex flex-col gap-0.5">
                  <dt class="text-[10px] text-neutral-400">Kelas</dt>
                  <dd class="m-0 text-xs font-medium text-neutral-900">
                    {{ biodata.pendidikan.kelas }}
                  </dd>
                </div>
              </dl>
            </section>
          </div>

          <div class="h-px w-full bg-neutral-100 my-6"></div>

          <!-- Bagian Profesional: skill, pengalaman kerja, sertifikat -->
          <section class="space-y-7 pb-6">
            <h2
              class="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] mb-3 text-neutral-900"
            >
              <span class="w-4 h-0.5 bg-neutral-900 rounded-full"></span>
              Profesional
            </h2>

            <!-- Skill: ditampilkan sebagai badge/pill -->
            <div>
              <dt class="text-[10px] text-neutral-400 mb-2 font-medium">
                Skill & Keahlian
              </dt>
              <dd class="m-0">
                <ul class="list-none m-0 p-0 flex flex-wrap gap-1.5">
                  <li
                    v-for="skill in biodata.profesional.skill"
                    :key="skill"
                    class="text-[10px] font-medium bg-neutral-900 text-white px-2.5 py-1 rounded-full hover:bg-neutral-700 transition-colors cursor-default"
                  >
                    {{ skill }}
                  </li>
                </ul>
              </dd>
            </div>

            <!-- Pengalaman Kerja: loop tiap pengalaman dengan garis timeline di kiri -->
            <div>
              <dt class="text-[10px] text-neutral-400 mb-2.5 font-medium">
                Pengalaman Kerja
              </dt>
              <dd class="m-0 space-y-4">
                <div
                  v-for="(exp, index) in biodata.profesional.pengalaman"
                  :key="index"
                  class="relative pl-4 border-l-2 border-neutral-200"
                >
                  <!-- Titik bulat penanda timeline -->
                  <div
                    class="absolute -left-1.25 top-1.5 w-2 h-2 rounded-full bg-neutral-900"
                  ></div>

                  <div
                    class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1"
                  >
                    <h3 class="text-xs font-bold text-neutral-900">
                      {{ exp.posisi }}
                    </h3>
                    <span
                      class="text-[9px] font-medium text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full w-fit"
                    >
                      {{ exp.periode }}
                    </span>
                  </div>
                  <p class="text-[10px] font-medium text-neutral-500 mb-2">
                    {{ exp.perusahaan }} &bull; {{ exp.lokasi }}
                  </p>

                  <!-- Deskripsi bisa berupa array (list poin) atau string biasa -->
                  <ul
                    v-if="Array.isArray(exp.deskripsi)"
                    class="space-y-1 mb-2.5 pl-0 list-none"
                  >
                    <li
                      v-for="(desc, dIdx) in exp.deskripsi"
                      :key="dIdx"
                      class="text-[11px] text-neutral-600 leading-relaxed relative pl-3.5 before:content-['–'] before:absolute before:left-0 before:text-neutral-400"
                    >
                      {{ desc }}
                    </li>
                  </ul>
                  <p
                    v-else
                    class="text-[11px] text-neutral-600 leading-relaxed mb-2.5"
                  >
                    {{ exp.deskripsi }}
                  </p>

                  <!-- Skill spesifik yang dipakai di pengalaman ini (opsional) -->
                  <div
                    v-if="exp.skills && exp.skills.length"
                    class="flex flex-wrap gap-1"
                  >
                    <span
                      v-for="(s, sIdx) in exp.skills"
                      :key="sIdx"
                      class="text-[9px] font-medium bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded border border-neutral-200"
                    >
                      {{ s }}
                    </span>
                  </div>
                </div>
              </dd>
            </div>

            <!-- Sertifikasi & Penghargaan: hanya render jika datanya ada -->
            <div
              v-if="
                biodata.profesional.sertifikat &&
                biodata.profesional.sertifikat.length
              "
            >
              <dt class="text-[10px] text-neutral-400 mb-2.5 font-medium">
                Sertifikasi & Penghargaan
              </dt>
              <dd class="m-0 space-y-2.5">
                <div
                  v-for="(cert, cIdx) in biodata.profesional.sertifikat"
                  :key="cIdx"
                  class="p-3 rounded-xl border border-neutral-200/80 bg-neutral-50/50 hover:bg-white transition-all duration-200"
                >
                  <div class="flex items-start justify-between gap-2 mb-0.5">
                    <h4 class="text-xs font-bold text-neutral-900 leading-snug">
                      {{ cert.judul }}
                    </h4>
                    <span
                      class="text-[9px] text-neutral-500 whitespace-nowrap font-medium"
                      >{{ cert.tanggal }}</span
                    >
                  </div>
                  <p class="text-[10px] text-neutral-600 font-medium mb-1">
                    {{ cert.penerbit }}
                  </p>
                  <p
                    v-if="cert.deskripsi"
                    class="text-[10px] text-neutral-500 leading-relaxed mb-1"
                  >
                    {{ cert.deskripsi }}
                  </p>
                  <p
                    v-if="cert.noKredensial"
                    class="text-[9px] text-neutral-400 font-mono"
                  >
                    No: {{ cert.noKredensial }}
                  </p>
                </div>
              </dd>
            </div>
          </section>
        </main>

        <!-- Gradient overlay di bawah, memberi efek fade agar terlihat masih bisa discroll -->
        <div
          class="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-white via-white/80 to-transparent transition-opacity duration-300"
          :class="isScrolled ? 'opacity-0' : 'opacity-100'"
        ></div>

        <!-- Indikator panah scroll melayang, hilang otomatis setelah user scroll -->
        <div
          class="pointer-events-none absolute bottom-3 right-5 flex items-center gap-1.5 bg-neutral-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[9px] font-medium transition-all duration-300 shadow-md animate-bounce"
          :class="
            isScrolled ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          "
        >
          <span>Scroll</span>
          <svg
            class="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

.font-poppins {
  font-family:
    "Poppins",
    ui-sans-serif,
    system-ui,
    -apple-system,
    sans-serif;
}

/* Menyembunyikan batang scrollbar di sidebar agar estetika visual tetap rapi */
.sidebar-no-scrollbar::-webkit-scrollbar {
  display: none;
}
.sidebar-no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Scrollbar jelas untuk sisi konten utama */
.visible-scrollbar::-webkit-scrollbar {
  width: 5px;
}
.visible-scrollbar::-webkit-scrollbar-track {
  background: #f5f5f5;
  border-radius: 99px;
}
.visible-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 99px;
}
.visible-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>