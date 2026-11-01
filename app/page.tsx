"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Check, Code2, Github, Globe2, Layers3, Linkedin, Mail, Menu, X } from "lucide-react";

const projects = [
  { number:"01", name:"Ìròyìn", type:"AI-powered news experience", year:"2026", description:"A multilingual reporting experience built to make news feel closer to the people reading it. Switch between English, Nigerian Pidgin and Yoruba.", contribution:"Product thinking · Frontend · AI integration", stack:["Next.js","Tailwind CSS","Sahara AI","Groq"], url:"https://iroyin.vercel.app/", repo:"https://github.com/Rolexcode/iroyin", preview:"https://iroyin.vercel.app/", visual:"iroyin", highlight:"Switch between English, Nigerian Pidgin and Yoruba." },
  { number:"02", name:"CampusGig", type:"Student gig marketplace", year:"2026", description:"A marketplace concept connecting students to flexible work, with gig discovery, applications, messaging and a Solana USDC payment flow.", contribution:"Full-stack development · Product build", stack:["Next.js","TypeScript","Solana","USDC"], url:"https://campus-gigtit6.vercel.app/", repo:"", preview:"https://campus-gigtit6.vercel.app/", visual:"campus", highlight:"Gig discovery, applications, messaging and USDC payments." },
  { number:"03", name:"Nexus", type:"Campus intelligence platform", year:"2026", description:"A campus platform for discovering places and services, reporting real-world issues, verifying community reports and tracking the response from report to resolution.", contribution:"Product design · Full-stack development · Mapping & geospatial features", stack:["Next.js","TypeScript","Leaflet","Firebase","Cloud Firestore"], url:"https://github.com/Rolexcode/nexus", repo:"https://github.com/Rolexcode/nexus", preview:"https://nexus-rho-blond.vercel.app/", visual:"nexus", highlight:"Community reports with a clear path to resolution." },
  { number:"04", name:"ZenGuard", type:"Zerion hackathon build · On-chain portfolio agent", year:"2026", description:"Built for the Zerion hackathon, ZenGuard is a Telegram-based agent that monitors portfolio positions and can execute policy-scoped stop-loss and take-profit actions on Base.", contribution:"AI agent development · On-chain automation · Base integration", stack:["Telegram","Base","AI agents","Web3"], url:"https://t.me/ZerionAutonomousBot", repo:"https://github.com/Rolexcode/zerion-ai", preview:"", visual:"zenguard", highlight:"Policy-scoped stop-loss and take-profit actions on Base." }
];
const capabilities = [
  {title:"Web experiences",text:"Responsive websites, landing pages and interfaces that make a clear first impression.",icon:Globe2},
  {title:"Full-stack products",text:"Web apps, dashboards and the backend logic that makes them useful.",icon:Layers3},
  {title:"AI & integrations",text:"Practical AI features, APIs, payment flows and connected services.",icon:Code2}
];

function ArrowLink({href,children,external=false}:{href:string;children:React.ReactNode;external?:boolean}) {
  return <a className="arrow-link" href={href} target={external?"_blank":undefined} rel={external?"noreferrer":undefined}>{children} <ArrowUpRight size={15} strokeWidth={1.8}/></a>;
}

