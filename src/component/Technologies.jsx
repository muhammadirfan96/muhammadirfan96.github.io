import Logo from "./Logo";
import mongodb from "/img/mongodb.png";
import expressjs from "/img/expressjs.png";
import reactjs from "/img/reactjs.png";
import nodejs from "/img/nodejs.png";
import mysql from "/img/mysql.png";
import codeigniter from "/img/codeigniter.png";
import bootstrap from "/img/bootstrap.png";
import tailwindcss from "/img/tailwindcss.png";
import restapi from "/img/restapi.png";
import git from "/img/git.png";
import sheetjs from "/img/sheetjs.png";
import pdfjs from "/img/pdfjs.png";
import mongoose from "/img/mongoose.png";
import sequelize from "/img/sequelize.png";
import sweetalert from "/img/sweetalert.png";

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
      <Logo
        head="technologies"
        tw_position="justify-left"
        tw_content_width=""
        state={data}
      />
    </>
  );
};

export default Technologies;
