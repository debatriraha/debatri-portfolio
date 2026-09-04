import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Typewriter } from "react-simple-typewriter";
import "./style.css";
import profileImage from "../Assets/images/profile.jpg";
import resume from "../Assets/DebatriRahaResume.pdf";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiC,
  SiTailwindcss,
  SiJupyter,
  SiTypescript,
} from "react-icons/si";

import {
  Mail,
  Phone,
  MapPin,
  Download,
  Menu,
  X,
  Code2,
  Laptop,
  Smartphone,
  Cpu,
  Palette,
  GraduationCap,
  Calendar,
  Building,
  ExternalLink,
  Send,
} from "lucide-react";

/* ================= SKILLS ================= */

const skills = [
  { name: "C", Icon: SiC, color: "text-blue-600" },
  { name: "Java", Icon: FaJava, color: "text-red-500" },
  { name: "Python", Icon: FaPython, color: "text-yellow-500" },
  { name: "HTML", Icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", Icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", Icon: FaJs, color: "text-yellow-400" },
  { name: "MySQL", Icon: FaDatabase, color: "text-blue-600" },
  { name: "React.js", Icon: FaReact, color: "text-cyan-500" },
  { name: "Node.js", Icon: FaNodeJs, color: "text-green-600" },
  { name: "Bootstrap", Icon: FaBootstrap, color: "text-purple-600" },
  { name: "Git", Icon: FaGitAlt, color: "text-orange-600" },
  { name: "GitHub", Icon: FaGithub, color: "text-slate-800" },
  { name: "Canva", Icon: Palette, color: "text-cyan-500" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Jupyter Notebook", Icon: SiJupyter, color: "text-orange-500" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-blue-600" },
];

/* ================= EDUCATION ================= */

const educationList = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    duration: "2023 - 2027",
    institution: "Global College Of Science & Technology",
    affiliation: "Affiliated to MAKAUT",
    desc: "Currently pursuing undergraduate studies focusing on computer science fundamentals, programming, and software development.",
  },
  {
    degree: "Higher Secondary (12th Grade)",
    duration: "Passout: 2023",
    institution: "Holy Family Girls High School",
    affiliation: "",
    desc: "Completed higher secondary education with core academic excellence.",
  },
  {
    degree: "Secondary (10th Grade)",
    duration: "Passout: 2021",
    institution: "Holy Family Girls High School",
    affiliation: "",
    desc: "Completed secondary school education with core foundational studies.",
  },
];

/* ================= SERVICES ================= */

const services = [
  {
    title: "Web Development",
    tag: "Hot",
    Icon: Laptop,
    desc: "Responsive and dynamic web applications built with React, HTML, CSS, and modern frameworks.",
  },
  {
    title: "Mobile UI Design",
    tag: "UI/UX",
    Icon: Smartphone,
    desc: "Creative mobile and web user interface design focused on usability, performance, and aesthetics.",
  },
  {
    title: "AI / ML Solutions",
    tag: "New",
    Icon: Cpu,
    desc: "Data-driven scripts, machine learning models, and analytical tools built using Python.",
  },
];

/* ================= PROJECTS ================= */

const projects = [
  {
    title: "Weather App",
    desc: "A responsive personal weather application displaying real-time weather conditions with animated UI elements.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/debatriraha/Weather",
  },
  {
    title: "Calculator App",
    desc: "A fully functional calculator application with clean design and interactive user interface.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/debatriraha/Calculator",
  },
  {
  title: "EduLearn Website",
  desc:"EduLearn is a modern and responsive Online Education Platform built with React.js and Vite. It provides students with an interactive interface to explore courses, view course details, enroll in courses, and manage their learning dashboard.",
  tech:["React.js","JavaScript","HTML5","CSS3"],
  github: "https://github.com/debatriraha/Edu_Learn",
},
  {
  title: "Currency-converter",
  desc: "A currency converter is a tool that calculates and displays the live exchange value of one currency into another.",
  tech:["HTML","CSS","JavaScript"],
  github:"https://github.com/debatriraha/currency-converter",
},
];

