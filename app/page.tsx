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
  const [menuOpen,setMenuOpen] = useState(false);
  const [showLoader,setShowLoader] = useState(true);
  useEffect(() => { const timer = window.setTimeout(() => setShowLoader(false), 6900); return () => window.clearTimeout(timer); }, []);
  const [copied,setCopied] = useState(false);
  async function copyEmail() {
    try { await navigator.clipboard.writeText("olaleyeolabodejeremiah@gmail.com"); setCopied(true); window.setTimeout(()=>setCopied(false),1800); }
    catch { window.location.href="mailto:olaleyeolabodejeremiah@gmail.com"; }
  }
  return <main>{showLoader && <div className="intro-loader" role="status" aria-label="Opening portfolio"><div className="terminal-scene">
<div className="scene-top"><span>ROLEX@DEVROLEX</span><span>AN IDEA BECOMES REAL</span></div>
<div className="scene-center"><p className="scene-overline">A QUICK LOOK BEHIND THE BUILD</p><div className="terminal-screen">
<div className="terminal-heading"><span>~/devrolex</span><span>zsh — 80×24</span></div>
<div className="terminal-body">
<p className="terminal-line line-one"><span className="terminal-prompt">rolex@devrolex %</span> <span className="typed typed-one">whoami</span></p>
<p className="terminal-output line-two">Olabode Olaleye <span className="terminal-dim">— developer & builder</span></p>
<p className="terminal-line line-three"><span className="terminal-prompt">rolex@devrolex %</span> <span className="typed typed-two">what_do_you_do</span></p>
<p className="terminal-output line-four">I turn ideas into working digital products.</p>
<p className="terminal-line line-five"><span className="terminal-prompt">rolex@devrolex %</span> <span className="typed typed-three">start_with_an_idea</span></p>
<p className="terminal-output line-six"><span className="terminal-ok">→</span> shaping the experience</p>
<p className="terminal-output line-seven"><span className="terminal-ok">→</span> building what makes it work</p>
<p className="terminal-output line-eight"><span className="terminal-ok">→</span> getting it out into the world</p>
<p className="terminal-line line-nine"><span className="terminal-prompt">rolex@devrolex %</span> <span className="typed typed-four">open /portfolio</span><span className="terminal-caret"></span></p>
</div>
</div><p className="scene-endline">GOOD IDEAS DESERVE TO BE BUILT.</p></div>
<div className="scene-bottom"><span>IDEA <i>→</i> EXPERIENCE <i>→</i> PRODUCT</span><span className="scene-live"><i></i> SESSION READY</span></div>
</div></div>}<div className={showLoader?"site-shell site-entering":"site-shell"}>
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
          <p className="eyebrow">GOT AN IDEA? LET’S TALK ABOUT IT.</p>
          <h1>Let&apos;s bring<br/><span className="serif-word">it to life</span><span className="accent-dot">.</span></h1>
          <div className="hero-bottom"><p className="hero-description">Whatever you&apos;re imagining, I can help turn it into something real — from the first sketch of an idea to a finished digital product people can use.</p><a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDown size={20}/></a></div>

        </div>
      </div>
    </section>

    <section className="intro-strip"><p>You bring the idea. We&apos;ll work out what it needs, shape how it should feel, and build the thing that makes it happen.</p><span className="strip-index">LET&apos;S MAKE IT REAL&nbsp; ↘</span></section>

    <section className="work-section section-pad" id="work">
      <div className="section-heading"><div><p className="eyebrow">IDEAS I&apos;VE HELPED MAKE REAL</p><h2>Here&apos;s what I&apos;ve <span className="serif-word">built</span><span className="accent-dot">.</span></h2></div><p className="section-aside">Different ideas, different challenges. Each one started with a problem worth solving.</p></div>
      <div className="project-list">{projects.map(project=><article className="project" id={"project-"+project.visual} key={project.number}>
        <div className="project-topline"><span>MADE REAL</span><span>{project.year}</span></div>
        <div className="project-grid">
          <div className={"project-visual project-live-visual "+project.visual}>
            <span className="preview-kind">{project.preview ? "LIVE SITE PREVIEW" : "PROJECT SNAPSHOT"}</span>
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
      <div className="section-heading"><div><p className="eyebrow">HERE&apos;S HOW I CAN HELP</p><h2>What we can <span className="serif-word">make</span><span className="accent-dot">.</span></h2></div><p className="section-aside">From the part people see to the systems working underneath, I can take on the pieces that turn an idea into a useful product.</p></div>
      <div className="capability-grid">{capabilities.map((item,index)=>{const Icon=item.icon;return <article className="capability" key={item.title}><div className="capability-top"><Icon size={22} strokeWidth={1.5}/></div><h3>{item.title}</h3><p>{item.text}</p><span className="capability-rule"/></article>;})}</div>
      <div className="services-note"><span>THINGS WE COULD BUILD</span><p>Business websites · Landing pages · Web apps · Dashboards · AI features · Payment flows · API integrations</p></div>
    </section>

    <section className="about-section section-pad" id="about">
      <div className="about-label"><p className="eyebrow">A LITTLE ABOUT ME</p><span className="about-number">THE PERSON YOU&apos;LL BUILD WITH</span></div>
      <div className="about-content"><h2>I like turning<br/><span className="serif-word">what if</span> into what&apos;s next.</h2>
        <div className="about-columns"><p>I&apos;m Olabode Olaleye, a full-stack developer. I like getting into the details of an idea, figuring out what it needs, and building the experience and technology that bring it to life.</p><p>I can work across the whole process — the interface, the backend, integrations and the little decisions that make a product feel considered and work the way it should.</p></div>
        <div className="about-links"><ArrowLink href="https://github.com/Rolexcode" external>GitHub profile</ArrowLink><ArrowLink href="https://www.linkedin.com/in/olabode-olaleye-62290124b" external>LinkedIn</ArrowLink></div>
      </div>
    </section>

    <section className="contact-section section-pad" id="contact">
      <div className="contact-top"><p className="eyebrow">SO, WHAT ARE YOU THINKING?</p><span>YOUR IDEA STARTS HERE</span></div>
      <h2>Tell me<br/><span className="serif-word">about it</span><span className="accent-dot">.</span></h2>
      <div className="contact-bottom"><p>A rough idea, a clear brief or just a problem you want solved — tell me about it. Let&apos;s figure out what we can make.</p><button className="email-button" type="button" onClick={copyEmail}>{copied?<><Check size={17}/> EMAIL COPIED</>:<>OLALEYEOLABODEJEREMIAH@GMAIL.COM <ArrowUpRight size={17}/></>}</button></div>
    </section>

    <footer className="footer"><a className="wordmark footer-mark" href="#top"><span className="wordmark-symbol">r.</span><span className="wordmark-name">ROLEX<span className="wordmark-code-mark">&lt;/&gt;</span>CODE</span></a><span className="footer-note"></span><div className="footer-socials"><a href="https://github.com/Rolexcode" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href="https://www.linkedin.com/in/olabode-olaleye-62290124b" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="mailto:olaleyeolabodejeremiah@gmail.com" aria-label="Email"><Mail size={17}/></a></div><span className="copyright">© 2026</span></footer>
  </div></main>;
}