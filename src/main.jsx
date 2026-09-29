import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, ExternalLink,
  BrainCircuit, Database, Cloud, Code2, Sparkles, Menu, X
} from "lucide-react";
import "./index.css";

const projects = [
  {
    title: "Lung Disease Detection & Medical Chatbot",
    description:
      "A computer-vision and GenAI application that classifies chest X-ray images and provides an interactive medical-information chatbot.",
    tags: ["PyTorch", "ResNet18", "LangChain", "Chroma", "Streamlit"],
    github: "https://github.com/saramahmoudd1/Lung-Disease-AI-Assistant",
    image: "/projects/lung_disease.PNG",
    accent: "from-indigo-500/20 to-cyan-500/10",
    icon: "🫁"
  },
  {
    title: "Cancer Prediction",
    description:
      "A machine-learning pipeline for high-dimensional gene-expression data, including feature selection and classification.",
    tags: ["Python", "Scikit-learn", "Feature Selection", "Pandas"],
    github: "https://github.com/",
    accent: "from-fuchsia-500/20 to-indigo-500/10",
    icon: "🧬"
  },
  {
    title: "Breast Cancer Classification",
    description:
      "A classification project focused on predicting breast-cancer outcomes using machine-learning techniques and data analysis.",
    tags: ["Machine Learning", "Python", "Pandas", "Visualization"],
    github: "https://github.com/",
    accent: "from-pink-500/20 to-purple-500/10",
    icon: "🔬"
  },
  {
    title: "Face Recognition",
    description:
      "A computer-vision project exploring face detection and recognition workflows with Python and OpenCV.",
    tags: ["Python", "OpenCV", "Computer Vision"],
    github: "https://github.com/",
    accent: "from-cyan-500/20 to-blue-500/10",
    icon: "👤"
  },
  {
    title: "Coin Collector Game",
    description:
      "A Unity game-development project demonstrating gameplay logic, interaction, scoring, and basic 3D development.",
    tags: ["Unity", "C#", "Game Development"],
    github: "https://github.com/",
    accent: "from-amber-500/20 to-orange-500/10",
    icon: "🎮"
  }
];

const skills = [
  { icon: BrainCircuit, title: "AI & Machine Learning", items: ["Machine Learning", "Deep Learning", "Computer Vision", "Generative AI"] },
  { icon: Code2, title: "Programming & Data", items: ["Python", "NumPy", "Pandas", "Matplotlib", "OpenCV"] },
  { icon: Database, title: "AI Applications", items: ["LLMs", "RAG", "LangChain", "Vector Databases", "Streamlit"] },
  { icon: Cloud, title: "Cloud & Deployment", items: ["AWS", "ML Engineering", "Model Deployment", "Cloud Fundamentals"] }
];

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const links = ["About", "Projects", "Skills", "Contact"];
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#080b14]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="font-bold tracking-tight">Sara<span className="text-indigo-400">.</span></a>
        <div className="hidden gap-7 text-sm text-slate-300 md:flex">
          {links.map(x => <a key={x} href={`#${x.toLowerCase()}`} className="transition hover:text-white">{x}</a>)}
        </div>
        <a href="#contact" className="hidden rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-200 md:block">Let's connect</a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="border-t border-white/5 px-5 py-4 md:hidden">
        {links.map(x => <a onClick={() => setOpen(false)} key={x} href={`#${x.toLowerCase()}`} className="block py-3 text-slate-300">{x}</a>)}
      </div>}
    </nav>
  );
}

