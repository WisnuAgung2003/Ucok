import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { BiCloudDownload } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-4xl flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 px-5"
    >
      {/* Bagian Deskripsi */}
      <div className="w-full lg:w-1/2 text-primary mb-10 lg:mb-0">
        <h1 className="text-4xl font-semibold text-white">Selamat Datang di SI-PEKA👋 </h1>
        <span
          className="inline-block text-4xl lg:text-5xl font-semibold text-primary text-left lg:text-right lg:whitespace-nowrap"
          style={{ wordSpacing: "-2px" }}
        >
          <TypeAnimation
            sequence={["Sistem Pelaporan Kadus, Kader, dan Warga", 9000]}
            wrapper="span"
            speed={10}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </span>
        <h2 className="text-sm font-base text-white lg:text-lg mt-4">
          DESA AIKMEL UTARA, KECAMATAN AIKMEL, KABUPATEN LOMBOK TIMUR <br />
          <span className="text-primary text-lg font-semibold">
            NUSA TENGGARA BARAT
          </span>
        </h2>

        {/* Gambar Dipindahkan ke Sini */}
        <div className="w-full flex justify-center items-center mt-5 lg:hidden">
          <div className="relative flex justify-center items-center ">
            <div className="absolute w-64 h-64 rounded-full border-4 border-dashed border-primary animate-spin duration-900"></div>
            <img
              src="img/nug.png"
              alt="nug"
              className="w-60 h-60 object-contain filter brightness-60 relative"
            />
          </div>
        </div>

        <p className="text-base text-white max-w-xl lg:text-md mt-4">
          I'm passionate about creating innovative solutions and exploring new
          technologies. Welcome to my
          <span className="font-bold text-primary"> Portfolio</span> – a
          showcase of my journey, skills, and projects.
        </p>

        <div className="flex items-center mt-5 flex-wrap justify-center lg:justify-start gap-4">
          <a
            href="https://www.instagram.com/ngrhcc/"
            className="w-9 h-9 mr-3 rounded-full flex justify-center text-primary items-center border border-primary hover:border-primary hover:bg-primary hover:text-slate-900 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/nur-cahyo-nugroho-bb9171259/"
            className="w-9 h-9 mr-3 rounded-full flex justify-center text-primary items-center border border-primary hover:border-primary hover:bg-primary hover:text-slate-900  transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://rb.gy/ga1o48"
            className="w-9 h-9 mr-3 rounded-full flex justify-center text-primary items-center border border-primary hover:border-primary hover:bg-primary hover:text-slate-900  transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <BsGithub />
          </a>

          <a
            href="https://formlink.mwater.co/#/19e38988ef524540a8c541bf7e482830/767e46b542984cb78c82ec6d9b7399d9?branding=mwater"
            className="w-48 h-9 rounded-full flex justify-center text-primary items-center border border-primary hover:border-primary hover:bg-primary hover:text-slate-900  transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
            title="Curriculum Vitae"
          >
            <span className="mr-4">Download CV</span>{" "}
            <BiCloudDownload className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Bagian Gambar (untuk desktop saja) */}
      <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center">
        <div className="relative flex justify-center items-center  ">
          <div className="absolute w-64 h-64 rounded-full border-4 border-dashed border-primary animate-spin duration-900"></div>
          <img
            src="img/nug.png"
            alt="nug"
            className="w-60 h-60 object-contain filter brightness-60 relative "
          />
        </div>
      </div>
    </div>
  );
}
