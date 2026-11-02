"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, BatteryFull, Check, Code2, ExternalLink, FileText, Folder, Github, Globe2, Mail, Minus, Monitor, Palette, Power, Sparkles, Wifi, X } from "lucide-react";

const projects = [
 {id:"iroyin",name:"Ìròyìn",kind:"Web application",year:"2026",description:"A multilingual reporting experience built to make news feel closer to the people reading it. Switch between English, Nigerian Pidgin and Yoruba.",role:"Product thinking · Frontend · AI integration",stack:"Next.js · Tailwind CSS · Sahara AI · Groq",url:"https://iroyin.vercel.app/",repo:"https://github.com/Rolexcode/iroyin",preview:"https://iroyin.vercel.app/",file:"iroyin.app"},
 {id:"campusgig",name:"CampusGig",kind:"Marketplace",year:"2026",description:"A marketplace connecting students to flexible work, with gig discovery, applications, messaging and a Solana USDC payment flow.",role:"Full-stack development · Product build",stack:"Next.js · TypeScript · Solana · USDC",url:"https://campus-gigtit6.vercel.app/",repo:"",preview:"https://campus-gigtit6.vercel.app/",file:"campusgig.app"},
 {id:"nexus",name:"Nexus",kind:"Campus platform",year:"2026",description:"A campus platform for discovering places and services, reporting real-world issues, verifying community reports and tracking the response from report to resolution.",role:"Product design · Full-stack development · Mapping",stack:"Next.js · TypeScript · Leaflet · Firebase",url:"https://nexus-rho-blond.vercel.app/",repo:"https://github.com/Rolexcode/nexus",preview:"https://nexus-rho-blond.vercel.app/",file:"nexus.app"},
 {id:"zenguard",name:"ZenGuard",kind:"On-chain agent",year:"2026",description:"A Telegram-based agent that monitors portfolio positions and can execute policy-scoped stop-loss and take-profit actions on Base.",role:"AI agent development · On-chain automation",stack:"Telegram · Base · AI agents · Web3",url:"https://t.me/ZerionAutonomousBot",repo:"https://github.com/Rolexcode/zerion-ai",preview:"",file:"zenguard.app"}
];
type WindowName="work"|"about"|"stack"|"contact"|"readme";
type Scene=0|1|2|3;
const palettes=[
 {name:"Nocturne",bg:"#111b20",accent:"#b9d8c5",glow:"#385b5a",paper:"#edf1eb"},
 {name:"Afterglow",bg:"#211b28",accent:"#e9b9a8",glow:"#6b4057",paper:"#f2ece9"},
 {name:"Dune",bg:"#27251e",accent:"#e1c99a",glow:"#746348",paper:"#f3eee3"},
 {name:"Ultraviolet",bg:"#171b31",accent:"#b9b9ef",glow:"#4b4c86",paper:"#eff0f8"}
];
const scenes=[
 {eyebrow:"THE STARTING POINT",title:"Every product<br/>starts with <em>an idea.</em>",copy:"I like finding the shape of an idea — what it could become, who it could help, and what it needs to work.",tag:"01 / IDEA"},
 {eyebrow:"THOUGHT MADE TANGIBLE",title:"Give the idea<br/>a <em>clear shape.</em>",copy:"I map the experience, make deliberate design decisions and turn the rough outline into something people can understand.",tag:"02 / SHAPE"},
 {eyebrow:"WHERE IT COMES ALIVE",title:"Design meets<br/><em>engineering.</em>",copy:"Interfaces, systems, integrations and the details behind them — built to work together as one product.",tag:"03 / BUILD"},
 {eyebrow:"OUT IN THE WORLD",title:"Make it real.<br/><em>Make it useful.</em>",copy:"A finished product should do more than look good. It should solve something, feel considered and be ready to grow.",tag:"04 / SHIP"}
];
const windowTitles:Record<WindowName,string>={work:"Projects",about:"About me",stack:"The toolkit",contact:"Get in touch",readme:"Start here"};
export default function Home(){
 const [boot,setBoot]=useState(true);
 const [opened,setOpened]=useState<WindowName[]>([]);
 const [active,setActive]=useState<WindowName>("work");
 const [selected,setSelected]=useState<string|null>(null);
 const [time,setTime]=useState("");
 const [copied,setCopied]=useState(false);
 const [scene,setScene]=useState<Scene>(0);
 const [palette,setPalette]=useState(0);
 const [paletteOpen,setPaletteOpen]=useState(false);
 const [mobileHelp,setMobileHelp]=useState(false);
 useEffect(()=>{const t=window.setTimeout(()=>setBoot(false),6900);return()=>window.clearTimeout(t)},[]);
 useEffect(()=>{const update=()=>setTime(new Intl.DateTimeFormat("en",{hour:"2-digit",minute:"2-digit",hour12:false}).format(new Date()));update();const t=window.setInterval(update,30000);return()=>window.clearInterval(t)},[]);
 function openWindow(name:WindowName){setOpened(v=>v.includes(name)?v:[...v,name]);setActive(name);setPaletteOpen(false)}
 function closeWindow(name:WindowName){setOpened(v=>v.filter(x=>x!==name));if(active===name){const left=opened.filter(x=>x!==name);if(left.length)setActive(left[left.length-1])}}
 function nextScene(){setScene(v=>(Math.min(3,v+1)) as Scene)}
 function prevScene(){setScene(v=>(Math.max(0,v-1)) as Scene)}
 async function copyEmail(){try{await navigator.clipboard.writeText("olaleyeolabodejeremiah@gmail.com");setCopied(true);window.setTimeout(()=>setCopied(false),1800)}catch{window.location.href="mailto:olaleyeolabodejeremiah@gmail.com"}}
 const project=projects.find(p=>p.id===selected);
 const theme=palettes[palette];
 return <main className="os-site" style={{"--desk-bg":theme.bg,"--desk-accent":theme.accent,"--desk-glow":theme.glow,"--window-paper":theme.paper} as React.CSSProperties}>
 {boot&&<div className="intro-loader" role="status" aria-label="Starting portfolio"><div className="terminal-scene"><div className="scene-top"><span>ROLEX@DEVROLEX</span><span>AN IDEA BECOMES REAL</span></div><div className="scene-center"><p className="scene-overline">A QUICK LOOK BEHIND THE BUILD</p><div className="terminal-screen"><div className="terminal-heading"><span>~/devrolex</span><span>zsh — 80×24</span></div><div className="terminal-body">
 <p className="terminal-line line-one"><span className="terminal-prompt">rolex@devrolex %</span> <span className="typed typed-one">whoami</span></p><p className="terminal-output line-two">Olabode Olaleye <span className="terminal-dim">— developer & builder</span></p>
 <p className="terminal-line line-three"><span className="terminal-prompt">rolex@devrolex %</span> <span className="typed typed-two">what_do_you_do</span></p><p className="terminal-output line-four">I turn ideas into working digital products.</p>
 <p className="terminal-line line-five"><span className="terminal-prompt">rolex@devrolex %</span> <span className="typed typed-three">start_with_an_idea</span></p><p className="terminal-output line-six"><span className="terminal-ok">→</span> shaping the experience</p><p className="terminal-output line-seven"><span className="terminal-ok">→</span> building what makes it work</p><p className="terminal-output line-eight"><span className="terminal-ok">→</span> getting it out into the world</p>
 <p className="terminal-line line-nine"><span className="terminal-prompt">rolex@devrolex %</span> <span className="typed typed-four">open /portfolio</span><span className="terminal-caret"/></p></div></div><p className="scene-endline">GOOD IDEAS DESERVE TO BE BUILT.</p></div><div className="scene-bottom"><span>IDEA <i>→</i> EXPERIENCE <i>→</i> PRODUCT</span><span className="scene-live"><i/> SESSION READY</span></div></div></div>}
 <div className={boot?"os-desktop os-enter":"os-desktop"}>
  <div className="os-menubar"><div className="os-menu-left"><span className="os-mark">r.</span><strong>Devrolex</strong><button onClick={()=>openWindow("readme")}>Start here</button><button onClick={()=>openWindow("work")}>Projects</button><button onClick={()=>openWindow("about")}>About</button></div><div className="os-menu-right"><span>ROLEX@DEVROLEX</span><Wifi size={13}/><BatteryFull size={15}/><span>{time}</span></div></div>
  <div className="desktop-wallpaper">
   <div className="wallpaper-art"><div className="wallpaper-orb"/><div className="wallpaper-ridge ridge-back"/><div className="wallpaper-ridge ridge-front"/><div className="wallpaper-stars">✳　·　✦　　·　✧　　·　✳</div></div>
   <div className="desktop-copy" key={scene}><span>{scenes[scene].eyebrow}</span><h1 dangerouslySetInnerHTML={{__html:scenes[scene].title}}/><p>{scenes[scene].copy}</p><small>{scenes[scene].tag}</small></div>
   <div className="desktop-icons">
    <button className="desktop-icon" onClick={()=>openWindow("work")}><span className="folder-icon"><Folder size={31} fill="currentColor"/></span><span>My work</span></button>
    <button className="desktop-icon" onClick={()=>openWindow("about")}><span className="file-icon"><FileText size={29}/></span><span>About me</span></button>
    <button className="desktop-icon" onClick={()=>openWindow("stack")}><span className="app-icon"><Code2 size={25}/></span><span>Toolkit</span></button>
    <button className="desktop-icon" onClick={()=>openWindow("contact")}><span className="mail-icon"><Mail size={29}/></span><span>Contact</span></button>
   </div>
   <div className="scene-navigation"><button onClick={prevScene} disabled={scene===0} aria-label="Previous chapter"><ArrowLeft size={15}/></button><div className="scene-progress">{scenes.map((s,i)=><button key={s.tag} className={scene===i?"current":""} onClick={()=>setScene(i as Scene)} aria-label={s.tag}/>)}</div><span>{scenes[scene].tag}</span><button onClick={nextScene} disabled={scene===3} aria-label="Next chapter"><ArrowRight size={15}/></button></div>
   <div className="desktop-hint"><Sparkles size={12}/> Explore the desktop or follow the story <span>·</span> Tap any icon to open</div>
   {opened.map(name=><section key={name} className={"os-window "+(active===name?"window-active":"")} onMouseDown={()=>setActive(name)}>
    <header className="window-titlebar"><div className="window-controls"><button onClick={()=>closeWindow(name)} aria-label="Close"><X size={10}/></button><button onClick={()=>closeWindow(name)} aria-label="Minimize"><Minus size={10}/></button><button onClick={()=>setActive(name)} aria-label="Focus"><span/></button></div><span>{windowTitles[name]}</span><button className="window-close" onClick={()=>closeWindow(name)} aria-label="Close window"><X size={14}/></button></header>
    {name==="work"&&<div className="finder-window"><aside className="finder-sidebar"><span>EXPLORE</span><button className="side-active"><Folder size={14}/> Projects</button><button onClick={()=>openWindow("about")}><FileText size={14}/> About</button><button onClick={()=>openWindow("stack")}><Code2 size={14}/> Toolkit</button><button onClick={()=>openWindow("contact")}><Mail size={14}/> Contact</button><div className="sidebar-bottom">SELECTED WORK<br/><small>2026 / 04 projects</small></div></aside><div className="finder-content"><div className="finder-toolbar"><span>Selected projects <b>·</b> {projects.length} projects</span><span>Choose a project to preview</span></div><div className="project-file-grid">{projects.map(p=><button key={p.id} className={"project-file "+(selected===p.id?"file-selected":"")} onClick={()=>setSelected(p.id)}><span className={"project-thumb thumb-"+p.id}>{p.id==="iroyin"?"Ì":p.id==="campusgig"?"C":p.id==="nexus"?"N":"Z"}</span><strong>{p.name}</strong><small>{p.kind}</small></button>)}</div>{project?<div className="finder-inspector"><div><span>PROJECT / {project.year}</span><strong>{project.name}</strong><p>{project.description}</p><small>{project.role} · {project.stack}</small></div><div className="inspector-actions"><button onClick={()=>{if(project.url)window.open(project.url,"_blank","noopener,noreferrer")}}>Visit live <ArrowUpRight size={13}/></button>{project.repo&&<a href={project.repo} target="_blank" rel="noreferrer">Source <Github size={13}/></a>}</div></div>:<div className="finder-empty"><Globe2 size={19}/><span>Select a project above to see its details and live preview.</span></div>}</div></div>}
    {name==="about"&&<div className="textedit-window"><div className="textedit-meta">PROFILE / OLABODE OLALEYE <span>PERSONAL FILE</span></div><div className="profile-layout"><div className="profile-monogram">r<span>.</span></div><div><span className="profile-kicker">FULL-STACK DEVELOPER</span><h2>Olabode<br/><em>Olaleye.</em></h2><p>I like getting into the details of an idea, figuring out what it needs, and building the experience and technology that bring it to life.</p><p>I work across interfaces, backend systems, integrations and the details that make a product feel considered.</p><a href="https://github.com/Rolexcode" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a></div></div></div>}
    {name==="stack"&&<div className="system-window"><div className="system-hero"><span className="system-chip"><Code2 size={24}/></span><div><h2>The toolkit</h2><p>Tools I use to turn ideas into products.</p></div></div><div className="system-spec"><span>LANGUAGES</span><strong>TypeScript · JavaScript · Python · Rust · Solidity</strong></div><div className="system-spec"><span>FRONTEND</span><strong>React · Next.js · Tailwind CSS</strong></div><div className="system-spec"><span>BACKEND & DATA</span><strong>Node.js · Firebase · APIs · SQL</strong></div><div className="system-spec"><span>AI & WEB3</span><strong>AI integrations · Agents · Solana · EVM</strong></div><div className="system-spec"><span>WORKFLOW</span><strong>Git · GitHub · Vercel · Figma</strong></div></div>}
    {name==="contact"&&<div className="mail-window"><div className="mail-toolbar"><span>LET'S TALK</span><strong>olaleyeolabodejeremiah@gmail.com</strong></div><h2>Have something<br/><em>in mind?</em></h2><p>Tell me what you're thinking. Let's see what we can build.</p><div className="mail-actions"><a href="mailto:olaleyeolabodejeremiah@gmail.com?subject=Let's%20build%20something"><Mail size={14}/> Compose email <ArrowUpRight size={13}/></a><button onClick={copyEmail}>{copied?<><Check size={13}/> Copied</>:<>Copy email</>}</button></div></div>}
    {name==="readme"&&<div className="readme-window"><span>WELCOME / DEVROLEX</span><h2>A workspace for<br/><em>ideas in motion.</em></h2><p>Explore the desktop, open a folder, or move through the chapters at the bottom. Everything here is designed to be easy to explore — no computer experience required.</p><div className="readme-actions"><button onClick={()=>openWindow("work")}>Explore projects <ArrowUpRight size={13}/></button><button onClick={()=>{setScene(0);closeWindow("readme")}}>Start the story</button></div></div>}
   </section>)}
   <div className="os-dock"><button onClick={()=>openWindow("work")} title="Projects"><Folder size={23} fill="currentColor"/></button><button onClick={()=>openWindow("about")} title="About"><FileText size={22}/></button><button onClick={()=>openWindow("stack")} title="Toolkit"><Code2 size={23}/></button><button onClick={()=>openWindow("contact")} title="Contact"><Mail size={22}/></button><i/><a href="https://github.com/Rolexcode" target="_blank" rel="noreferrer" title="GitHub"><Github size={21}/></a></div>
   <div className="palette-wrap"><button className="palette-trigger" onClick={()=>setPaletteOpen(v=>!v)}><Palette size={15}/> Appearance</button>{paletteOpen&&<div className="palette-popover"><span>DESKTOP APPEARANCE</span>{palettes.map((p,i)=><button key={p.name} onClick={()=>{setPalette(i);setPaletteOpen(false)}} className={palette===i?"palette-active":""}><i style={{background:p.bg}}/><b>{p.name}</b>{palette===i&&<Check size={13}/>}</button>)}</div>}</div>
   <button className="desktop-help" onClick={()=>setMobileHelp(v=>!v)} aria-label="How to navigate"><span>?</span></button>{mobileHelp&&<div className="help-popover"><strong>Explore Devrolex</strong><p>Use the chapter controls to move through the story. Tap any desktop icon or dock item to open it. In Projects, choose a project to see its preview.</p><button onClick={()=>setMobileHelp(false)}>Got it</button></div>}
  </div>
 </div>
 </main>
}