function Hero() {
  return (
    <section className="grid-bg relative overflow-hidden pt-32">
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/15 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-12 md:grid-cols-[1.15fr_.85fr]">
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-200">
            <Sparkles size={14} /> AI & Machine Learning Engineer
          </div>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Building intelligent solutions with <span className="text-indigo-400">AI.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            I'm Sara Elsharkawy, an AI/ML engineer focused on machine learning, deep learning,
            computer vision, Generative AI, and practical deployment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-400">View projects <ArrowUpRight size={17} /></a>
            <a href="https://github.com/saramahmoudd1" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-white/25"><Github size={17} /> GitHub</a>
            <a href="/Sara_Elsharkawy_CV.pdf" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-white/25"><Download size={17} /> CV</a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
            <span>Python</span><span>•</span><span>PyTorch</span><span>•</span><span>Generative AI</span><span>•</span><span>AWS</span>
          </div>
        </div>

        <div className="float mx-auto w-full max-w-sm">
          <div className="glass relative overflow-hidden rounded-[2rem] p-3 shadow-glow">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl" />
            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
              <img
                src="/profile.jpeg"
                alt="Sara Elsharkawy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return <section id="about" className="mx-auto max-w-6xl px-5 py-24">
    <div className="max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-[.25em] text-indigo-400">About me</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Turning data into useful AI experiences.</h2>
      <p className="mt-5 leading-7 text-slate-400">
        I enjoy building end-to-end AI projects — from data preparation and model training
        to interactive applications. My current focus is growing as an ML engineer while
        exploring LLMs, RAG systems, and cloud-based deployment.
      </p>
    </div>
    <div className="mt-10 grid gap-4 sm:grid-cols-3">
      {[
        ["01", "Learn", "Keep building strong foundations in AI and ML."],
        ["02", "Build", "Turn ideas into practical, demonstrable projects."],
        ["03", "Deploy", "Move models from notebooks toward usable applications."]
      ].map(([n, t, d]) => <div key={n} className="glass rounded-2xl p-6">
        <span className="text-xs font-bold text-indigo-400">{n}</span>
        <h3 className="mt-4 font-bold">{t}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{d}</p>
      </div>)}
    </div>
  </section>;
}

function Projects() {
  return <section id="projects" className="bg-slate-950/40 py-24">
    <div className="mx-auto max-w-6xl px-5">
      <p className="text-sm font-bold uppercase tracking-[.25em] text-indigo-400">Selected work</p>
      <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects that show what I can build.</h2>
        <a href="https://github.com/saramahmoudd1" target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-400 hover:text-white">View GitHub →</a>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => <article key={p.title} className={`glass group overflow-hidden rounded-3xl ${i === 0 ? "md:col-span-2" : ""}`}>
          <div className={`flex min-h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${p.accent}`}>
            {p.image ? (
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            ) : (
              <span className="text-7xl transition duration-300 group-hover:scale-110">
                {p.icon}
              </span>
            )}
          </div>
          <div className="p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <a href={p.github} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} on GitHub`} className="rounded-full border border-white/10 p-2 text-slate-300 hover:text-white"><Github size={18} /></a>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">{p.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">{p.tags.map(t => <span key={t} className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">{t}</span>)}</div>
            <a href={p.github} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-300 hover:text-indigo-200">View on GitHub <ExternalLink size={15} /></a>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}

function Skills() {
  return <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
    <p className="text-sm font-bold uppercase tracking-[.25em] text-indigo-400">Toolkit</p>
    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Skills & technologies</h2>
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      {skills.map(({ icon: Icon, title, items }) => <div key={title} className="glass rounded-3xl p-6">
        <div className="flex items-center gap-3"><div className="rounded-xl bg-indigo-500/10 p-3 text-indigo-300"><Icon size={20} /></div><h3 className="font-bold">{title}</h3></div>
        <div className="mt-5 flex flex-wrap gap-2">{items.map(x => <span key={x} className="rounded-lg border border-white/8 bg-white/[.03] px-3 py-2 text-xs text-slate-300">{x}</span>)}</div>
      </div>)}
    </div>
  </section>;
}

function Contact() {
  return <section id="contact" className="mx-auto max-w-6xl px-5 pb-16 pt-8">
    <div className="overflow-hidden rounded-[2rem] border border-indigo-400/15 bg-gradient-to-br from-indigo-500/15 via-slate-900/60 to-cyan-500/10 p-8 sm:p-12">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[.25em] text-indigo-300">Contact</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Have an AI idea? Let's talk.</h2>
        <p className="mt-4 leading-7 text-slate-400">I'm open to internships, freelance opportunities, collaborations, and interesting AI/ML projects.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=saraelsharkawi1@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-900"
          >
            <Mail size={17} /> Email me
          </a>
          <a href="https://www.linkedin.com/in/sara-mahmoud-b30895320/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-bold"><Linkedin size={17} /> LinkedIn</a>
        </div>
      </div>
    </div>
    <footer className="flex flex-col justify-between gap-3 py-8 text-xs text-slate-600 sm:flex-row">
      <span>© {new Date().getFullYear()} Sara Elsharkawy</span><span>Built with React & Tailwind CSS</span>
    </footer>
  </section>;
}

function App() {
  return <><Navbar /><main><Hero /><About /><Projects /><Skills /><Contact /></main></>;
}

createRoot(document.getElementById("root")).render(<App />);
