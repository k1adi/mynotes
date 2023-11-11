const getInitialData = () => ([
  {
    id: 1,
    label: 3,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: '2022-04-14T04:27:34.572Z',
    updatedAt: '',
    archived: false,
  },
  {
    id: 2,
    label: 4,
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: '2022-04-14T04:27:34.572Z',
    updatedAt: '',
    archived: false,
  },
  {
    id: 3,
    label: 3,
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: '2022-04-14T04:27:34.572Z',
    updatedAt: '',
    archived: false,
  },
  {
    id: 4,
    label: 4,
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: '2022-04-14T04:27:34.572Z',
    updatedAt: '',
    archived: false,
  },
  {
    id: 5,
    label: 3,
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    createdAt: '2022-04-14T04:27:34.572Z',
    updatedAt: '',
    archived: false,
  },
  {
    id: 6,
    label: 5,
    title: "Module Bundler",
    body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    createdAt: '2022-04-14T04:27:34.572Z',
    updatedAt: '',
    archived: false,
  },
  {
    id: 7,
    label: 1,
    title: "Apa Itu HTML",
    body: "HTML (Hypertext Markup Language) adalah fondasi dari setiap halaman web. Artikel ini memberikan pengantar singkat untuk pemula, membahas struktur dasar HTML, elemen umum, dan cara memulai membuat halaman web sederhana.",
    createdAt: '2023-11-11T04:27:34.572Z',
    updatedAt: '',
    archived: false,
  },
  {
    id: 8,
    label: 2,
    title: "Membuat Tampilan Menarik",
    body: "CSS (Cascading Style Sheets) memungkinkan desain web yang menarik. Dalam catatan ini, kita akan membahas dasar-dasar CSS, termasuk selektor, properti gaya, dan cara menerapkannya untuk meningkatkan estetika halaman web.",
    createdAt: '2023-11-12T04:27:34.572Z',
    updatedAt: '',
    archived: false,
  },
]);

const getSelectedNote = (notes, id) => {
  return notes.find(note => note.id == id);
}

const noteObject = {
  id: '',
  label: null,
  title: '',
  body: '',
  archived: '',
}

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("en-US", options)
}

export { getInitialData, showFormattedDate, getSelectedNote, noteObject };