export default function Home() {
  const [menuOpen,setMenuOpen] = useState(false);\n  const [introVisible,setIntroVisible] = useState(true);\n  useEffect(()=>{ const timer=window.setTimeout(()=>setIntroVisible(false),2200); return ()=>window.clearTimeout(timer); },[]);
  const [copied,setCopied] = useState(false);
  async function copyEmail() {
    try { await navigator.clipboard.writeText("olaleyeolabodejeremiah@gmail.com"); setCopied(true); window.setTimeout(()=>setCopied(false),1800); }
    catch { window.location.href="mailto:olaleyeolabodejeremiah@gmail.com"; }
  }
  return <main><div className={introVisible?"site-shell site-entering":"site-shell"}>{introVisible&&<div className="intro-loader" aria-label="Introduction"><div className="loader-terminal"><div className="loader-chrome"><span></span><span></span><span></span><small>ROLEX / PORTFOLIO</small></div><p className="loader-prompt"><span>~</span> whoami</p><p className="loader-typing">Hi, I&apos;m Rolex<span className="typing-cursor">_</span></p><p className="loader-foot">FULL-STACK DEVELOPER <span>·</span> DIGITAL PRODUCT BUILDER</p></div></div>}
    <header className="topbar">
      <a className="wordmark" href="#top" aria-label="Rolex home"><span className="wordmark-symbol">r.</span><span className="wordmark-name">ROLEX<span className="wordmark-code-mark">&lt;/&gt;</span>CODE</span></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} onClick={()=>setMenuOpen(v=>!v)}>{menuOpen?<X size={20}/>:<Menu size={20}/>}</button>
      <nav className={menuOpen?"nav-links nav-open":"nav-links"}>
        <a href="#work" onClick={()=>setMenuOpen(false)}>Work</a><a href="#services" onClick={()=>setMenuOpen(false)}>What I do</a><a href="#about" onClick={()=>setMenuOpen(false)}>About</a>
        <a className="nav-contact" href="#contact" onClick={()=>setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={14}/></a>
      </nav>
    </header>

    <section className="hero" id="top">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow">FULL-STACK DEVELOPER & DIGITAL PRODUCT BUILDER</p>
          <h1>I build<br/><span className="serif-word">products</span><span className="accent-dot">.</span></h1>
          <div className="hero-bottom"><p className="hero-description">I turn ideas into working digital products — shaping the experience, building the system and taking the whole thing through to launch.</p><a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDown size={20}/></a></div>
        </div>
      </div>
    </section>

    <section className="intro-strip"><p>You bring the idea. I’ll help turn it into a product people can actually use — from the first screen to the logic, integrations and details that make it work.</p><span className="strip-index">FROM IDEA TO LIVE PRODUCT&nbsp; ↘</span></section>

    <section className="work-section section-pad" id="work">
      <div className="section-heading"><div><p className="eyebrow">A FEW BUILDS</p><h2>Some of my <span className="serif-word">work</span><span className="accent-dot">.</span></h2></div><p className="section-aside">A look at what I’ve been making.</p></div>
      <div className="project-list">{projects.map(project=><article className="project" key={project.number}>
        <div className="project-topline"><span>SELECTED WORK</span><span>{project.year}</span></div>
        <div className="project-grid">
          <div className={"project-visual project-live-visual "+project.visual}>\n            <span className="preview-kind">{project.preview ? "LIVE SITE PREVIEW" : "PROJECT SNAPSHOT"}</span>
            {project.preview ? <><iframe src={project.preview} title={project.name+" live website preview"} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" sandbox="allow-forms allow-scripts allow-same-origin allow-popups"/><a className="visual-open-link" href={project.url} target="_blank" rel="noreferrer">OPEN LIVE PROJECT <ArrowUpRight size={13}/></a></> : project.visual === "nexus" ? <div className="project-native-preview"><span className="native-preview-label">CAMPUS INTELLIGENCE / LASU EPE</span><h4>See the issue.<br/><em>Track the response.</em></h4><p>Campus discovery, verified incident reports and a transparent path from report to resolution.</p><a href={project.repo} target="_blank" rel="noreferrer">EXPLORE THE BUILD <ArrowUpRight size={14}/></a></div> : <div className="project-native-preview"><span className="native-preview-label">ZERION HACKATHON BUILD</span><h4>Portfolio watch.<br/><em>On-chain action.</em></h4><p>A Telegram agent that monitors positions and acts on preset risk rules on Base.</p><a href={project.url} target="_blank" rel="noreferrer">LAUNCH ZENGUARD ON TELEGRAM <ArrowUpRight size={14}/></a></div>}
          </div>
          <div className="project-info"><div className="project-title-row"><div><p className="project-type">{project.type}</p><h3>{project.name}</h3></div><span className="project-arrow"><ArrowUpRight size={22}/></span></div>
            <p className="project-description">{project.description}</p><div className="project-highlight"><span>KEY FEATURE</span><p>{project.highlight}</p></div><p className="project-role">{project.contribution}</p>
            <div className="tag-list">{project.stack.map(tag=><span key={tag}>{tag}</span>)}</div>
            <div className="project-actions">
              <ArrowLink href={project.url} external>{project.visual === "nexus" ? "Explore project" : project.preview ? "Open live project" : "Launch ZenGuard on Telegram"}</ArrowLink>{project.repo&&<ArrowLink href={project.repo} external>Source code</ArrowLink>}
            </div>
          </div>
        </div>
      </article>)}</div>
    </section>

    <section className="services-section section-pad" id="services">
      <div className="section-heading"><div><p className="eyebrow">FROM FIRST IDEA TO SHIPPED PRODUCT</p><h2>What I <span className="serif-word">do</span><span className="accent-dot">.</span></h2></div><p className="section-aside">I work across the layers of a digital product, with a focus on making the experience coherent from front to back.</p></div>
      <div className="capability-grid">{capabilities.map((item,index)=>{const Icon=item.icon;return <article className="capability" key={item.title}><div className="capability-top"><Icon size={22} strokeWidth={1.5}/></div><h3>{item.title}</h3><p>{item.text}</p><span className="capability-rule"/></article>;})}</div>
      <div className="services-note"><span>HOW I CAN HELP</span><p>Business websites · Landing pages · Web applications · Dashboards · API integrations · AI-powered features</p></div>
    </section>

    <section className="about-section section-pad" id="about">
      <div className="about-label"><p className="eyebrow">A LITTLE ABOUT ME</p><span className="about-number">THE PERSON BEHIND THE SCREEN</span></div>
      <div className="about-content"><h2>Curious by nature.<br/><span className="serif-word">Intentional</span> by practice.</h2>
        <div className="about-columns"><p>I&apos;m Olabode Olaleye. I build websites and software, and I enjoy being involved beyond the screen — understanding what needs to work, making the pieces fit and taking the build through to launch.</p><p>I pay attention to the details people notice and the ones they don&apos;t: the flow through a page, the logic behind a feature, and whether the whole thing holds together when it&apos;s live.</p></div>
        <div className="about-links"><ArrowLink href="https://github.com/Rolexcode" external>GitHub profile</ArrowLink><ArrowLink href="https://www.linkedin.com/in/olabode-olaleye-62290124b" external>LinkedIn</ArrowLink></div>
      </div>
    </section>

    <section className="contact-section section-pad" id="contact">
      <div className="contact-top"><p className="eyebrow">HAVE A GOOD ONE IN MIND?</p><span>CONTACT</span></div>
      <h2>Let&apos;s make<br/><span className="serif-word">something</span><br/>matter<span className="accent-dot">.</span></h2>
      <div className="contact-bottom"><p>Have a project, an opportunity or an interesting problem to solve? I&apos;d like to hear about it.</p><button className="email-button" type="button" onClick={copyEmail}>{copied?<><Check size={17}/> EMAIL COPIED</>:<>OLALEYEOLABODEJEREMIAH@GMAIL.COM <ArrowUpRight size={17}/></>}</button></div>
    </section>

    <footer className="footer"><a className="wordmark footer-mark" href="#top"><span className="wordmark-symbol">r.</span><span className="wordmark-name">ROLEX<span className="wordmark-code-mark">&lt;/&gt;</span>CODE</span></a><span className="footer-note"></span><div className="footer-socials"><a href="https://github.com/Rolexcode" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href="https://www.linkedin.com/in/olabode-olaleye-62290124b" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="mailto:olaleyeolabodejeremiah@gmail.com" aria-label="Email"><Mail size={17}/></a></div><span className="copyright">© 2026</span></footer>
  </div></main>;
}