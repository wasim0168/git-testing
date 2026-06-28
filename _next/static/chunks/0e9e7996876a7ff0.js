(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,3862,e=>{"use strict";var t=e.i(43476),i=e.i(71645);let r=[{id:1,number:"STEP 01",label:"Collection",title:"Collection & Transport",icon:"🚛",color:"#0a4f70",accentColor:"#1a7ca3",description:"We collect end-of-life solar panels from your location using specialized vehicles equipped with GPS tracking and safety features.",features:["Free pickup service with scheduling","Safe transportation with cushioning","Real-time tracking system"]},{id:2,number:"STEP 02",label:"Inspection",title:"Inspection & Testing",icon:"🔬",color:"#1a5276",accentColor:"#2471a3",description:"Each panel undergoes thorough inspection and testing to determine the optimal recycling approach and assess material quality.",features:["Comprehensive quality assessment","Advanced component analysis","Detailed data logging"]},{id:3,number:"STEP 03",label:"Dismantling",title:"Dismantling",icon:"⚙️",color:"#154360",accentColor:"#1f618d",description:"Careful manual and automated disassembly of aluminum frames, junction boxes, wiring, and protective glass layers.",features:["Precision manual separation","Aluminum frame removal","Component sorting by type"]},{id:4,number:"STEP 04",label:"Chemical",title:"Chemical Treatment",icon:"⚗️",color:"#0e6655",accentColor:"#17a589",description:"Advanced chemical processes using eco-friendly solvents to separate silicon cells from glass and encapsulant materials.",features:["Eco-friendly biodegradable solvents","Silicon cell extraction","Purity enhancement process"]},{id:5,number:"STEP 05",label:"Thermal",title:"Thermal Processing",icon:"🔥",color:"#784212",accentColor:"#d35400",description:"High-temperature treatment in controlled environments to recover valuable metals and eliminate residual organics.",features:["Precision controlled heating","Silver and copper recovery","Heat energy capture and reuse"]},{id:6,number:"STEP 06",label:"Separation",title:"Material Separation",icon:"🔱",color:"#512e5f",accentColor:"#8e44ad",description:"Advanced mechanical and electrostatic separation techniques to isolate glass, silicon, silver, and copper materials.",features:["Precision mechanical sorting","95%+ material recovery rate","Rigorous quality control"]},{id:7,number:"STEP 07",label:"Purification",title:"Purification",icon:"💎",color:"#145a32",accentColor:"#1e8449",description:"Recovered materials undergo chemical refinement to achieve industry-standard purity levels suitable for manufacturing.",features:["Advanced chemical refinement","Laboratory quality testing","Industry certification"]},{id:8,number:"STEP 08",label:"Redistribution",title:"Redistribution",icon:"🚚",color:"#1a5276",accentColor:"#2980b9",description:"Purified materials are packaged and distributed to manufacturers for creating new solar panels and electronic components.",features:["New solar panel manufacturing","Electronic components production","Sustainable building materials"]}],a=[{value:"95%",label:"Recovery Rate"},{value:"8",label:"Step Process"},{value:"100%",label:"Eco-Friendly"},{value:"60K+",label:"Panels/Year"}],n=[{id:"glass",label:"Glass",color:"#4fc3f7",icon:"🪟",x:"78%",y:"28%"},{id:"silicon",label:"Silicon",color:"#78909c",icon:"💠",x:"84%",y:"28%"},{id:"silver",label:"Silver",color:"#b0bec5",icon:"🔩",x:"78%",y:"53%"},{id:"copper",label:"Copper",color:"#ff9800",icon:"⚡",x:"84%",y:"53%"}],o=[{label:"Inspection",left:"22%",bottom:"52%",w:110,h:80,color:"#546e7a"},{label:"Dismantling",left:"38%",bottom:"40%",w:130,h:100,color:"#455a64"},{label:"Chemical",left:"52%",bottom:"55%",w:100,h:70,color:"#37474f",radius:"40% 40% 8px 8px"},{label:"Thermal",left:"63%",bottom:"40%",w:100,h:120,color:"#4e342e"},{label:"Separation",left:"74%",bottom:"55%",w:160,h:80,color:"#1a237e"}],l=[{left:"8%",bottom:"42%"},{left:"28%",bottom:"50%"},{left:"40%",bottom:"46%"},{left:"55%",bottom:"52%"},{left:"66%",bottom:"40%"}],s=(e,t,i)=>Math.max(t,Math.min(i,e)),d=({style:e,children:i})=>(0,t.jsx)("div",{style:{position:"absolute",width:120,height:70,background:"linear-gradient(45deg,#1a237e,#283593)",borderRadius:8,boxShadow:"0 8px 20px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",zIndex:20,transition:"all 0.8s cubic-bezier(0.34,1.56,0.64,1)",...e},children:i??"☀️"}),c=({style:e,color:i="#e74c3c",darkColor:r="#c0392b"})=>(0,t.jsxs)("div",{style:{position:"absolute",width:200,height:90,background:`linear-gradient(to right,${i},${r})`,borderRadius:"12px 12px 4px 4px",boxShadow:"0 8px 20px rgba(0,0,0,0.4)",transition:"all 1.5s ease-in-out",zIndex:15,...e},children:[(0,t.jsx)("div",{style:{position:"absolute",top:-44,left:18,width:72,height:44,background:r,borderRadius:"8px 8px 0 0"},children:(0,t.jsx)("div",{style:{position:"absolute",top:8,left:8,width:36,height:22,background:"linear-gradient(135deg,#3498db,#2980b9)",borderRadius:4}})}),[28,148].map(e=>(0,t.jsx)("div",{style:{position:"absolute",bottom:-13,left:e,width:30,height:30,background:"radial-gradient(circle,#2c3e50,#1a1a2e)",borderRadius:"50%",border:"3px solid #34495e"}},e))]}),p=({step:e})=>{let r=(0,i.useRef)(null),[a,p]=(0,i.useState)(0),g=(0,i.useRef)(null),m=(0,i.useRef)(null);(0,i.useEffect)(()=>{let e=t=>{null===m.current&&(m.current=t),p(12*Math.sin((t-m.current)/700)),g.current=requestAnimationFrame(e)};return g.current=requestAnimationFrame(e),()=>{null!==g.current&&cancelAnimationFrame(g.current)}},[]);let u=1===e,b=8===e,h=s(e-1,0,l.length-1),x=l[h],f=Math.max(.5,1-(e>=4?(e-4)*.05:0));return(0,t.jsxs)("div",{className:"scene-container",style:{position:"absolute",inset:0,overflow:"hidden"},children:[(0,t.jsx)("div",{style:{position:"absolute",bottom:"35%",left:"5%",width:"88%",height:44,background:"linear-gradient(to bottom,#7f8c8d,#95a5a6)",borderRadius:6,overflow:"hidden",boxShadow:"0 4px 12px rgba(0,0,0,0.3)"},children:(0,t.jsx)("div",{className:"conveyor-belt"})}),o.map(e=>(0,t.jsx)("div",{style:{position:"absolute",left:e.left,bottom:e.bottom,width:e.w,height:e.h,background:`linear-gradient(to bottom,${e.color},${e.color}dd)`,borderRadius:e.radius??8,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 6px 16px rgba(0,0,0,0.4)",border:"1px solid rgba(255,255,255,0.08)"},children:(0,t.jsx)("span",{style:{color:"rgba(255,255,255,0.85)",fontSize:"0.7rem",fontWeight:700,letterSpacing:1,textTransform:"uppercase",textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:e.label})},e.label)),(0,t.jsx)(c,{style:{bottom:"28%",left:u?"2%":"-30%",opacity:+!!u},color:"#e74c3c",darkColor:"#c0392b"}),e<6&&(0,t.jsx)("div",{ref:r,style:{position:"absolute",...x},children:(0,t.jsx)(d,{style:{position:"relative",transform:`translateY(${2===e?.5*a:0}px) rotate(${2===e?2*a:0}deg) scale(${f})`,filter:e>=5?`hue-rotate(${3*a}deg) brightness(1.2)`:"none"},children:"☀️"})}),e>=6&&n.map((i,r)=>(0,t.jsx)("div",{style:{position:"absolute",left:i.x,top:i.y,width:56,height:40,background:`linear-gradient(45deg,${i.color}88,${i.color})`,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem",boxShadow:7===e?`0 0 20px 6px ${i.color}, 0 4px 12px rgba(0,0,0,0.3)`:"0 4px 12px rgba(0,0,0,0.3)",transform:`translateY(${a*(r%2==0?1:-1)}px)`,transition:"box-shadow 0.5s ease",animation:"fadeScaleIn 0.5s ease forwards",animationDelay:`${.1*r}s`,opacity:0},children:i.icon},i.id)),(0,t.jsx)(c,{style:{bottom:"28%",right:b?"2%":"-30%",opacity:+!!b},color:"#4caf50",darkColor:"#388e3c"}),(0,t.jsx)("div",{style:{position:"absolute",top:60,left:0,right:0,display:"flex",justifyContent:"space-around",pointerEvents:"none"},children:Array.from({length:6},(e,i)=>(0,t.jsx)("div",{style:{width:32,height:32,borderRadius:"50%",background:"radial-gradient(circle,#ffeb3b,#ff9800)",boxShadow:`0 0 ${16+6*Math.sin(a/8+i)}px ${8+3*Math.sin(a/8+i)}px rgba(255,235,59,0.6)`}},i))})]})},g=({step:e,isActive:i,isPast:r,onClick:a})=>(0,t.jsxs)("div",{onClick:a,role:"button",tabIndex:0,onKeyDown:e=>"Enter"===e.key&&a(),"aria-label":`Go to step ${e.id}: ${e.title}`,"aria-current":i?"step":void 0,style:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",zIndex:2,minWidth:60,flex:1,outline:"none"},onMouseEnter:e=>e.currentTarget.style.transform="translateY(-4px)",onMouseLeave:e=>e.currentTarget.style.transform="none",children:[(0,t.jsx)("div",{style:{width:48,height:48,borderRadius:"50%",background:i?"linear-gradient(135deg,#0a4f70,#1a7ca3)":"white",color:i?"white":"#0a4f70",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:"1rem",boxShadow:i?"0 4px 16px rgba(10,79,112,0.4)":"0 4px 12px rgba(10,79,112,0.12)",border:i?"2px solid #ff9800":"2px solid rgba(10,79,112,0.1)",marginBottom:10,transition:"all 0.3s"},children:r?"✓":e.id}),(0,t.jsx)("div",{style:{fontSize:"0.65rem",fontWeight:600,color:i?"#0a4f70":"#5a6c7d",textAlign:"center",lineHeight:1.3,maxWidth:64,transition:"color 0.3s"},children:e.label})]}),m=({step:e,isActive:i,onClick:r})=>(0,t.jsxs)("div",{onClick:r,role:"button",tabIndex:0,onKeyDown:e=>"Enter"===e.key&&r(),"aria-label":`${e.number}: ${e.title}`,style:{background:"white",borderRadius:20,padding:"32px 28px",boxShadow:i?"0 20px 45px rgba(10,79,112,0.2)":"0 12px 30px rgba(10,79,112,0.08)",transform:i?"translateY(-12px)":"none",transition:"all 0.4s ease",border:i?"2px solid rgba(10,79,112,0.2)":"1px solid rgba(10,79,112,0.07)",cursor:"pointer",position:"relative",overflow:"hidden",outline:"none"},onMouseEnter:e=>{i||(e.currentTarget.style.transform="translateY(-6px)")},onMouseLeave:e=>{e.currentTarget.style.transform=i?"translateY(-12px)":"none"},children:[(0,t.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,height:5,background:`linear-gradient(to right,${e.color},${e.accentColor})`}}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:22},children:[(0,t.jsx)("div",{style:{width:64,height:64,background:`linear-gradient(135deg,${e.color},${e.accentColor})`,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:18,fontSize:"1.8rem",boxShadow:`0 8px 20px ${e.color}44`,flexShrink:0},children:e.icon}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:"0.8rem",color:"#ff9800",fontWeight:700,letterSpacing:1,marginBottom:4},children:e.number}),(0,t.jsx)("div",{style:{fontSize:"1.15rem",color:"#0a4f70",fontWeight:700,lineHeight:1.2},children:e.title})]})]}),(0,t.jsx)("p",{style:{color:"#5a6c7d",marginBottom:20,fontSize:"0.92rem",lineHeight:1.65},children:e.description}),(0,t.jsx)("ul",{style:{listStyle:"none",margin:0,padding:0},children:e.features.map(e=>(0,t.jsxs)("li",{style:{padding:"10px 0",borderBottom:"1px solid rgba(10,79,112,0.08)",display:"flex",alignItems:"center",fontWeight:500,fontSize:"0.88rem",color:"#1a1a2e"},children:[(0,t.jsx)("div",{style:{width:22,height:22,background:"#81c784",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginRight:12,fontSize:"0.7rem",color:"white",fontWeight:700,flexShrink:0},children:"✓"}),e]},e))})]}),u=()=>{let[e,n]=(0,i.useState)(1),[o,l]=(0,i.useState)(!1),d=(0,i.useRef)(null),c=(0,i.useCallback)(()=>{null!==d.current&&(clearInterval(d.current),d.current=null),l(!1)},[]),u=(0,i.useCallback)(e=>{c(),n(s(e,1,8))},[c]);(0,i.useEffect)(()=>{if(o)return d.current=setInterval(()=>{n(e=>e>=8?(c(),8):e+1)},2200),()=>{null!==d.current&&clearInterval(d.current)}},[o,c]);let b=e/8*100,h=r[e-1];return(0,t.jsxs)("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg,#f8fdff 0%,#e6f4ff 100%)",fontFamily:"'Segoe UI',system-ui,sans-serif",color:"#1a1a2e",overflowX:"hidden"},className:"pt-20",children:[(0,t.jsxs)("div",{style:{maxWidth:1400,margin:"0 auto",padding:"20px 16px"},children:[(0,t.jsxs)("header",{style:{textAlign:"center",padding:"52px 40px",background:"linear-gradient(135deg,#0a4f70,#1a7ca3)",color:"white",borderRadius:20,marginBottom:40,boxShadow:"0 20px 40px rgba(10,79,112,0.2)",position:"relative",overflow:"hidden"},className:"page-header",children:[(0,t.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,opacity:.07,backgroundImage:"radial-gradient(circle at 20% 30%,rgba(255,255,255,0.4) 2px,transparent 2px),radial-gradient(circle at 80% 70%,rgba(255,255,255,0.3) 1px,transparent 1px)",backgroundSize:"50px 50px,30px 30px"}}),(0,t.jsxs)("h1",{style:{fontSize:"clamp(1.8rem,4vw,3.2rem)",fontWeight:800,marginBottom:16,textShadow:"0 4px 8px rgba(0,0,0,0.2)",letterSpacing:"-0.5px",position:"relative"},children:[(0,t.jsx)("span",{style:{color:"#ffb74d"},children:"Premium"})," Solar Panel Recycling"]}),(0,t.jsx)("p",{style:{fontSize:"clamp(1rem,1.5vw,1.2rem)",maxWidth:800,margin:"0 auto 32px",fontWeight:300,opacity:.95,lineHeight:1.65,position:"relative"},children:"Experience our state-of-the-art 8-step recycling process with advanced visualization, real-time tracking, and 95% material recovery efficiency."}),(0,t.jsx)("div",{className:"stats-grid",style:{display:"flex",justifyContent:"center",gap:20,flexWrap:"wrap",position:"relative"},children:a.map(e=>(0,t.jsxs)("div",{style:{background:"rgba(255,255,255,0.15)",backdropFilter:"blur(10px)",borderRadius:16,padding:"16px 28px",textAlign:"center",border:"1px solid rgba(255,255,255,0.2)",minWidth:130},children:[(0,t.jsx)("div",{style:{fontSize:"2.2rem",fontWeight:800,background:"linear-gradient(to right,#fff,#ffb74d)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:e.value}),(0,t.jsx)("div",{style:{fontSize:"0.9rem",opacity:.9,fontWeight:500},children:e.label})]},e.label))})]}),(0,t.jsxs)("div",{role:"region","aria-label":"Recycling process animation",className:"scene-wrapper",style:{position:"relative",height:480,background:"linear-gradient(to bottom,#0a2540,#1a3a5f)",borderRadius:20,marginBottom:36,overflow:"hidden",boxShadow:"0 25px 50px rgba(0,0,0,0.25)",border:"1px solid rgba(255,255,255,0.08)"},children:[(0,t.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",bottom:0,width:"100%",height:90,background:"linear-gradient(to top,#2c3e50,#34495e)",boxShadow:"inset 0 10px 20px rgba(0,0,0,0.5)"}}),(0,t.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",top:0,width:"100%",height:68,background:"linear-gradient(to bottom,#2c3e50,#34495e)",boxShadow:"0 6px 24px rgba(0,0,0,0.5)"}}),(0,t.jsx)(p,{step:e}),(0,t.jsxs)("div",{"aria-live":"polite",className:"step-label-overlay",style:{position:"absolute",bottom:110,left:"50%",transform:"translateX(-50%)",background:"rgba(0,0,0,0.55)",backdropFilter:"blur(8px)",borderRadius:12,padding:"10px 28px",color:"white",fontWeight:700,fontSize:"1rem",letterSpacing:1,border:"1px solid rgba(255,255,255,0.1)",whiteSpace:"nowrap"},children:[h.icon," ",h.number," — ",h.title]})]}),(0,t.jsxs)("nav",{"aria-label":"Process steps",className:"step-indicators-nav",style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:28,position:"relative",padding:"0 4px",overflowX:"auto",gap:4},children:[(0,t.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",top:24,left:36,right:36,height:3,background:"rgba(10,79,112,0.12)",zIndex:1}}),r.map(i=>(0,t.jsx)(g,{step:i,isActive:e===i.id,isPast:e>i.id,onClick:()=>u(i.id)},i.id))]}),(0,t.jsx)("div",{role:"progressbar","aria-valuenow":e,"aria-valuemin":1,"aria-valuemax":8,"aria-label":"Recycling process progress",style:{height:12,background:"rgba(10,79,112,0.1)",borderRadius:6,marginBottom:36,overflow:"hidden"},children:(0,t.jsx)("div",{style:{height:"100%",width:`${b}%`,background:"linear-gradient(to right,#0a4f70,#ff9800)",borderRadius:6,transition:"width 0.7s cubic-bezier(0.65,0,0.35,1)",position:"relative",overflow:"hidden"},children:(0,t.jsx)("div",{className:"progress-shine","aria-hidden":"true"})})}),(0,t.jsx)("section",{"aria-label":"Recycling process details",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:28,marginBottom:60},className:"step-cards-grid",children:r.map(i=>(0,t.jsx)(m,{step:i,isActive:e===i.id,onClick:()=>u(i.id)},i.id))})]}),(0,t.jsx)("style",{children:`
        * { box-sizing: border-box; }

        .conveyor-belt {
          width: 200%;
          height: 100%;
          background: repeating-linear-gradient(
            90deg,
            #34495e,
            #34495e 20px,
            #2c3e50 20px,
            #2c3e50 40px
          );
          animation: moveBelt 1.5s linear infinite;
        }

        .progress-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: progressShine 2s infinite;
        }

        @keyframes moveBelt {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes progressShine {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes fadeScaleIn {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }

        /* ── Mobile Responsive Styles ─────────────────────────────────────── */

        @media (max-width: 768px) {
          .page-header {
            padding: 32px 20px !important;
            border-radius: 14px !important;
            margin-bottom: 24px !important;
          }

          .stats-grid {
            gap: 10px !important;
          }

          .stats-grid > div {
            min-width: calc(50% - 10px) !important;
            padding: 12px 16px !important;
            border-radius: 12px !important;
            flex: 1 1 calc(50% - 10px);
          }

          .scene-wrapper {
            height: 280px !important;
            border-radius: 14px !important;
            margin-bottom: 24px !important;
          }

          .step-label-overlay {
            font-size: 0.72rem !important;
            padding: 8px 14px !important;
            bottom: 80px !important;
            letter-spacing: 0.5px !important;
            max-width: 90vw;
            white-space: normal !important;
            text-align: center;
          }

          .step-indicators-nav {
            gap: 2px !important;
            padding: 0 2px !important;
            margin-bottom: 20px !important;
            /* Enable horizontal scroll on very small screens */
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }

          .step-indicators-nav::-webkit-scrollbar {
            display: none;
          }

          .step-indicators-nav > div {
            min-width: 44px !important;
          }

          .step-indicators-nav > div > div:first-child {
            width: 36px !important;
            height: 36px !important;
            font-size: 0.8rem !important;
            margin-bottom: 6px !important;
          }

          .step-indicators-nav > div > div:last-child {
            font-size: 0.55rem !important;
            max-width: 44px !important;
          }

          .step-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            margin-bottom: 40px !important;
          }

          .step-cards-grid > div {
            padding: 24px 18px !important;
            border-radius: 14px !important;
          }
        }

        @media (max-width: 480px) {
          .page-header {
            padding: 24px 16px !important;
          }

          .stats-grid > div {
            min-width: calc(50% - 6px) !important;
            flex: 1 1 calc(50% - 6px);
            padding: 10px 12px !important;
          }

          .scene-wrapper {
            height: 220px !important;
          }

          .step-label-overlay {
            font-size: 0.65rem !important;
            padding: 6px 10px !important;
            bottom: 65px !important;
          }

          .step-indicators-nav > div > div:first-child {
            width: 30px !important;
            height: 30px !important;
            font-size: 0.72rem !important;
          }

          .step-cards-grid > div {
            padding: 20px 14px !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .step-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .scene-wrapper {
            height: 380px !important;
          }
        }
      `})]})},b=[{id:1,number:"STEP 01",label:"Collection",title:"Collection & Transport",icon:"🚛",color:"#0a4f70",accentColor:"#1a7ca3",bgGradient:"linear-gradient(135deg,#0a2540 0%,#0d3d5c 100%)",description:"We collect end-of-life solar panels from your location using specialized vehicles equipped with GPS tracking and safety features.",features:["Free pickup service with scheduling","Safe transportation with cushioning","Real-time tracking system"],sceneEmoji:["🚛","☀️","📍"]},{id:2,number:"STEP 02",label:"Inspection",title:"Inspection & Testing",icon:"🔬",color:"#1a5276",accentColor:"#2471a3",bgGradient:"linear-gradient(135deg,#0d2137 0%,#1a3a5a 100%)",description:"Each panel undergoes thorough inspection and testing to determine the optimal recycling approach and assess material quality.",features:["Comprehensive quality assessment","Advanced component analysis","Detailed data logging"],sceneEmoji:["🔬","☀️","📊"]},{id:3,number:"STEP 03",label:"Dismantling",title:"Dismantling",icon:"⚙️",color:"#154360",accentColor:"#1f618d",bgGradient:"linear-gradient(135deg,#0f2033 0%,#1a3450 100%)",description:"Careful manual and automated disassembly of aluminum frames, junction boxes, wiring, and protective glass layers.",features:["Precision manual separation","Aluminum frame removal","Component sorting by type"],sceneEmoji:["⚙️","🔧","🪛"]},{id:4,number:"STEP 04",label:"Chemical",title:"Chemical Treatment",icon:"⚗️",color:"#0e6655",accentColor:"#17a589",bgGradient:"linear-gradient(135deg,#052e23 0%,#0e4a38 100%)",description:"Advanced chemical processes using eco-friendly solvents to separate silicon cells from glass and encapsulant materials.",features:["Eco-friendly biodegradable solvents","Silicon cell extraction","Purity enhancement process"],sceneEmoji:["⚗️","🧪","💧"]},{id:5,number:"STEP 05",label:"Thermal",title:"Thermal Processing",icon:"🔥",color:"#784212",accentColor:"#d35400",bgGradient:"linear-gradient(135deg,#2d1a06 0%,#4a2a0a 100%)",description:"High-temperature treatment in controlled environments to recover valuable metals and eliminate residual organics.",features:["Precision controlled heating","Silver and copper recovery","Heat energy capture and reuse"],sceneEmoji:["🔥","🌡️","⚡"]},{id:6,number:"STEP 06",label:"Separation",title:"Material Separation",icon:"🔱",color:"#512e5f",accentColor:"#8e44ad",bgGradient:"linear-gradient(135deg,#1f1033 0%,#341a4a 100%)",description:"Advanced mechanical and electrostatic separation techniques to isolate glass, silicon, silver, and copper materials.",features:["Precision mechanical sorting","95%+ material recovery rate","Rigorous quality control"],sceneEmoji:["🔱","🪟","💠"]},{id:7,number:"STEP 07",label:"Purification",title:"Purification",icon:"💎",color:"#145a32",accentColor:"#1e8449",bgGradient:"linear-gradient(135deg,#082414 0%,#0f3b20 100%)",description:"Recovered materials undergo chemical refinement to achieve industry-standard purity levels suitable for manufacturing.",features:["Advanced chemical refinement","Laboratory quality testing","Industry certification"],sceneEmoji:["💎","✨","🔩"]},{id:8,number:"STEP 08",label:"Redistribution",title:"Redistribution",icon:"🚚",color:"#1a5276",accentColor:"#2980b9",bgGradient:"linear-gradient(135deg,#0a1f35 0%,#153452 100%)",description:"Purified materials are packaged and distributed to manufacturers for creating new solar panels and electronic components.",features:["New solar panel manufacturing","Electronic components production","Sustainable building materials"],sceneEmoji:["🚚","📦","♻️"]}],h=({step:e,floatOffset:i})=>(0,t.jsxs)("div",{style:{width:"100%",height:180,background:e.bgGradient,borderRadius:"16px 16px 0 0",position:"relative",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,t.jsx)("div",{style:{position:"absolute",width:120,height:120,borderRadius:"50%",background:`radial-gradient(circle, ${e.accentColor}33, transparent 70%)`,top:"10%",left:"10%",transform:`translate(${.6*i}px, ${.4*i}px)`,transition:"transform 0.05s linear"}}),(0,t.jsx)("div",{style:{position:"absolute",width:80,height:80,borderRadius:"50%",background:`radial-gradient(circle, ${e.color}44, transparent 70%)`,bottom:"10%",right:"10%",transform:`translate(${-(.5*i)}px, ${-(.3*i)}px)`,transition:"transform 0.05s linear"}}),(0,t.jsx)("div",{style:{position:"absolute",bottom:28,left:0,right:0,height:10,background:"rgba(255,255,255,0.08)",overflow:"hidden"},children:(0,t.jsx)("div",{className:"mobile-belt"})}),(0,t.jsx)("div",{style:{display:"flex",alignItems:"center",gap:20,zIndex:2,position:"relative"},children:e.sceneEmoji.map((r,a)=>(0,t.jsx)("div",{style:{fontSize:1===a?"3.2rem":"2rem",transform:`translateY(${i*(a%2==0?1:-1)*.8}px) scale(${1===a?1:.85})`,transition:"transform 0.05s linear",filter:1===a?`drop-shadow(0 0 12px ${e.accentColor})`:"none",background:1===a?`radial-gradient(circle at 50%, ${e.accentColor}22, transparent)`:"none",padding:1===a?"12px":"8px",borderRadius:"50%"},children:r},a))}),(0,t.jsx)("div",{style:{position:"absolute",top:14,left:14,background:"rgba(0,0,0,0.45)",backdropFilter:"blur(8px)",borderRadius:8,padding:"4px 10px",color:"#ffb74d",fontSize:"0.65rem",fontWeight:800,letterSpacing:1.5,border:"1px solid rgba(255,183,77,0.3)"},children:e.number}),(0,t.jsxs)("div",{style:{position:"absolute",bottom:14,left:"50%",transform:"translateX(-50%)",background:"rgba(0,0,0,0.5)",backdropFilter:"blur(8px)",borderRadius:20,padding:"5px 16px",color:"white",fontSize:"0.75rem",fontWeight:700,letterSpacing:.5,border:"1px solid rgba(255,255,255,0.1)",whiteSpace:"nowrap"},children:[e.icon," ",e.title]})]}),x=({total:e,current:i,onSelect:r})=>(0,t.jsx)("div",{style:{display:"flex",alignItems:"center",gap:6,justifyContent:"center",padding:"16px 0"},children:Array.from({length:e},(e,a)=>{let n=a+1,o=n===i,l=n<i;return(0,t.jsx)("button",{onClick:()=>r(n),"aria-label":`Go to step ${n}`,style:{width:o?28:10,height:10,borderRadius:5,background:o?"linear-gradient(to right,#0a4f70,#ff9800)":l?"#1a7ca3":"rgba(10,79,112,0.2)",border:"none",cursor:"pointer",transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)",padding:0,outline:"none"}},n)})}),f=({text:e,color:i})=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"10px 0",borderBottom:"1px solid rgba(10,79,112,0.07)"},children:[(0,t.jsx)("div",{style:{width:22,height:22,borderRadius:"50%",background:i,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.65rem",color:"white",fontWeight:800,flexShrink:0},children:"✓"}),(0,t.jsx)("span",{style:{fontSize:"0.875rem",color:"#1a1a2e",fontWeight:500,lineHeight:1.4},children:e})]}),y=({steps:e,current:r,onSelect:a})=>{let n=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=n.current;if(!e)return;let t=e.querySelector(`[data-step="${r}"]`);if(t){let i=t.offsetLeft-e.clientWidth/2+t.clientWidth/2;e.scrollTo({left:i,behavior:"smooth"})}},[r]),(0,t.jsx)("div",{ref:n,style:{display:"flex",gap:8,overflowX:"auto",padding:"4px 16px 4px",scrollbarWidth:"none",WebkitOverflowScrolling:"touch"},className:"pill-nav",children:e.map(e=>{let i=e.id===r,n=e.id<r;return(0,t.jsxs)("button",{"data-step":e.id,onClick:()=>a(e.id),style:{flexShrink:0,display:"flex",alignItems:"center",gap:6,padding:"7px 14px",borderRadius:20,border:i?`2px solid ${e.accentColor}`:"2px solid rgba(10,79,112,0.12)",background:i?`linear-gradient(135deg,${e.color},${e.accentColor})`:n?"rgba(10,79,112,0.06)":"white",color:i?"white":n?"#1a7ca3":"#5a6c7d",fontWeight:700,fontSize:"0.72rem",cursor:"pointer",transition:"all 0.3s ease",outline:"none",boxShadow:i?`0 4px 14px ${e.color}55`:"0 2px 6px rgba(10,79,112,0.07)",whiteSpace:"nowrap"},children:[(0,t.jsx)("span",{style:{fontSize:"0.9rem"},children:n?"✓":e.icon}),e.label]},e.id)})})},v=()=>{let[e,r]=(0,i.useState)(1),[a,n]=(0,i.useState)(!1),[o,l]=(0,i.useState)(0),[s,d]=(0,i.useState)("right"),[c,p]=(0,i.useState)(!1),g=(0,i.useRef)(null),m=(0,i.useRef)(null),u=(0,i.useRef)(null),v=(0,i.useRef)(null);(0,i.useEffect)(()=>{let e=t=>{u.current||(u.current=t),l(10*Math.sin((t-u.current)/800)),m.current=requestAnimationFrame(e)};return m.current=requestAnimationFrame(e),()=>{m.current&&cancelAnimationFrame(m.current)}},[]);let w=(0,i.useCallback)((t,i)=>{c||t===e||(d(i??(t>e?"right":"left")),p(!0),setTimeout(()=>{r(t),p(!1)},280))},[c,e]),S=(0,i.useCallback)(()=>{e<8&&w(e+1,"right")},[e,w]),j=(0,i.useCallback)(()=>{e>1&&w(e-1,"left")},[e,w]);(0,i.useEffect)(()=>{if(!a){g.current&&clearInterval(g.current);return}return g.current=setInterval(()=>{r(e=>e>=8?(n(!1),8):e+1)},3e3),()=>{g.current&&clearInterval(g.current)}},[a]);let k=b[e-1],C=e/8*100;return(0,t.jsxs)("div",{style:{minHeight:"100vh",background:"linear-gradient(160deg,#f0f8ff 0%,#e2f0fb 100%)",fontFamily:"'Segoe UI', system-ui, sans-serif",color:"#1a1a2e",overflowX:"hidden",maxWidth:480,margin:"0 auto"},className:"pt-20",children:[(0,t.jsxs)("div",{style:{background:"linear-gradient(135deg,#0a4f70,#1a7ca3)",padding:"28px 20px 20px",textAlign:"center",position:"relative",overflow:"hidden"},children:[(0,t.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,opacity:.06,backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",backgroundSize:"24px 24px"}}),(0,t.jsx)("div",{style:{fontSize:"0.7rem",letterSpacing:3,color:"#ffb74d",fontWeight:800,marginBottom:8,position:"relative"},children:"♻️ SOLAR RECYCLING"}),(0,t.jsxs)("h1",{style:{fontSize:"1.55rem",fontWeight:800,color:"white",margin:"0 0 6px",lineHeight:1.2,position:"relative"},children:["8-Step Recycling",(0,t.jsx)("br",{}),(0,t.jsx)("span",{style:{color:"#ffb74d"},children:"Process"})]}),(0,t.jsx)("p",{style:{fontSize:"0.8rem",color:"rgba(255,255,255,0.8)",margin:"0 0 16px",lineHeight:1.5,position:"relative"},children:"95% material recovery · 100% eco-friendly"}),(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8,position:"relative"},children:[{v:"95%",l:"Recovery"},{v:"8",l:"Steps"},{v:"100%",l:"Eco"},{v:"60K+",l:"Panels/yr"}].map(e=>(0,t.jsxs)("div",{style:{background:"rgba(255,255,255,0.12)",borderRadius:10,padding:"8px 4px",border:"1px solid rgba(255,255,255,0.15)"},children:[(0,t.jsx)("div",{style:{fontSize:"1.1rem",fontWeight:800,background:"linear-gradient(to right,#fff,#ffb74d)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:e.v}),(0,t.jsx)("div",{style:{fontSize:"0.6rem",color:"rgba(255,255,255,0.75)",fontWeight:600},children:e.l})]},e.l))})]}),(0,t.jsxs)("div",{style:{background:"white",boxShadow:"0 2px 12px rgba(10,79,112,0.08)",padding:"12px 0 8px",position:"sticky",top:0,zIndex:50},children:[(0,t.jsx)(y,{steps:b,current:e,onSelect:e=>w(e)}),(0,t.jsx)("div",{style:{height:3,background:"rgba(10,79,112,0.08)",margin:"8px 16px 0",borderRadius:2,overflow:"hidden"},children:(0,t.jsx)("div",{style:{height:"100%",width:`${C}%`,background:"linear-gradient(to right,#0a4f70,#ff9800)",borderRadius:2,transition:"width 0.6s cubic-bezier(0.65,0,0.35,1)",position:"relative",overflow:"hidden"},children:(0,t.jsx)("div",{className:"mobile-shine"})})})]}),(0,t.jsxs)("div",{style:{padding:"16px 16px 0",position:"relative"},onTouchStart:e=>{v.current=e.touches[0].clientX},onTouchEnd:e=>{if(null===v.current)return;let t=e.changedTouches[0].clientX-v.current;Math.abs(t)>40&&(t<0&&S(),j()),v.current=null},children:[(0,t.jsxs)("div",{className:`step-card-slide ${c?`slide-out-${s}`:"slide-in"}`,style:{background:"white",borderRadius:20,overflow:"hidden",boxShadow:"0 12px 40px rgba(10,79,112,0.14)",border:"1px solid rgba(10,79,112,0.07)"},children:[(0,t.jsx)(h,{step:k,floatOffset:o}),(0,t.jsxs)("div",{style:{padding:"20px 20px 4px"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:16},children:[(0,t.jsx)("div",{style:{width:52,height:52,borderRadius:"50%",background:`linear-gradient(135deg,${k.color},${k.accentColor})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.6rem",boxShadow:`0 6px 20px ${k.color}44`,flexShrink:0},children:k.icon}),(0,t.jsxs)("div",{style:{flex:1},children:[(0,t.jsx)("div",{style:{fontSize:"0.7rem",color:"#ff9800",fontWeight:800,letterSpacing:1.5,marginBottom:3},children:k.number}),(0,t.jsx)("div",{style:{fontSize:"1.1rem",fontWeight:800,color:"#0a4f70",lineHeight:1.2},children:k.title})]}),(0,t.jsxs)("div",{style:{background:`linear-gradient(135deg,${k.color},${k.accentColor})`,color:"white",borderRadius:10,padding:"4px 10px",fontSize:"0.7rem",fontWeight:800,whiteSpace:"nowrap"},children:[e,"/",8]})]}),(0,t.jsx)("p",{style:{fontSize:"0.875rem",color:"#5a6c7d",lineHeight:1.65,margin:"0 0 16px"},children:k.description}),(0,t.jsx)("div",{style:{marginBottom:8},children:k.features.map(e=>(0,t.jsx)(f,{text:e,color:"#81c784"},e))})]})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:12,margin:"16px 0",alignItems:"center"},children:[(0,t.jsx)("button",{onClick:j,disabled:1===e,style:{flex:1,padding:"13px",borderRadius:14,border:"2px solid rgba(10,79,112,0.15)",background:1===e?"rgba(10,79,112,0.04)":"white",color:1===e?"rgba(10,79,112,0.3)":"#0a4f70",fontWeight:700,fontSize:"0.88rem",cursor:1===e?"default":"pointer",transition:"all 0.2s",outline:"none",boxShadow:1===e?"none":"0 4px 12px rgba(10,79,112,0.1)"},children:"← Previous"}),(0,t.jsx)("button",{onClick:S,disabled:8===e,style:{flex:1,padding:"13px",borderRadius:14,border:"none",background:8===e?"rgba(10,79,112,0.08)":`linear-gradient(135deg,${k.color},${k.accentColor})`,color:8===e?"rgba(10,79,112,0.35)":"white",fontWeight:700,fontSize:"0.88rem",cursor:8===e?"default":"pointer",transition:"all 0.2s",outline:"none",boxShadow:8===e?"none":`0 6px 18px ${k.color}44`},children:"Next →"})]}),(0,t.jsx)(x,{total:8,current:e,onSelect:e=>w(e)}),(0,t.jsxs)("div",{style:{marginTop:8,marginBottom:32,background:"white",borderRadius:20,padding:"20px",boxShadow:"0 8px 24px rgba(10,79,112,0.09)",border:"1px solid rgba(10,79,112,0.07)"},children:[(0,t.jsx)("div",{style:{fontSize:"0.7rem",letterSpacing:2,fontWeight:800,color:"#0a4f70",marginBottom:16,textTransform:"uppercase"},children:"All Steps"}),b.map((i,r)=>{let a=i.id===e,n=i.id<e;return(0,t.jsxs)("button",{onClick:()=>w(i.id),style:{width:"100%",display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderRadius:12,border:a?`2px solid ${i.accentColor}`:"2px solid transparent",background:a?`linear-gradient(135deg,${i.color}11,${i.accentColor}18)`:n?"rgba(10,79,112,0.03)":"transparent",cursor:"pointer",transition:"all 0.25s",outline:"none",textAlign:"left",marginBottom:4*(r<7)},children:[(0,t.jsx)("div",{style:{width:36,height:36,borderRadius:"50%",background:n?"#81c784":a?`linear-gradient(135deg,${i.color},${i.accentColor})`:"rgba(10,79,112,0.08)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:n?"0.9rem":"1.1rem",flexShrink:0,boxShadow:a?`0 4px 12px ${i.color}44`:"none",transition:"all 0.3s"},children:n?"✓":i.icon}),(0,t.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,t.jsx)("div",{style:{fontSize:"0.6rem",fontWeight:800,color:a?i.accentColor:"#9aabba",letterSpacing:1.2,marginBottom:1},children:i.number}),(0,t.jsx)("div",{style:{fontSize:"0.875rem",fontWeight:700,color:a?"#0a4f70":n?"#4a7a95":"#8a9ab0",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:i.title})]}),(0,t.jsx)("div",{style:{fontSize:"0.75rem",color:a?i.accentColor:"rgba(10,79,112,0.25)",fontWeight:700,transition:"all 0.2s"},children:a?"●":"›"})]},i.id)})]})]}),(0,t.jsx)("style",{children:`
        * { box-sizing: border-box; }

        .pill-nav::-webkit-scrollbar { display: none; }

        .mobile-belt {
          width: 200%;
          height: 100%;
          background: repeating-linear-gradient(
            90deg,
            rgba(255,255,255,0.12),
            rgba(255,255,255,0.12) 18px,
            rgba(255,255,255,0.04) 18px,
            rgba(255,255,255,0.04) 36px
          );
          animation: beltMove 1.2s linear infinite;
        }

        .mobile-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          animation: shineMove 2s infinite;
        }

        @keyframes beltMove {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes shineMove {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .slide-in {
          animation: slideIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both;
        }

        .slide-out-right {
          animation: slideOutRight 0.28s ease-in both;
        }

        .slide-out-left {
          animation: slideOutLeft 0.28s ease-in both;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(18px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes slideOutRight {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-24px); }
        }

        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(24px); }
        }
      `})]})};e.s(["default",0,()=>(()=>{let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=window.matchMedia("(max-width: 768px)"),i=()=>t(e.matches);return i(),e.addEventListener("change",i),()=>e.removeEventListener("change",i)},[]),e})()?(0,t.jsx)(v,{}):(0,t.jsx)(u,{})],3862)}]);