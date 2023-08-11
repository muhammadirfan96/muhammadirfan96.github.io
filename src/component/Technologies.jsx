import Logo from "./Logo";
import mongodb from "/mongodb.png";
import expressjs from "/expressjs.png";
import reactjs from "/reactjs.png";
import nodejs from "/nodejs.png";
import mysql from "/mysql.png";
import codeigniter from "/codeigniter.png";
import bootstrap from "/bootstrap.png";
import tailwindcss from "/tailwindcss.png";
import restapi from "/restapi.png";
import git from "/git.png";
import sheetjs from "/sheetjs.png";
import pdfjs from "/pdfjs.png";
import mongoose from "/mongoose.png";
import sequelize from "/sequelize.png";
import sweetalert from "/sweetalert.png";

const Technologies = () => {
  const data = [
    { logo: mongodb, nama: "mongoDB", url: "https://www.mongodb.com/" },
    { logo: expressjs, nama: "expressJS", url: "https://expressjs.com/" },
    { logo: reactjs, nama: "reactJS", url: "https://react.dev/" },
    { logo: nodejs, nama: "nodeJS", url: "https://nodejs.org/" },
    { logo: mysql, nama: "mySQL", url: "https://www.mysql.com/" },
    { logo: codeigniter, nama: "codeigniter", url: "https://codeigniter.com/" },
    { logo: bootstrap, nama: "bootstrap", url: "https://getbootstrap.com/" },
    { logo: tailwindcss, nama: "tailwindcss", url: "https://tailwindcss.com/" },
    { logo: restapi, nama: "rest API", url: "#" },
    { logo: git, nama: "git", url: "https://git-scm.com/" },
    { logo: sheetjs, nama: "sheetjs", url: "https://sheetjs.com/" },
    { logo: pdfjs, nama: "pdfjs", url: "https://mozilla.github.io/pdf.js/" },
    { logo: mongoose, nama: "mongoose", url: "https://mongoosejs.com/" },
    { logo: sequelize, nama: "sequelize", url: "https://sequelize.org/" },
    {
      logo: sweetalert,
      nama: "sweetalert",
      url: "https://sweetalert2.github.io/",
    },
  ];

  return (
    <>
      <Logo head="technologies" tw="justify-left" state={data} />
    </>
  );
};

export default Technologies;
