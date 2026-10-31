"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Code2, Github, Globe2, Layers3, Linkedin, Mail, Menu, X } from "lucide-react";

const projects = [
  { number:"01", name:"Ìròyìn", type:"AI-powered news experience", year:"2026", description:"A multilingual reporting experience built to make news feel closer to the people reading it. Switch between English, Nigerian Pidgin and Yoruba.", contribution:"Product thinking · Frontend · AI integration", stack:["Next.js","Tailwind CSS","Sahara AI","Groq"], url:"https://iroyin.vercel.app/", repo:"https://github.com/Rolexcode/iroyin", preview:"https://iroyin.vercel.app/", visual:"iroyin" },
  { number:"02", name:"CampusGig", type:"Student gig marketplace", year:"2026", description:"A marketplace concept connecting students to flexible work, with gig discovery, applications, messaging and a Solana USDC payment flow.", contribution:"Full-stack development · Product build", stack:["Next.js","TypeScript","Solana","USDC"], url:"https://campusgig.ghostsol.fun", repo:"", preview:"https://campusgig.ghostsol.fun", visual:"campus" },
  { number:"03", name:"ZenGuard", type:"Autonomous on-chain agent", year:"2026", description:"An experimental Telegram-based agent exploring how conversational interfaces can connect to autonomous on-chain actions.", contribution:"Agent workflow · Blockchain integration", stack:["Telegram","Base","AI agents","Web3"], url:"https://t.me/zerionautonomousbot", repo:"https://github.com/Rolexcode/zerion-ai", preview:"", visual:"zenguard" }
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
  const [menuOpen,setMenuOpen] = useState(false);
  const [copied,setCopied] = useState(false);
  async function copyEmail() {
    try { await navigator.clipboard.writeText("olaleyeolabodejeremiah@gmail.com"); setCopied(true); window.setTimeout(()=>setCopied(false),1800); }
    catch { window.location.href="mailto:olaleyeolabodejeremiah@gmail.com"; }
  }
  return <main><div className="site-shell">
    <header className="topbar">
      <a className="wordmark" href="#top" aria-label="Rolex home"><span className="wordmark-symbol">r.</span><span>ROLEX<span className="wordmark-period">/</span>CODE</span></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} onClick={()=>setMenuOpen(v=>!v)}>{menuOpen?<X size={20}/>:<Menu size={20}/>}</button>
      <nav className={menuOpen?"nav-links nav-open":"nav-links"}>
        <a href="#work" onClick={()=>setMenuOpen(false)}>Work</a><a href="#services" onClick={()=>setMenuOpen(false)}>What I do</a><a href="#about" onClick={()=>setMenuOpen(false)}>About</a>
        <a className="nav-contact" href="#contact" onClick={()=>setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={14}/></a>
      </nav>
    </header>

    <section className="hero" id="top">
      <div className="hero-kicker"><span className="status-dot"/><span>AVAILABLE FOR SELECT PROJECTS & OPPORTUNITIES</span></div>
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow">FULL-STACK DEVELOPER & DIGITAL PRODUCT BUILDER</p>
          <h1>I turn ideas<br/>into <span className="serif-word">useful</span><br/>digital things<span className="accent-dot">.</span></h1>
          <div className="hero-bottom"><p className="hero-description">I design and build websites, web applications and digital products — bringing thoughtful interfaces and reliable engineering together.</p><a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDown size={20}/></a></div>
        </div>
      </div>
      <div className="hero-meta"><span>INDEPENDENT DEVELOPER</span><span className="meta-center">DESIGN-MINDED. ENGINEERING-LED.</span><span>SCROLL TO EXPLORE <ArrowDownRight size={13}/></span></div>
    </section>

    <section className="intro-strip"><p>Good digital products don&apos;t happen by accident. They come from understanding the problem, caring about the details and building with intention.</p><span className="strip-index">A NOTE ON HOW I WORK&nbsp; ↘</span></section>

    <section className="work-section section-pad" id="work">
      <div className="section-heading"><div><p className="eyebrow">A FEW THINGS I&apos;VE BEEN BUILDING</p><h2>Selected <span className="serif-word">work</span><span className="accent-dot">.</span></h2></div><p className="section-aside">A selection of products and experiments shaped by real problems, curiosity and a bias toward making.</p></div>
      <div className="project-list">{projects.map(project=><article className="project" key={project.number}>
        <div className="project-topline"><span>{project.number} / SELECTED PROJECT</span><span>{project.year}</span></div>
        <div className="project-grid">
          <div className={"project-visual project-live-visual "+project.visual}>
            {project.preview ? <><iframe src={project.preview} title={project.name+" live website preview"} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" sandbox="allow-forms allow-scripts allow-same-origin allow-popups"/><a className="visual-open-link" href={project.url} target="_blank" rel="noreferrer">OPEN LIVE PROJECT <ArrowUpRight size={13}/></a></> : <div className="project-native-preview"><span className="native-preview-label">NOT A WEBSITE</span><h4>Built to work<br/><em>inside Telegram.</em></h4><p>ZenGuard is an autonomous agent experience. Explore the live bot directly.</p><a href={project.url} target="_blank" rel="noreferrer">OPEN TELEGRAM BOT <ArrowUpRight size={14}/></a></div>}
          </div>
          <div className="project-info"><div className="project-title-row"><div><p className="project-type">{project.type}</p><h3>{project.name}</h3></div><span className="project-arrow"><ArrowUpRight size={22}/></span></div>
            <p className="project-description">{project.description}</p><p className="project-role">{project.contribution}</p>
            <div className="tag-list">{project.stack.map(tag=><span key={tag}>{tag}</span>)}</div>
            <div className="project-actions">
              <ArrowLink href={project.url} external>{project.preview ? "Open live project" : "Open Telegram bot"}</ArrowLink>{project.repo&&<ArrowLink href={project.repo} external>Source code</ArrowLink>}
            </div>
          </div>
        </div>
      </article>)}</div>
      <div className="work-footnote"><span>MORE IN PROGRESS</span><span>I&apos;M ALWAYS BUILDING, TESTING AND LEARNING.</span></div>
    </section>

    <section className="services-section section-pad" id="services">
      <div className="section-heading"><div><p className="eyebrow">FROM FIRST IDEA TO SHIPPED PRODUCT</p><h2>What I <span className="serif-word">do</span><span className="accent-dot">.</span></h2></div><p className="section-aside">I work across the layers of a digital product, with a focus on making the experience coherent from front to back.</p></div>
      <div className="capability-grid">{capabilities.map((item,index)=>{const Icon=item.icon;return <article className="capability" key={item.title}><div className="capability-top"><span>0{index+1}</span><Icon size={22} strokeWidth={1.5}/></div><h3>{item.title}</h3><p>{item.text}</p><span className="capability-rule"/></article>;})}</div>
      <div className="services-note"><span>HOW I CAN HELP</span><p>Business websites · Landing pages · Web applications · Dashboards · API integrations · AI-powered features</p></div>
    </section>

    <section className="about-section section-pad" id="about">
      <div className="about-label"><p className="eyebrow">A LITTLE ABOUT ME</p><span className="about-number">04 / THE PERSON BEHIND THE SCREEN</span></div>
      <div className="about-content"><h2>Curious by nature.<br/><span className="serif-word">Intentional</span> by practice.</h2>
        <div className="about-columns"><p>I&apos;m Olabode Olaleye — a developer who enjoys turning complex ideas into clear, useful digital experiences. I care about how a product works, but also how it feels to use.</p><p>My approach is shaped by both engineering and design thinking: understand the people, make the problem smaller, sweat the details, then keep improving what ships.</p></div>
        <div className="toolkit"><span className="toolkit-label">CURRENT TOOLKIT</span><div className="toolkit-tags">{["JavaScript","TypeScript","React","Next.js","Node.js","Tailwind CSS","PostgreSQL","Git","Solana","AI integrations"].map(item=><span key={item}>{item}</span>)}</div></div>
        <div className="about-links"><ArrowLink href="https://github.com/Rolexcode" external>GitHub profile</ArrowLink><ArrowLink href="https://www.linkedin.com/in/olabode-olaleye-62290124" external>LinkedIn</ArrowLink></div>
      </div>
    </section>

    <section className="contact-section section-pad" id="contact">
      <div className="contact-top"><p className="eyebrow">HAVE A GOOD ONE IN MIND?</p><span>05 / CONTACT</span></div>
      <h2>Let&apos;s make<br/><span className="serif-word">something</span><br/>matter<span className="accent-dot">.</span></h2>
      <div className="contact-bottom"><p>Have a project, an opportunity or an interesting problem to solve? I&apos;d like to hear about it.</p><button className="email-button" type="button" onClick={copyEmail}>{copied?<><Check size={17}/> EMAIL COPIED</>:<>OLALEYEOLABODEJEREMIAH@GMAIL.COM <ArrowUpRight size={17}/></>}</button></div>
    </section>

    <footer className="footer"><a className="wordmark footer-mark" href="#top"><span className="wordmark-symbol">r.</span><span>ROLEX<span className="wordmark-period">/</span>CODE</span></a><span className="footer-note">THOUGHTFULLY BUILT IN LAGOS, NIGERIA.</span><div className="footer-socials"><a href="https://github.com/Rolexcode" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href="https://www.linkedin.com/in/olabode-olaleye-62290124" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="mailto:olaleyeolabodejeremiah@gmail.com" aria-label="Email"><Mail size={17}/></a></div><span className="copyright">© 2026</span></footer>
  </div></main>;
}