/* ================= NAVIGATION ================= */

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "My Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800 font-sans selection:bg-teal-500 selection:text-white">

      {/* ================= MODERN NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md text-stone-100 border-b border-slate-800 shadow-lg transition-all">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

          <a
            href="#home"
            className="font-extrabold text-xl tracking-wider text-teal-400 flex items-center gap-2 group"
          >
            <span className="bg-teal-500/10 p-2 rounded-xl group-hover:bg-teal-500/20 transition">
              <Code2 className="text-teal-400" size={22} />
            </span>
            <span>Debatri<span className="text-white">.raha</span></span>
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative py-1 text-slate-300 hover:text-teal-400 transition-colors after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-teal-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Let's Talk
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg bg-slate-800 text-teal-400 hover:bg-slate-700 transition"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {open && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-5 flex flex-col gap-4 text-base font-medium shadow-2xl">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-slate-300 hover:text-teal-400 border-b border-slate-800/50 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center bg-teal-500 text-slate-950 font-semibold py-3 rounded-xl"
            >
              Let's Talk
            </a>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="flex items-center justify-center text-center py-28 px-6 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-stone-100"
      >
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-teal-400 text-xs font-bold mb-4 bg-teal-500/10 py-1.5 px-4 rounded-full inline-block border border-teal-500/20">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              <Typewriter
                words={[
                  "Debatri Raha",
                  "a Web Developer",
                  "a React Developer",
                  "a Designer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 mb-10 font-light">
            Web Developer · Designer · React Developer
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#about"
              className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-teal-500/20 transition-all transform hover:-translate-y-1"
            >
              Know More
            </a>
            <a
              href="#projects"
              className="border border-slate-700 hover:border-teal-400 text-stone-100 hover:text-teal-400 font-semibold px-8 py-3.5 rounded-full transition-all"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Get to know me</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-1 text-slate-900 flex items-center justify-center gap-3">
              <Code2 className="text-teal-600 bg-teal-50 p-2 rounded-xl shadow-sm" size={40} />
              About Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-start">
            <div className="bg-white rounded-3xl border border-stone-200/80 shadow-xl p-8 flex flex-col items-center text-center sticky top-28">
              <div className="w-44 h-44 rounded-2xl overflow-hidden shadow-inner ring-4 ring-teal-500/20 mb-6 group">
                <img
                  src={profileImage}
                  alt="Debatri Raha"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">Debatri Raha</h3>
              <p className="text-sm text-teal-600 font-medium mb-6">Full-Stack Dev & React Developer</p>

              <div className="flex justify-center gap-4 text-lg mb-8">
                <a href="https://x.com/DebatriR89820" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-teal-500 hover:text-white transition shadow-sm"><FaTwitter /></a>
                <a href="https://www.instagram.com/i_ts_debatri" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-rose-500 hover:bg-teal-500 hover:text-white transition shadow-sm"><FaInstagram /></a>
                <a href="https://github.com/debatriraha" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-teal-500 hover:text-white transition shadow-sm"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/debatri-raha-a45624280/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-blue-600 hover:bg-teal-500 hover:text-white transition shadow-sm"><FaLinkedin /></a>
              </div>

              <a href={resume} download className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-medium px-5 py-3 rounded-xl hover:bg-teal-600 transition-colors shadow-md">
                <Download size={18} /> Download Resume
              </a>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-3xl border border-stone-200/80 shadow-xl p-8 sm:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Hello, I'm Debatri 👋</h3>
                <div className="space-y-5 text-slate-600 leading-relaxed text-base sm:text-lg">
                  <p>🎓 I am currently pursuing a Bachelor of Computer Application degree at Maulana Abul Kalam Azad University of Technology, West Bengal.</p>
                  <p>🌟 I am passionate about building practical and user-friendly applications while continuously improving my technical and problem-solving skills.I enjoy learning new technologies, working on real-world projects, and exploring innovative solutions to technical challenges.</p>
                  <p>
    🧠I am currently looking for internship and career opportunities in Aspiring Full-Stack Web Development, Dara Analyst, and related computer application fields, where I can apply my knowledge, contribute to meaningful projects, and learn from experienced professionals.

   I believe in continuous learning, hard work, creativity, and problem-solving, and I am always excited to take on new challenges and expand my technical knowledge.</p>

    <p>📧You can reach me at debatriraha@gmail.com.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-teal-50/50 to-teal-50/80 border border-teal-100 rounded-2xl p-5">
                    <h4 className="font-bold text-teal-800 mb-2 text-sm uppercase tracking-wider">💻 Languages</h4>
                    <p className="text-sm text-slate-600 font-medium">C, Java, Python, JavaScript, TypeScript, PHP</p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50/50 to-teal-50/80 border border-teal-100 rounded-2xl p-5">
                    <h4 className="font-bold text-teal-800 mb-2 text-sm uppercase tracking-wider">🌐 Web Technologies</h4>
                    <p className="text-sm text-slate-600 font-medium">HTML5, CSS3, Bootstrap, Tailwind CSS</p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50/50 to-teal-50/80 border border-teal-100 rounded-2xl p-5">
                    <h4 className="font-bold text-teal-800 mb-2 text-sm uppercase tracking-wider">⚛️ Frontend</h4>
                    <p className="text-sm text-slate-600 font-medium">React.js, Vite</p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50/50 to-teal-50/80 border border-teal-100 rounded-2xl p-5">
                    <h4 className="font-bold text-teal-800 mb-2 text-sm uppercase tracking-wider">🗄️ Backend & DB</h4>
                    <p className="text-sm text-slate-600 font-medium">Node.js, PHP, MySQL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education" className="py-24 px-6 bg-slate-100/60 border-t border-stone-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Academic Background</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-1 text-slate-900 flex items-center justify-center gap-3">
              <GraduationCap className="text-teal-600 bg-teal-50 p-2 rounded-xl shadow-sm" size={40} />
              Education Journey
            </h2>
          </div>

          <div className="relative border-l-2 border-teal-500/30 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-8">
            {educationList.map((edu, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-5 h-5 rounded-full bg-teal-500 border-4 border-white shadow-md group-hover:scale-125 transition-transform"></div>
                <div className="bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-8 shadow-md hover:shadow-xl transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
                      <Calendar size={13} /> {edu.duration}
                    </span>
                    {edu.affiliation && <span className="text-xs font-medium text-slate-500 italic">{edu.affiliation}</span>}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{edu.degree}</h3>
                  <h4 className="text-sm font-semibold text-teal-600 flex items-center gap-1.5 mb-3"><Building size={15} /> {edu.institution}</h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{edu.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MY SKILLS ================= */}
      <section id="skills" className="py-24 px-6 bg-stone-50 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-1 text-slate-900 flex items-center justify-center gap-3">
              <Code2 className="text-teal-600 bg-teal-50 p-2 rounded-xl shadow-sm" size={40} />
              My Skills
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map(({ name, Icon, color }, i) => (
              <div key={i} className="bg-white border border-stone-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-teal-400 transition-all flex flex-col items-center text-center group">
                <div className={`text-4xl mb-3 ${color} group-hover:scale-110 transition-transform`}>
                  <Icon />
                </div>
                <h3 className="font-bold text-slate-800 text-base">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-24 px-6 bg-slate-100/60 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">What I Offer</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-1 text-slate-900 flex items-center justify-center gap-3">
              <Laptop className="text-teal-600 bg-teal-50 p-2 rounded-xl shadow-sm" size={40} />
              My Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map(({ title, tag, Icon, desc }, i) => (
              <div key={i} className="bg-white rounded-3xl border border-stone-200/80 p-8 shadow-sm hover:shadow-xl transition-all relative group">
                <span className="absolute top-6 right-6 text-xs font-semibold px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
                  {tag}
                </span>
                <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-24 px-6 bg-stone-50 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-1 text-slate-900 flex items-center justify-center gap-3">
              <Code2 className="text-teal-600 bg-teal-50 p-2 rounded-xl shadow-sm" size={40} />
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white rounded-3xl border border-stone-200/80 p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-base mb-6 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-xs font-semibold px-3 py-1 rounded-lg bg-stone-100 text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                >
                  <FaGithub size={20} /> View on GitHub <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-stone-100 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-1 text-white mb-6">Let's Work Together</h2>
          <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
          <a
            href="mailto:debatriraha@gmail.com"
            className="inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-8 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-1"
          >
            <Send size={18} /> Send Me an Email
          </a>
        </div>
      </section>

    </div>
  );
}