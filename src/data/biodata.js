import fotoUrl from '@/assets/ard.jpg'

export const biodata = {
  identitas: {
    namaLengkap: 'Ardan Ramadhan Putra Hidayat',
    tempatLahir: 'Malang',
    tanggalLahir: '22 September 2008',
    jenisKelamin: 'Laki-Laki',
    agama: 'Islam',
  },

  kontak: {
    email: 'ramadhanardan69@gmail.com',
    telepon: '+62 882-1793-4130',
    alamat: 'Jl. Purwosari RT 001 RW 008',
    kabupaten: 'Pasuruan',
    provinsi: 'Jawa Timur',
    kodePos: '67162',
  },

  pendidikan: {
    status: 'Pelajar',
    sekolah: 'SMK Negeri 1 Purwosari',
    jurusan: 'Rekayasa Perangkat Lunak',
    kelas: 'XII (Dua Belas)',
  },

  profesional: {
    profesi: 'Full-stack Developer',
    deskripsi:
      'Pelajar Rekayasa Perangkat Lunak (RPL) yang memiliki minat dalam pengembangan web, khususnya menciptakan antarmuka yang modern, responsif, dan berfokus pada pengalaman pengguna. Terbiasa mempelajari teknologi baru serta mengembangkan berbagai proyek untuk meningkatkan kemampuan di bidang full-stack development dan software engineering. Aktif mengeksplorasi dunia teknologi dan terbuka untuk berkolaborasi dalam proyek yang memberikan dampak positif.',
    skill: [
      'Laravel',
      'PHP',
      'MySQL',
      'Next.js',
      'React.js',
      'Tailwind CSS',
      'JavaScript',
      'HTML',
      'CSS',
      'REST API Integration',
      'Figma',
      'Git',
      'GitHub'
    ],
    pengalaman: [
      {
        posisi: 'Web Development Intern',
        perusahaan: 'BBPPMPV BOE MALANG',
        periode: '05 Januari 2026 – 30 Juni 2026',
        lokasi: 'Malang, Jawa Timur',
        deskripsi: [
          'Berkontribusi dalam pengembangan 3 aplikasi web skala produksi untuk sistem reservasi fasilitas (lapangan & asrama) dan digitalisasi galeri seni.',
          'Menerjemahkan kebutuhan bisnis menjadi solusi web yang responsif menggunakan Laravel, PHP, MySQL, HTML, CSS, JavaScript, dan Tailwind CSS.',
          'Bekerja sama secara intensif dengan mentor dalam implementasi fitur, debugging aplikasi, optimasi performa, serta alur kerja Git & GitHub.',
          'Meningkatkan keterampilan problem-solving dan software engineering selama siklus pengembangan (perencanaan, implementasi, pengujian, hingga deployment).'
        ],
        skills: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Tailwind CSS', 'Git', 'GitHub']
      }
    ],

    // Sertifikat & Penghargaan
    sertifikat: [
      {
        judul: 'Peserta Terbaik Pelatihan TIK Bagi Murid Gelombang 9',
        penerbit: 'UPT. TIKP Dinas Pendidikan Provinsi Jawa Timur',
        tanggal: '15 Desember 2025',
        noKredensial: '400.3.4/7691/101.7.1/2025',
        deskripsi: 'Piagam Penghargaan sebagai Peserta Terbaik Pelatihan TIK Bagi Murid Gelombang 9 tahun 2025.'
      },
      {
        judul: 'National Informatics Olympiad Participant',
        penerbit: 'IYSMO / PON Indonesia',
        tanggal: '23 November 2025',
        noKredensial: '2352741/S/PON/IYSMO/XI/2025',
        deskripsi: 'Berpartisipasi aktif sebagai peserta kompetisi informatika tingkat nasional pada ajang Indonesia Youth Science Medical Olympiad (IYSMO) 2025.'
      },
      {
        judul: 'Pelatihan TIK bagi Murid (Gelombang 10)',
        penerbit: 'UPT. TIKP Dinas Pendidikan Provinsi Jawa Timur',
        tanggal: '29 – 30 Oktober 2025',
        noKredensial: '400.3.4/1925/101.7.1/2025',
        deskripsi: 'Sertifikat keikutsertaan Pelatihan Teknologi Informasi dan Komunikasi bagi Murid.'
      }
    ],

    github: 'github.com/Ardan2008',
    linkedin: 'linkedin.com/in/ardan-ramadhan-putra-hidayat-5a12a537b',
  },

  foto: {
    url: fotoUrl,
  },
}