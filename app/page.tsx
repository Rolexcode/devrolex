"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Github, Linkedin, Mail, Menu, X } from "lucide-react";

const projects = [
  { name:"Ìròyìn", type:"AI-powered news experience", year:"2026", description:"A multilingual reporting experience built to make news feel closer to the people reading it. Switch between English, Nigerian Pidgin and Yoruba.", role:"Product thinking · Frontend · AI integration", stack:"Next.js · Tailwind CSS · Sahara AI · Groq", url:"https://iroyin.vercel.app/", repo:"https://github.com/Rolexcode/iroyin", preview:"https://iroyin.vercel.app/", note:"News, in the language that feels like home." },
  { name:"CampusGig", type:"Student gig marketplace", year:"2026", description:"A marketplace connecting students to flexible work, with gig discovery, applications, messaging and a Solana USDC payment flow.", role:"Full-stack development · Product build", stack:"Next.js · TypeScript · Solana · USDC", url:"https://campus-gigtit6.vercel.app/", repo:"", preview:"https://campus-gigtit6.vercel.app/", note:"Making student talent easier to find and hire." },
  { name:"Nexus", type:"Campus intelligence platform", year:"2026", description:"A campus platform for discovering places and services, reporting real-world issues, verifying community reports and tracking the response from report to resolution.", role:"Product design · Full-stack development · Mapping", stack:"Next.js · TypeScript · Leaflet · Firebase", url:"https://nexus-rho-blond.vercel.app/", repo:"https://github.com/Rolexcode/nexus", preview:"https://nexus-rho-blond.vercel.app/", note:"A clearer picture of what's happening on campus." },
  { name:"ZenGuard", type:"On-chain portfolio agent", year:"2026", description:"Built for the Zerion hackathon, ZenGuard is a Telegram-based agent that monitors portfolio positions and can execute policy-scoped stop-loss and take-profit actions on Base.", role:"AI agent development · On-chain automation", stack:"Telegram · Base · AI agents · Web3", url:"https://t.me/ZerionAutonomousBot", repo:"https://github.com/Rolexcode/zerion-ai", preview:"", note:"Portfolio monitoring with actions governed by your rules." }
];

const chapters = ["Cover","Selected work","CampusGig","Nexus","About","Contact"];

function ExternalLink({href,children}:{href:string;children:React.ReactNode}) {
  return <a className="book-link" href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={14}/></a>;
}

