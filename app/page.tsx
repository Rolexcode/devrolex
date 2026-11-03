"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, BatteryCharging, BriefcaseBusiness, Check, Code2, FileText, Folder, Github, Globe2, House, Mail, Minus, MonitorCog, UserRound, Wifi, X } from "lucide-react";

const projects = [
 {id:"iroyin",name:"Ìròyìn",kind:"Web application",year:"2026",description:"A multilingual reporting experience built to make news feel closer to the people reading it. Switch between English, Nigerian Pidgin and Yoruba.",role:"Product thinking · Frontend · AI integration",stack:"Next.js · Tailwind CSS · Sahara AI · Groq",url:"https://iroyin.vercel.app/",repo:"https://github.com/Rolexcode/iroyin",preview:"https://iroyin.vercel.app/",file:"iroyin.app"},
 {id:"campusgig",name:"CampusGig",kind:"Marketplace",year:"2026",description:"A marketplace connecting students to flexible work, with gig discovery, applications, messaging and a Solana USDC payment flow.",role:"Full-stack development · Product build",stack:"Next.js · TypeScript · Solana · USDC",url:"https://campus-gigtit6.vercel.app/",repo:"",preview:"https://campus-gigtit6.vercel.app/",file:"campusgig.app"},
 {id:"nexus",name:"Nexus",kind:"Campus platform",year:"2026",description:"A campus platform for discovering places and services, reporting real-world issues, verifying community reports and tracking the response from report to resolution.",role:"Product design · Full-stack development · Mapping",stack:"Next.js · TypeScript · Leaflet · Firebase",url:"https://nexus-rho-blond.vercel.app/",repo:"https://github.com/Rolexcode/nexus",preview:"https://nexus-rho-blond.vercel.app/",file:"nexus.app"},
 {id:"zenguard",name:"ZenGuard",kind:"On-chain agent",year:"2026",description:"A Telegram-based agent that monitors portfolio positions and can execute policy-scoped stop-loss and take-profit actions on Base.",role:"AI agent development · On-chain automation",stack:"Telegram · Base · AI agents · Web3",url:"https://t.me/ZerionAutonomousBot",repo:"https://github.com/Rolexcode/zerion-ai",preview:"",file:"zenguard.app"}
];
type WindowName="work"|"about"|"stack"|"contact"|"readme";
type Scene=0|1|2|3;
type DesktopOS="mac"|"windows"|"linux";
const scenes=[
 {eyebrow:"About me · Full-stack developer",title:"I’m Olabode<br/><em>Olaleye.</em>",copy:"I build digital products from the first question to the working system — thoughtful interfaces, reliable engineering and the details that make the whole experience feel right.",tag:"About me",detail:"Product thinking · Full-stack development",mark:"◎"},
 {eyebrow:"Selected work · 2026",title:"A few things<br/>I’ve <em>built.</em>",copy:"A selection of products and experiments, each with a different problem to solve. Scroll through the work and open any build to experience it.",tag:"Selected work",detail:"Ìròyìn · CampusGig · Nexus · ZenGuard",mark:"▦"},
 {eyebrow:"How I build · What I bring",title:"From first thought<br/>to <em>finished product.</em>",copy:"I work across the experience and the engineering: understanding the problem, shaping the interface, building the system and connecting the pieces.",tag:"Approach",detail:"Web experiences · Full-stack products · AI & integrations",mark:"⌘"},
 {eyebrow:"Have something in mind?",title:"Let’s make<br/><em>something useful.</em>",copy:"A rough idea, a clear brief or a problem you want solved — tell me what you’re thinking. We can work out the right next step together.",tag:"Contact",detail:"olaleyeolabodejeremiah@gmail.com",mark:"↗"}
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
 const [desktopOS,setDesktopOS]=useState<DesktopOS>("mac");
  const [osMenuOpen,setOsMenuOpen]=useState(false);
 const [flipDirection,setFlipDirection]=useState<"next"|"prev">("next");
 const flipLock=useRef(false);
 const touchStart=useRef<number|null>(null);
 const wallpaperRef=useRef<HTMLDivElement>(null);
 const bootStartedAt=useRef(0);
 useEffect(()=>{bootStartedAt.current=performance.now();const t=window.setTimeout(()=>setBoot(false),6900);return()=>window.clearTimeout(t)},[]);
 useEffect(()=>{
  if(!boot)return;
  let audio:AudioContext|null=null, timers:number[]=[];
  const start=()=>{
   if(audio)return;
   try{
    const AudioContextClass=window.AudioContext||(window as typeof window & {webkitAudioContext?:typeof AudioContext}).webkitAudioContext;
    if(!AudioContextClass)return;
    audio=new AudioContextClass();void audio.resume();
    // Soft mechanical key taps timed to the terminal's staggered typing sequence.
    const typeRun=(from:number,to:number,step:number,delay:number)=>{
     for(let t=from;t<to;t+=step){
      const timer=window.setTimeout(()=>{
       if(!audio||audio.state!=="running")return;
       const now=audio.currentTime;
       // Short filtered-noise transient gives each keystroke a dry, physical switch-click.
       const length=Math.floor(audio.sampleRate*.045),buffer=audio.createBuffer(1,length,audio.sampleRate),data=buffer.getChannelData(0);
       for(let i=0;i<length;i++)data[i]=(Math.random()*2-1)*Math.pow(1-i/length,3);
       const noise=audio.createBufferSource(),filter=audio.createBiquadFilter(),gain=audio.createGain();
       filter.type="bandpass";filter.frequency.setValueAtTime(2100+Math.random()*900,now);filter.Q.setValueAtTime(.8,now);
       gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(.045,now+.0015);gain.gain.exponentialRampToValueAtTime(.0001,now+.038);
       noise.buffer=buffer;noise.connect(filter);filter.connect(gain);gain.connect(audio.destination);noise.start(now);noise.stop(now+.045);
       const thock=audio.createOscillator(),body=audio.createGain();thock.type="sine";thock.frequency.setValueAtTime(180+Math.random()*45,now);
       body.gain.setValueAtTime(.0001,now);body.gain.exponentialRampToValueAtTime(.012,now+.001);body.gain.exponentialRampToValueAtTime(.0001,now+.025);
       thock.connect(body);body.connect(audio.destination);thock.start(now);thock.stop(now+.027);
      },delay+(t-from)*1000);
      timers.push(timer);
     }
    };
    const elapsed=performance.now()-bootStartedAt.current;
    const sync=(at:number)=>Math.max(0,at-elapsed);
    typeRun(0,.45,.075,sync(850));
    typeRun(0,1,.075,sync(2050));
    typeRun(0,1.15,.075,sync(3550));
    typeRun(0,.85,.075,sync(5150));
    timers.push(window.setTimeout(()=>{if(audio&&audio.state!=="closed")void audio.close()},6400));
   }catch{}
  };
  window.addEventListener("pointerdown",start,{once:true});window.addEventListener("keydown",start,{once:true});
  return()=>{window.removeEventListener("pointerdown",start);window.removeEventListener("keydown",start);timers.forEach(window.clearTimeout);if(audio&&audio.state!=="closed")void audio.close()};
 },[boot]);
 useEffect(()=>{const onKeyDown=(event:KeyboardEvent)=>{if((event.target as HTMLElement|null)?.closest(".os-window,input,textarea,button,a"))return;if(["ArrowDown","PageDown","ArrowUp","PageUp"].includes(event.key)){const down=event.key==="ArrowDown"||event.key==="PageDown";const scroller=wallpaperRef.current?.querySelector(".scene-content-1") as HTMLElement|null;if(scroller&&wallpaperRef.current?.classList.contains("wallpaper-scene-1")){const atBottom=scroller.scrollTop+scroller.clientHeight>=scroller.scrollHeight-8;const atTop=scroller.scrollTop<=8;if((down&&!atBottom)||(!down&&!atTop))return;}event.preventDefault();if(flipLock.current)return;flipLock.current=true;goScene(down?"next":"prev");window.setTimeout(()=>{flipLock.current=false},520)}};window.addEventListener("keydown",onKeyDown);return()=>window.removeEventListener("keydown",onKeyDown)},[]);
 useEffect(()=>{const update=()=>setTime(new Intl.DateTimeFormat("en",{hour:"2-digit",minute:"2-digit",hour12:false}).format(new Date()));update();const t=window.setInterval(update,30000);return()=>window.clearInterval(t)},[]);
 function openWindow(name:WindowName){setOpened(v=>v.includes(name)?v:[...v,name]);setActive(name)}
 function closeWindow(name:WindowName){setOpened(v=>v.filter(x=>x!==name));if(active===name){const left=opened.filter(x=>x!==name);if(left.length)setActive(left[left.length-1])}}
 function goScene(direction:"next"|"prev"){setScene(v=>{const next=Math.max(0,Math.min(3,v+(direction==="next"?1:-1))) as Scene;if(next!==v)setFlipDirection(direction);return next})}
 function nextScene(){goScene("next")}
 function prevScene(){goScene("prev")}
 function handleWheel(event:React.WheelEvent<HTMLDivElement>){
  const target=event.target as HTMLElement;
  if(Math.abs(event.deltaY)<12)return;
  if(target.closest(".os-window,.os-dock,.scene-content-2,button,a,input,textarea"))return;
  const projectScroller=wallpaperRef.current?.querySelector(".scene-content-1") as HTMLElement|null;
  if(scene===1&&projectScroller&&target.closest(".scene-content-1")){
   const atBottom=projectScroller.scrollTop+projectScroller.clientHeight>=projectScroller.scrollHeight-24;
   const atTop=projectScroller.scrollTop<=24;
   if((event.deltaY>0&&!atBottom)||(event.deltaY<0&&!atTop))return;
  }
  event.preventDefault();
  if(flipLock.current)return;
  flipLock.current=true;goScene(event.deltaY>0?"next":"prev");
  window.setTimeout(()=>{flipLock.current=false},480);
 }
 function handleTouchEnd(event:React.TouchEvent<HTMLDivElement>){if(touchStart.current===null)return;const delta=touchStart.current-event.changedTouches[0].clientY;touchStart.current=null;const target=event.target as HTMLElement;const projectScroller=target.closest(".scene-content-1") as HTMLElement|null;if(projectScroller){const atBottom=projectScroller.scrollTop+projectScroller.clientHeight>=projectScroller.scrollHeight-8;const atTop=projectScroller.scrollTop<=8;if(Math.abs(delta)>55&&((delta>0&&atBottom)||(delta<0&&atTop)))goScene(delta>0?"next":"prev");return}if(target.closest(".os-window,.os-dock,.os-menubar,.scene-content-2,button,a,input,textarea"))return;if(Math.abs(delta)>55)goScene(delta>0?"next":"prev")}
 function resetDesktop(){setScene(0);setOpened([]);setActive("work");setDesktopOS("mac");setOsMenuOpen(false)}
 async function copyEmail(){try{await navigator.clipboard.writeText("olaleyeolabodejeremiah@gmail.com");setCopied(true);window.setTimeout(()=>setCopied(false),1800)}catch{window.location.href="mailto:olaleyeolabodejeremiah@gmail.com"}}
 const project=projects.find(p=>p.id===selected);
 const featuredProject=project??projects[0];

 return <main className="os-site">
 {boot&&<div className="intro-loader" role="status" aria-label="Starting portfolio"><div className="terminal-scene"><div className="scene-top"><span>dev{"</>"}rolex</span><span>AN IDEA BECOMES REAL</span></div><div className="scene-center"><p className="scene-overline">A QUICK INTRODUCTION</p><div className="terminal-screen"><div className="terminal-heading"><span>~/devrolex</span><span>zsh — 80×24</span></div><div className="terminal-body">
 <p className="terminal-line line-one"><span className="terminal-prompt">rolex@devrolex %</span> <span className="typed typed-one">who am I?</span></p><p className="terminal-output line-two">Olabode Olaleye <span className="terminal-dim">— developer & builder</span></p>
 <p className="terminal-line line-three"><span className="terminal-prompt">rolex@devrolex %</span> <span className="typed typed-two">what_i_build</span></p><p className="terminal-output line-four">Websites, applications and digital products.</p>
 <p className="terminal-line line-five"><span className="terminal-prompt">rolex@devrolex %</span> <span className="typed typed-three">my_work</span></p><p className="terminal-output line-six"><span className="terminal-ok">→</span> full-stack development</p><p className="terminal-output line-seven"><span className="terminal-ok">→</span> product design and problem-solving</p><p className="terminal-output line-eight"><span className="terminal-ok">→</span> AI, APIs and Web3 integrations</p>
 <p className="terminal-line line-nine"><span className="terminal-prompt">rolex@devrolex %</span> <span className="typed typed-four">open /portfolio</span><span className="terminal-caret"/></p></div></div><p className="scene-endline">GOOD IDEAS DESERVE TO BE BUILT.</p></div><div className="scene-bottom"><span>IDEA <i>→</i> EXPERIENCE <i>→</i> PRODUCT</span><span className="scene-live"><i/> SESSION READY</span></div></div></div>}
 <div className={`os-desktop os-${desktopOS??"mac"} ${boot?"os-enter":""}`} onWheel={handleWheel}>

  {osMenuOpen&&<div className="os-experience-panel" role="dialog" aria-label="Change operating system"><div className="os-experience-panel-head"><span>CHANGE OPERATING SYSTEM</span><button onClick={()=>setOsMenuOpen(false)} aria-label="Close selector"><X size={13}/></button></div><p>Choose your preferred desktop environment.</p><div className="os-experience-options"><button className={desktopOS==="mac"?"is-selected":""} onClick={()=>{setDesktopOS("mac");setOsMenuOpen(false)}}><span>⌘</span><strong>macOS</strong>{desktopOS==="mac"&&<Check size={13}/>}</button><button className={desktopOS==="windows"?"is-selected":""} onClick={()=>{setDesktopOS("windows");setOsMenuOpen(false)}}><span>⊞</span><strong>Windows</strong>{desktopOS==="windows"&&<Check size={13}/>}</button><button className={desktopOS==="linux"?"is-selected":""} onClick={()=>{setDesktopOS("linux");setOsMenuOpen(false)}}><span>⌁</span><strong>Linux</strong>{desktopOS==="linux"&&<Check size={13}/>}</button></div></div>}
  <div className="os-topbar">
   <button className="os-topbar-brand" onClick={resetDesktop}><strong>dev{"</>"}rolex</strong><span>Portfolio</span></button>
   <div className="os-topbar-status"><span>{time}</span><i/><Wifi size={14}/><span className="battery-status" aria-label="Battery status"><BatteryCharging size={17} strokeWidth={1.7}/></span></div>
  </div>
  <div ref={wallpaperRef} className={`desktop-wallpaper wallpaper-scene-${scene} flip-${flipDirection} flip-step-${scene}`} onTouchStart={event=>{touchStart.current=event.touches[0].clientY}} onTouchEnd={handleTouchEnd}>
   <div className="wallpaper-art"><div className="wallpaper-orb"/><div className="wallpaper-ridge ridge-back"/><div className="wallpaper-ridge ridge-front"/><div className="wallpaper-stars">✳　·　✦　　·　✧　　·　✳</div></div>
   <div className={`desktop-copy desktop-copy-scene scene-content-${scene}`} key={scene}>
    <span>{scenes[scene].eyebrow}</span>
    <h1 dangerouslySetInnerHTML={{__html:scenes[scene].title}}/>
    <p>{scenes[scene].copy}</p>
    {scene===0&&<div className="about-scene-details">
      <div className="about-scene-note"><span>WHAT I DO</span><strong>Software development, from interface to backend.</strong></div>
      <div className="about-scene-note"><span>HOW I THINK</span><strong>Start with the problem. Build what actually helps.</strong></div>
      <div className="about-scene-links"><a href="https://github.com/Rolexcode" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a><a href="https://www.linkedin.com/in/olabode-olaleye-62290124b" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a></div>
    </div>}
    {scene===1&&<div className="work-scroll-area">
      {projects.map((item,index)=><article className="work-scroll-project" key={item.id}>
        <div className="work-scroll-heading"><span>0{index+1} / 0{projects.length}</span><span>{item.kind} · {item.year}</span></div>
        <div className="work-scroll-grid">
          <div className={`work-scroll-visual work-visual-${item.id}`}>
            {item.preview?<iframe src={item.preview} title={item.name+" live project preview"} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" sandbox="allow-forms allow-scripts allow-same-origin allow-popups" tabIndex={-1}/>:<div className="work-scroll-fallback"><span>ZERION HACKATHON BUILD</span><strong>Portfolio watch.<br/><em>On-chain action.</em></strong><p>A Telegram agent that monitors positions and acts on preset risk rules on Base.</p></div>}
            <a href={item.url} target="_blank" rel="noreferrer" className="work-preview-open">Open live project <ArrowUpRight size={13}/></a>
          </div>
          <div className="work-scroll-info"><span className="work-project-type">{item.kind}</span><h2>{item.name}</h2><p>{item.description}</p><div className="work-project-role">{item.role}</div><div className="work-project-stack">{item.stack.split(" · ").map(tag=><span key={tag}>{tag}</span>)}</div><div className="work-project-links"><a href={item.url} target="_blank" rel="noreferrer">Explore project <ArrowUpRight size={13}/></a>{item.repo&&<a href={item.repo} target="_blank" rel="noreferrer">Source code <Github size={13}/></a>}</div></div>
        </div>
      </article>)}
    </div>}
    {scene===2&&<div className="approach-scene-details">
      <div className="approach-intro"><span>THE WORK, END TO END</span><p>I’m comfortable moving between product decisions and implementation. That means thinking about the person using the product, then making sure the technology underneath supports the experience.</p></div>
      <div className="approach-capabilities">
       <article><span>01 / EXPERIENCE</span><h3>Web experiences</h3><p>Responsive websites, landing pages and interfaces that communicate clearly and feel considered.</p></article>
       <article><span>02 / ENGINEERING</span><h3>Full-stack products</h3><p>Web apps, dashboards, data models, authentication and backend logic that make products useful.</p></article>
       <article><span>03 / CONNECTIONS</span><h3>AI & integrations</h3><p>Practical AI features, APIs, payment flows and connected services that extend what a product can do.</p></article>
      </div>
      <div className="approach-toolkit"><span>TOOLS I WORK WITH</span><p>TypeScript · JavaScript · Python · React · Next.js · Node.js · Firebase · SQL · AI APIs · Solidity · Solana · Git · Vercel</p></div>
    </div>}
    {scene===3&&<div className="contact-scene-details">
      <a className="scene-contact-link" href="mailto:olaleyeolabodejeremiah@gmail.com?subject=Let’s%20build%20something">olaleyeolabodejeremiah@gmail.com <ArrowUpRight size={14}/></a>
      <div className="contact-scene-bottom"><span>OPEN TO SOFTWARE ROLES & PRODUCT BUILDS</span><div><a href="https://www.linkedin.com/in/olabode-olaleye-62290124b" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a><a href="https://github.com/Rolexcode" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a></div></div>
    </div>}
    <small>{scenes[scene].tag}</small>
   </div>
   {opened.map(name=><section key={name} className={"os-window "+(active===name?"window-active":"")} onMouseDown={()=>setActive(name)}>
    <header className="window-titlebar"><div className="window-controls"><button onClick={()=>closeWindow(name)} aria-label="Close"><X size={10}/></button><button onClick={()=>closeWindow(name)} aria-label="Minimize"><Minus size={10}/></button><button onClick={()=>setActive(name)} aria-label="Focus"><span/></button></div><span>{windowTitles[name]}</span><button className="window-close" onClick={()=>closeWindow(name)} aria-label="Close window"><X size={14}/></button></header>
    {name==="work"&&<div className="finder-window"><aside className="finder-sidebar"><span>EXPLORE</span><button className="side-active"><Folder size={14}/> Projects</button><button onClick={()=>openWindow("about")}><FileText size={14}/> About</button><button onClick={()=>openWindow("stack")}><Code2 size={14}/> Toolkit</button><button onClick={()=>openWindow("contact")}><Mail size={14}/> Contact</button><div className="sidebar-bottom">SELECTED WORK<br/><small>2026 / 04 projects</small></div></aside><div className="finder-content"><div className="finder-toolbar"><span>Selected projects <b>·</b> {projects.length} projects</span><span>Choose a project to preview</span></div><div className="project-file-grid">{projects.map(p=><button key={p.id} className={"project-file "+(selected===p.id?"file-selected":"")} onClick={()=>setSelected(p.id)}><span className={"project-thumb thumb-"+p.id}>{p.id==="iroyin"?"Ì":p.id==="campusgig"?"C":p.id==="nexus"?"N":"Z"}</span><strong>{p.name}</strong><small>{p.kind}</small></button>)}</div>{project?<div className="finder-inspector"><div><span>PROJECT / {project.year}</span><strong>{project.name}</strong><p>{project.description}</p><small>{project.role} · {project.stack}</small></div><div className="project-preview-frame">{project.preview?<iframe src={project.preview} title={project.name+" live preview"} loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"/>:<div className="preview-fallback">Preview unavailable<br/>Open the project to explore</div>}</div><div className="inspector-actions"><button onClick={()=>{if(project.url)window.open(project.url,"_blank","noopener,noreferrer")}}>Visit live <ArrowUpRight size={13}/></button>{project.repo&&<a href={project.repo} target="_blank" rel="noreferrer">Source <Github size={13}/></a>}</div></div>:<div className="finder-empty"><Globe2 size={19}/><span>Select a project above to see its details and live preview.</span></div>}</div></div>}
    {name==="about"&&<div className="textedit-window about-work-window"><div className="textedit-meta">PROFILE / OLABODE OLALEYE <span>SELECTED WORK</span></div><div className="profile-layout"><div className="profile-monogram">r<span>.</span></div><div><span className="profile-kicker">FULL-STACK DEVELOPER</span><h2>Olabode<br/><em>Olaleye.</em></h2><p>I build digital products from the first question to the working system — combining thoughtful interfaces with the engineering behind them.</p><a href="https://github.com/Rolexcode" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a></div></div><div className="about-selected"><div className="about-selected-heading"><span>SELECTED WORK</span><small>2026 / 04</small></div><div className="about-selected-grid">{projects.map(p=><button key={p.id} onClick={()=>{setSelected(p.id);openWindow("work")}}><span className={"about-work-mark thumb-"+p.id}>{p.id==="iroyin"?"Ì":p.id==="campusgig"?"C":p.id==="nexus"?"N":"Z"}</span><span><strong>{p.name}</strong><small>{p.kind}</small></span><ArrowUpRight size={13}/></button>)}</div></div></div>}
    {name==="stack"&&<div className="system-window"><div className="system-hero"><span className="system-chip"><Code2 size={24}/></span><div><h2>The toolkit</h2><p>Tools I use to turn ideas into products.</p></div></div><div className="system-spec"><span>LANGUAGES</span><strong>TypeScript · JavaScript · Python · Rust · Solidity</strong></div><div className="system-spec"><span>FRONTEND</span><strong>React · Next.js · Tailwind CSS</strong></div><div className="system-spec"><span>BACKEND & DATA</span><strong>Node.js · Firebase · APIs · SQL</strong></div><div className="system-spec"><span>AI & WEB3</span><strong>AI integrations · Agents · Solana · EVM</strong></div><div className="system-spec"><span>WORKFLOW</span><strong>Git · GitHub · Vercel · Figma</strong></div></div>}
    {name==="contact"&&<div className="mail-window"><div className="mail-toolbar"><span>LET'S TALK</span><strong>olaleyeolabodejeremiah@gmail.com</strong></div><h2>Have something<br/><em>in mind?</em></h2><p>Tell me what you're thinking. Let's see what we can build.</p><div className="mail-actions"><a href="mailto:olaleyeolabodejeremiah@gmail.com?subject=Let's%20build%20something"><Mail size={14}/> Compose email <ArrowUpRight size={13}/></a><button onClick={copyEmail}>{copied?<><Check size={13}/> Copied</>:<>Copy email</>}</button></div></div>}
    {name==="readme"&&<div className="readme-window"><span>WELCOME / dev{"</>"}rolex</span><h2>A workspace for<br/><em>ideas in motion.</em></h2><p>Move through the portfolio with the taskbar or scroll between pages. Open a project to explore the live build, then get in touch if you have something in mind.</p><div className="readme-actions"><button onClick={()=>openWindow("work")}>Explore projects <ArrowUpRight size={13}/></button><button onClick={()=>{setScene(0);closeWindow("readme")}}>Start the story</button></div></div>}
   </section>)}
   <div className="os-dock" role="navigation" aria-label="Portfolio pages">
   <button className={scene===0?"is-active":""} onClick={()=>{setFlipDirection(scene>0?"prev":"next");setScene(0)}} title="Home" aria-label="Home"><span className="dock-app-icon dock-home"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M10 29 32 11l22 18v23H38V37H26v15H10Z" fill="#f5fbff"/><path d="m7 29 25-21 25 21" fill="none" stroke="#d8f5ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 33h9v9h-9zm21 0h9v9h-9z" fill="#7cc9db"/></svg></span></button>
   <button className={scene===1?"is-active":""} onClick={()=>{setFlipDirection(scene>1?"prev":"next");setScene(1)}} title="Projects" aria-label="Projects"><span className="dock-app-icon dock-projects"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 18a5 5 0 0 1 5-5h14l6 7h18a5 5 0 0 1 5 5v23a5 5 0 0 1-5 5H13a5 5 0 0 1-5-5Z" fill="#fff3d5"/><path d="M8 27h48" stroke="#b66b32" strokeWidth="3"/><path d="m24 39 6 6 12-13" fill="none" stroke="#d88c3f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg></span></button>
   <button className={scene===2?"is-active":""} onClick={()=>{setFlipDirection(scene>2?"prev":"next");setScene(2)}} title="Approach" aria-label="Approach"><span className="dock-app-icon dock-about"><svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="23" r="12" fill="#f4f1ff"/><path d="M11 55c1-13 9-20 21-20s20 7 21 20" fill="#d9ddff"/><path d="M23 23c2 3 5 4 9 4s7-1 9-4" fill="none" stroke="#7b83c5" strokeWidth="2.5" strokeLinecap="round"/></svg></span></button>
   <button className={scene===3?"is-active":""} onClick={()=>{setFlipDirection("next");setScene(3)}} title="Contact" aria-label="Contact"><span className="dock-app-icon dock-contact"><svg viewBox="0 0 64 64" aria-hidden="true"><rect x="9" y="15" width="46" height="34" rx="8" fill="#f0fff4"/><path d="m12 20 20 16 20-16" fill="none" stroke="#55a979" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 45 25 33m27 12L39 33" fill="none" stroke="#9bd8af" strokeWidth="3" strokeLinecap="round"/></svg></span></button>
   <button className="os-os-trigger" onClick={()=>setOsMenuOpen(v=>!v)} aria-label="Change operating system" title="Change operating system" aria-expanded={osMenuOpen}><span className="dock-app-icon dock-settings"><svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="21" fill="none" stroke="#f1f5f2" strokeWidth="7" strokeDasharray="8 4"/><circle cx="32" cy="32" r="8" fill="#e6eeee"/><path d="M32 4v8M32 52v8M4 32h8m40 0h8" stroke="#f1f5f2" strokeWidth="4" strokeLinecap="round"/></svg></span></button>
  </div>

  </div>
 </div>
 </main>
}
