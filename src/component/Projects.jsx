import Card from "./Card";
import mysid from "/img/mysid.png";
import simokit from "/img/simokit.png";
import webpunagaya from "/img/webpunagaya.png";
import massekolah from "/img/massekolah.png";

const Projects = () => {
  const data = [
    {
      logo: mysid,
      nama: "mysid",
      url: "https://mysid.id",
      desc: "Aplikasi ini dibangun menggunakan codeigniter 4 dan untuk style menggunakan tailwindcss v3. Interaksi tampilan yang menerapkan metode asynchronous JavaScript dan autentikasi Jason Web Token. Aplikasi yang digunakan oleh Pemerintah Kabupaten Muna, Desa Latompa ini memiliki fitur pembuatan surat berbasis PDF, Portal berita, manajemen data warga penerima bansos, Website Profil Desa, dan lain-lain",
    },
    {
      logo: simokit,
      nama: "simokit",
      url: "https://webpunagaya.com",
      desc: "Merupakan aplikasi yang dibangun menggunakan codeigniter 4 dan untuk style menggunakan bootstrap v5. Aplikasi yang digunakan oleh PT. PLN (Persero) UPK PUNAGAYA ini memiliki fitur pembuatan berbagai laporan berbasis PDF, Jadwal kegiatan rutin harian, monitoring KPI, SOP IK peralatan dan lain-lain.",
    },
  ];

  return (
    <>
      <Card head="latest projects" state={data} />
    </>
  );
};

export default Projects;