export default function Home() {
  const [page,setPage] = useState(0);
  const [direction,setDirection] = useState<"next"|"prev">("next");
  const [showLoader,setShowLoader] = useState(true);
  const [copied,setCopied] = useState(false);
  const [menuOpen,setMenuOpen] = useState(false);
  useEffect(() => { const timer=window.setTimeout(()=>setShowLoader(false),6900); return ()=>window.clearTimeout(timer); }, []);
  useEffect(() => {
    function onKey(e:KeyboardEvent) {
      if(e.key==="ArrowRight" || e.key==="PageDown"){e.preventDefault();turn(1);}
      if(e.key==="ArrowLeft" || e.key==="PageUp"){e.preventDefault();turn(-1);}
    }
    window.addEventListener("keydown",onKey);
    return ()=>window.removeEventListener("keydown",onKey);
  });
  function turn(step:number){setDirection(step>0?"next":"prev");setPage(p=>Math.max(0,Math.min(chapters.length-1,p+step)));}
  async function copyEmail(){try{await navigator.clipboard.writeText("olaleyeolabodejeremiah@gmail.com");setCopied(true);window.setTimeout(()=>setCopied(false),1800);}catch{window.location.href="mailto:olaleyeolabodejeremiah@gmail.com";}}
  const activeProject = page===1 ? projects[0] : page===2 ? projects[1] : page===3 ? projects[2] : null;
  return <main className="book-site">
    {showLoader && <div className="intro-loader" role="status" aria-label="Opening portfolio"><div className="terminal-scene">
      <div className="scene-top"><span>ROLEX@DEVROLEX</span><span>AN IDEA BECOMES REAL</span></div>
      <div className="scene-center"><p className="scene-overline">A QUICK LOOK BEHIND THE BUILD</p><div className="terminal-screen">
        <div className="terminal-heading"><span>~/devrolex</span><span>zsh — 80×24</span></div><div className="terminal-body">
          <p className="terminal-line line-one"><span className="terminal-prompt">rolex@devrolex %</span> <span className="typed typed-one">whoami</span></p>
          <p className="terminal-output line-two">Olabode Olaleye <span className="terminal-dim">— developer & builder</span></p>
          <p className="terminal-line line-three"><span className="terminal-prompt">rolex@devrolex %</span> <span className="typed typed-two">what_do_you_do</span></p>
          <p className="terminal-output line-four">I turn ideas into working digital products.</p>
          <p className="terminal-line line-five"><span className="terminal-prompt">rolex@devrolex %</span> <span className="typed typed-three">start_with_an_idea</span></p>
          <p className="terminal-output line-six"><span className="terminal-ok">→</span> shaping the experience</p>
          <p className="terminal-output line-seven"><span className="terminal-ok">→</span> building what makes it work</p>
          <p className="terminal-output line-eight"><span className="terminal-ok">→</span> getting it out into the world</p>
          <p className="terminal-line line-nine"><span className="terminal-prompt">rolex@devrolex %</span> <span className="typed typed-four">open /portfolio</span><span className="terminal-caret"></span></p>
        </div></div><p className="scene-endline">GOOD IDEAS DESERVE TO BE BUILT.</p></div>
      <div className="scene-bottom"><span>IDEA <i>→</i> EXPERIENCE <i>→</i> PRODUCT</span><span className="scene-live"><i></i> SESSION READY</span></div>
    </div></div>}
    <div className={showLoader?"book-shell book-entering":"book-shell"}>
      <header className="book-header"><a className="book-brand" href="#" onClick={e=>{e.preventDefault();setPage(0);}}>ROLEX<span>&lt;/&gt;</span>CODE</a><div className="book-header-right"><span>AN INTERACTIVE PORTFOLIO</span><button className="book-menu" onClick={()=>setMenuOpen(v=>!v)} aria-label="Toggle contents">{menuOpen?<X size={17}/>:<Menu size={17}/>}</button></div></header>
      {menuOpen&&<nav className="book-contents">{chapters.map((name,i)=><button key={name} onClick={()=>{setDirection(i>page?"next":"prev");setPage(i);setMenuOpen(false);}}><span>0{i+1}</span>{name}</button>)}</nav>}
      <section className="book-stage" aria-label="Portfolio book">
        <div className={"book-spread "+(direction==="next"?"turn-next":"turn-prev")} key={page}>
          <div className="book-page book-left">
            {page===0&&<div className="cover-left"><span className="folio-label">A COLLECTION OF DIGITAL WORK</span><div className="cover-monogram">r<span>.</span></div><span className="cover-small">OLABODE OLALEYE<br/>FULL-STACK DEVELOPER</span></div>}
            {page===1&&<div className="page-note"><span className="folio-label">CHAPTER 01 / SELECTED WORK</span><h2>Here are some<br/>of my <em>works.</em></h2><p>Different ideas. Different challenges. Each one started with a problem worth solving.</p><span className="page-ornament">✳</span></div>}
            {page===2&&<div className="page-note"><span className="folio-label">CHAPTER 02 / PRODUCT BUILD</span><h2>From campus<br/>to <em>opportunity.</em></h2><p>Making it easier for students to find work, and for people to find the talent around them.</p><span className="page-ornament">02 — 04</span></div>}
            {page===3&&<div className="page-note"><span className="folio-label">CHAPTER 03 / COMMUNITY SYSTEMS</span><h2>See what's<br/>happening. <em>Act.</em></h2><p>Tools that turn scattered information into something people can understand and use.</p><span className="page-ornament">03 — 04</span></div>}
            {page===4&&<div className="page-note"><span className="folio-label">A LITTLE ABOUT ME</span><h2>Curious by<br/>nature. <em>Builder</em><br/><em>by choice.</em></h2><p>I like getting into the details of an idea, figuring out what it needs, and building the experience and technology that bring it to life.</p><span className="page-ornament">LAGOS / ONLINE</span></div>}
            {page===5&&<div className="page-note"><span className="folio-label">THE LAST PAGE IS A START</span><h2>Have something<br/>in <em>mind?</em></h2><p>A rough idea, a clear brief or a problem you want solved. I'd like to hear about it.</p><span className="page-ornament">LET'S MAKE IT REAL ↗</span></div>}
          </div>
          <div className="book-page book-right">
            {page===0&&<div className="cover-right"><span className="cover-edition">PORTFOLIO / 2026</span><h1>Ideas<br/>made <em>real.</em></h1><p>Thoughtful digital experiences, useful products and the technology behind them.</p><div className="cover-bottom"><span>OPEN TO EXPLORE</span><span>VOL. 01</span></div><div className="cover-seal">R<br/><i>✳</i><br/>C</div></div>}
            {activeProject&&<div className="project-page">
              <div className="project-page-top"><span>{activeProject.type}</span><span>{activeProject.year} / 0{page}</span></div>
              <h2>{activeProject.name}<span>.</span></h2><p className="project-page-note">{activeProject.note}</p>
              <div className="book-preview">{activeProject.preview?<iframe src={activeProject.preview} title={activeProject.name+" preview"} loading="lazy" sandbox="allow-forms allow-scripts allow-same-origin allow-popups"/>:<div className="zenguard-art"><span>ZEN GUARD / BASE</span><strong>WATCH<br/><em>THE POSITION.</em></strong><small>POLICY-BASED ON-CHAIN AUTOMATION</small></div>}</div>
              <p className="project-page-description">{activeProject.description}</p>
              <div className="project-page-meta"><span>{activeProject.role}</span><span>{activeProject.stack}</span></div>
              <div className="project-page-links"><ExternalLink href={activeProject.url}>Visit project</ExternalLink>{activeProject.repo&&<ExternalLink href={activeProject.repo}>Source code</ExternalLink>}</div>
            </div>}
            {page===4&&<div className="about-page"><span className="folio-label">HOW I LIKE TO WORK</span><h2>From the first<br/>thought to the<br/><em>finished thing.</em></h2><div className="about-copy"><p>I'm Olabode Olaleye, a full-stack developer. I work across the interface, backend, integrations and the details that make a product feel considered.</p><p>Websites and landing pages. Full-stack applications. AI features, APIs and payment integrations.</p></div><div className="book-socials"><ExternalLink href="https://github.com/Rolexcode">GitHub</ExternalLink><ExternalLink href="https://www.linkedin.com/in/olabode-olaleye-62290124b">LinkedIn</ExternalLink></div></div>}
            {page===5&&<div className="contact-page"><span className="folio-label">LET'S START A CONVERSATION</span><h2>Tell me<br/><em>about it.</em></h2><p>Let's figure out what we can make together.</p><button className="book-email" onClick={copyEmail}>{copied?<><Check size={15}/> EMAIL COPIED</>:<>OLALEYEOLABODEJEREMIAH@GMAIL.COM <ArrowUpRight size={15}/></>}</button><a className="contact-direct" href="mailto:olaleyeolabodejeremiah@gmail.com"><Mail size={15}/> Send an email</a></div>}
          </div>
        </div>
      </section>
      <footer className="book-controls"><div className="book-progress"><span>0{page+1}</span><div>{chapters.map((_,i)=><button aria-label={"Go to "+chapters[i]} key={i} className={i===page?"active":""} onClick={()=>{setDirection(i>page?"next":"prev");setPage(i);}}/>)}</div><span>0{chapters.length}</span></div><div className="book-nav"><button onClick={()=>turn(-1)} disabled={page===0}><ArrowLeft size={16}/><span>PREVIOUS</span></button><span className="book-chapter">{chapters[page]}</span><button onClick={()=>turn(1)} disabled={page===chapters.length-1}><span>{page===chapters.length-1?"END":"NEXT PAGE"}</span><ArrowRight size={16}/></button></div><div className="book-hint">USE ← → TO TURN PAGES</div></footer>
    </div>
  </main>;
}
