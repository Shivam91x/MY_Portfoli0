import { useState, useEffect } from "react";
import React from 'react'

const COLORS = ["#f472b6","#818cf8","#34d399","#fbbf24","#60a5fa","#a78bfa","#f87171","#2dd4bf"];
let _ci = 0;
const nextColor = () => COLORS[_ci++ % COLORS.length];

// ── ALL 60 KEYBOARD KEYS (4 rows, sorted L→R) ────────────────────────────
const ROW1 = [
  { pts:"116.2,402.7 107.2,402.7 101.1,409.1 110.7,409.1", cx:108.8,cy:405.9,label:"`",  key:"`"         },
  { pts:"113.9,409.1 126.2,409.1 130.9,402.7 119.4,402.7", cx:122.6,cy:405.9,label:"1",  key:"1"         },
  { pts:"145.6,402.7 134,402.7 129.2,409.1 141.7,409.1",   cx:137.6,cy:405.9,label:"2",  key:"2"         },
  { pts:"160.2,402.7 148.5,402.7 144.6,409.1 157.1,409.1", cx:152.6,cy:405.9,label:"3",  key:"3"         },
  { pts:"174.7,402.7 163,402.7 159.9,409.1 172.4,409.1",   cx:167.5,cy:405.9,label:"4",  key:"4"         },
  { pts:"189.2,402.7 177.5,402.7 175.1,409.1 187.7,409.1", cx:182.4,cy:405.9,label:"5",  key:"5"         },
  { pts:"203.6,402.7 192,402.7 190.4,409.1 202.8,409.1",   cx:197.2,cy:405.9,label:"6",  key:"6"         },
  { pts:"218,402.7 206.4,402.7 205.7,409.1 218,409.1",     cx:212.0,cy:405.9,label:"7",  key:"7"         },
  { pts:"232.1,402.7 220.9,402.7 220.9,409.1 232.9,409.1", cx:226.7,cy:405.9,label:"8",  key:"8"         },
  { pts:"246.2,402.7 234.9,402.7 235.7,409.1 247.8,409.1", cx:241.2,cy:405.9,label:"9",  key:"9"         },
  { pts:"260.4,402.7 249,402.7 250.5,409.1 262.7,409.1",   cx:255.6,cy:405.9,label:"0",  key:"0"         },
  { pts:"274.5,402.7 263.1,402.7 265.4,409.1 277.7,409.1", cx:270.2,cy:405.9,label:"-",  key:"-"         },
  { pts:"288.7,402.7 277.3,402.7 280.4,409.1 292.6,409.1", cx:284.8,cy:405.9,label:"=",  key:"="         },
  { pts:"302.9,402.7 291.6,402.7 295.5,409.1 307.6,409.1", cx:299.4,cy:405.9,label:"⌫", key:"Backspace", fs:5 },
  { pts:"317.1,402.7 305.9,402.7 310.6,409.1 322.6,409.1", cx:314.1,cy:405.9,label:"⌫", key:"Backspace", fs:5 },
  { pts:"325.9,409.1 337.8,409.1 331.7,402.7 320.4,402.7", cx:328.9,cy:405.9,label:"⌫", key:"Backspace", fs:5 },
];
const ROW2 = [
  { pts:"108.7,411.4 98.9,411.4 93.2,417.3 103.6,417.3",   cx:101.1,cy:414.4,label:"Tab",key:"Tab",      fs:3   },
  { pts:"106.8,417.3 120.1,417.3 124.5,411.4 111.9,411.4", cx:115.8,cy:414.4,label:"Q",  key:"q"         },
  { pts:"140.3,411.4 127.5,411.4 123.2,417.3 136.6,417.3", cx:131.9,cy:414.4,label:"W",  key:"w"         },
  { pts:"156,411.4 143.2,411.4 139.5,417.3 153.1,417.3",   cx:147.9,cy:414.4,label:"E",  key:"e"         },
  { pts:"171.6,411.4 158.7,411.4 155.8,417.3 169.4,417.3", cx:163.9,cy:414.4,label:"R",  key:"r"         },
  { pts:"187.1,411.4 174.3,411.4 172.1,417.3 185.7,417.3", cx:179.8,cy:414.4,label:"T",  key:"t"         },
  { pts:"202.6,411.4 189.9,411.4 188.4,417.3 201.8,417.3", cx:195.7,cy:414.4,label:"Y",  key:"y"         },
  { pts:"218,411.4 205.4,411.4 204.7,417.3 218,417.3",     cx:211.5,cy:414.4,label:"U",  key:"u"         },
  { pts:"233.1,411.4 220.9,411.4 220.9,417.3 233.9,417.3", cx:227.2,cy:414.4,label:"I",  key:"i"         },
  { pts:"248.3,411.4 236,411.4 236.7,417.3 249.8,417.3",   cx:242.7,cy:414.4,label:"O",  key:"o"         },
  { pts:"263.5,411.4 251.1,411.4 252.5,417.3 265.7,417.3", cx:258.2,cy:414.4,label:"P",  key:"p"         },
  { pts:"278.8,411.4 266.3,411.4 268.5,417.3 281.7,417.3", cx:273.8,cy:414.4,label:"[",  key:"["         },
  { pts:"294,411.4 281.6,411.4 284.5,417.3 297.7,417.3",   cx:289.4,cy:414.4,label:"]",  key:"]"         },
  { pts:"309.3,411.4 296.9,411.4 300.5,417.3 313.7,417.3", cx:305.1,cy:414.4,label:"\\", key:"\\"        },
  { pts:"324.6,411.4 312.3,411.4 316.7,417.3 329.7,417.3", cx:320.8,cy:414.4,label:"↵",  key:"Enter",    fs:5  },
  { pts:"333,417.3 345.6,417.3 340,411.4 327.9,411.4",     cx:336.6,cy:414.4,label:"↵",  key:"Enter",    fs:5  },
];
const ROW3 = [
  { pts:"101.6,419.6 91,419.6 85.4,425.5 96.5,425.5",      cx:93.6, cy:422.6,label:"Caps",key:"CapsLock",fs:2.5},
  { pts:"99.7,425.5 114.1,425.5 118.4,419.6 104.8,419.6",  cx:109.2,cy:422.6,label:"A",   key:"a"        },
  { pts:"135.2,419.6 121.5,419.6 117.1,425.5 131.6,425.5", cx:126.3,cy:422.6,label:"S",   key:"s"        },
  { pts:"151.9,419.6 138.1,419.6 134.5,425.5 149,425.5",   cx:143.4,cy:422.6,label:"D",   key:"d"        },
  { pts:"168.6,419.6 154.7,419.6 151.8,425.5 166.4,425.5", cx:160.4,cy:422.6,label:"F",   key:"f"        },
  { pts:"185.1,419.6 171.3,419.6 169.1,425.5 183.7,425.5", cx:177.3,cy:422.6,label:"G",   key:"g"        },
  { pts:"201.6,419.6 187.8,419.6 186.4,425.5 200.8,425.5", cx:194.2,cy:422.6,label:"H",   key:"h"        },
  { pts:"218,419.6 204.4,419.6 203.7,425.5 218,425.5",     cx:211.0,cy:422.6,label:"J",   key:"j"        },
  { pts:"234.1,419.6 220.9,419.6 220.9,425.5 234.9,425.5", cx:227.7,cy:422.6,label:"K",   key:"k"        },
  { pts:"250.3,419.6 237,419.6 237.7,425.5 251.8,425.5",   cx:244.2,cy:422.6,label:"L",   key:"l"        },
  { pts:"266.6,419.6 253.1,419.6 254.5,425.5 268.7,425.5", cx:260.7,cy:422.6,label:";",   key:";"        },
  { pts:"282.8,419.6 269.3,419.6 271.5,425.5 285.7,425.5", cx:277.3,cy:422.6,label:"'",   key:"'"        },
  { pts:"299.1,419.6 285.6,419.6 288.5,425.5 302.7,425.5", cx:294.0,cy:422.6,label:"↵",   key:"Enter",   fs:5  },
  { pts:"315.4,419.6 302,419.6 305.6,425.5 319.7,425.5",   cx:310.7,cy:422.6,label:"↵",   key:"Enter",   fs:5  },
  { pts:"331.7,419.6 318.4,419.6 322.8,425.5 336.8,425.5", cx:327.4,cy:422.6,label:"↵",   key:"Enter",   fs:5  },
  { pts:"340.1,425.5 353.5,425.5 347.8,419.6 334.9,419.6", cx:344.1,cy:422.6,label:"↵",   key:"Enter",   fs:5  },
];
const ROW4 = [
  { pts:"94.5,427.8 83.2,427.8 76.8,434.4 88.7,434.4",     cx:85.8, cy:431.1,label:"⇧",  key:"Shift",   fs:5  },
  { pts:"92,434.4 107.5,434.4 112.4,427.8 97.7,427.8",     cx:102.4,cy:431.1,label:"Z",   key:"z"        },
  { pts:"130.2,427.8 115.4,427.8 110.5,434.4 126.1,434.4", cx:120.5,cy:431.1,label:"X",   key:"x"        },
  { pts:"147.9,427.8 133.1,427.8 129,434.4 144.6,434.4",   cx:138.7,cy:431.1,label:"C",   key:"c"        },
  { pts:"165.5,427.8 150.7,427.8 147.4,434.4 163.1,434.4", cx:156.7,cy:431.1,label:"V",   key:"v"        },
  { pts:"183.1,427.8 168.3,427.8 165.8,434.4 181.5,434.4", cx:174.7,cy:431.1,label:"B",   key:"b"        },
  { pts:"269.6,427.8 185.8,427.8 184.2,434.4 272,434.4",   cx:227.9,cy:431.1,label:"SPACE",key:" ",      fs:2.5},
  { pts:"286.8,427.8 272.3,427.8 274.7,434.4 290.1,434.4", cx:281.0,cy:431.1,label:"N",   key:"n"        },
  { pts:"304.1,427.8 289.6,427.8 292.9,434.4 308.2,434.4", cx:298.7,cy:431.1,label:"M",   key:"m"        },
  { pts:"321.4,427.8 307,427.8 311.1,434.4 326.3,434.4",   cx:316.4,cy:431.1,label:",",   key:","        },
  { pts:"338.8,427.8 324.5,427.8 329.4,434.4 344.5,434.4", cx:334.3,cy:431.1,label:".",   key:"."        },
  { pts:"347.8,434.4 362.1,434.4 355.7,427.8 342,427.8",   cx:351.9,cy:431.1,label:"⇧",  key:"Shift",   fs:5  },
];
const ALL_KEYS = [...ROW1,...ROW2,...ROW3,...ROW4];

// ── MOUSE GEOMETRY (fits snugly right of keyboard within viewBox) ─────────
// Keyboard right edge ≈ 363, viewBox width = 500
// Mouse body: x 390–455, y 400–443  →  nicely proportioned
const MX=390, MY=400, MW=65, MH=43;
const MCX=MX+MW/2, MCY=MY+MH/2;           // body center
const MBTN_H = MH*0.42;                    // height of button section
const ML_CX=MX+MW*0.27, MR_CX=MX+MW*0.73; // left/right btn centers
const MB_CY=MY+MBTN_H*0.5;                // button row center Y
const MWHEEL_CX=MCX, MWHEEL_TY=MY+5;      // scroll wheel

// Mouse body path (top-rounded, bottom-rounded pill shape)
const mouseBody = `M${MX+10},${MY}
  Q${MX},${MY} ${MX},${MY+14}
  Q${MX},${MY+MH} ${MCX},${MY+MH}
  Q${MX+MW},${MY+MH} ${MX+MW},${MY+14}
  Q${MX+MW},${MY} ${MX+MW-10},${MY} Z`;

// Left button clip (top-left section)
const leftBtn = `M${MX+10},${MY}
  Q${MX},${MY} ${MX},${MY+14}
  L${MX},${MY+MBTN_H}
  L${MCX-1},${MY+MBTN_H}
  L${MCX-1},${MY} Z`;

// Right button clip
const rightBtn = `M${MCX+1},${MY}
  L${MCX+1},${MY+MBTN_H}
  L${MX+MW},${MY+MBTN_H}
  L${MX+MW},${MY+14}
  Q${MX+MW},${MY} ${MX+MW-10},${MY} Z`;

// Bottom body section
const bottomBody = `M${MX},${MY+MBTN_H}
  Q${MX},${MY+MH} ${MCX},${MY+MH}
  Q${MX+MW},${MY+MH} ${MX+MW},${MY+MBTN_H} Z`;

export default function App() {
  const [pressed,    setPressed]    = useState(new Set());
  const [keyColors,  setKeyColors]  = useState({});
  const [mouse,      setMouse]      = useState({ left:false, right:false, scroll:false });
  const [mColors,    setMColors]    = useState({ left:"#f472b6", right:"#818cf8", scroll:"#34d399" });
  const [scrollDir,  setScrollDir]  = useState(0);
  const [lastKey,    setLastKey]    = useState("—");
  const [count,      setCount]      = useState(0);

  // ── Keyboard events ──────────────────────────────────────────────────────
  useEffect(() => {
    const dn = (e) => {
      const k = e.key===" "?" ":e.key.length===1?e.key.toLowerCase():e.key;
      const col = nextColor();
      setLastKey(e.key===" "?"SPACE":e.key.length===1?e.key.toUpperCase():e.key);
      setCount(c=>c+1);
      setPressed(p=>new Set([...p,k]));
      setKeyColors(p=>({...p,[k]:col}));
    };
    const up = (e) => {
      const k = e.key===" "?" ":e.key.length===1?e.key.toLowerCase():e.key;
      setPressed(p=>{const n=new Set(p);n.delete(k);return n;});
    };
    window.addEventListener("keydown",dn);
    window.addEventListener("keyup",up);
    return()=>{window.removeEventListener("keydown",dn);window.removeEventListener("keyup",up);};
  },[]);

  // ── Mouse events ─────────────────────────────────────────────────────────
  useEffect(() => {
    const md = (e) => {
      const col = nextColor();
      setCount(c=>c+1);
      if(e.button===0){
        setMColors(p=>({...p,left:col}));
        setMouse(p=>({...p,left:true}));
        setLastKey("L-Click");
      } else if(e.button===2){
        setMColors(p=>({...p,right:col}));
        setMouse(p=>({...p,right:true}));
        setLastKey("R-Click");
      }
    };
    const mu = (e) => {
      if(e.button===0) setMouse(p=>({...p,left:false}));
      if(e.button===2) setMouse(p=>({...p,right:false}));
    };
    const wh = (e) => {
      e.preventDefault();
      const col=nextColor();
      const dir=e.deltaY>0?1:-1;
      setScrollDir(dir);
      setMColors(p=>({...p,scroll:col}));
      setMouse(p=>({...p,scroll:true}));
      setLastKey(dir>0?"Scroll ↓":"Scroll ↑");
      setCount(c=>c+1);
      setTimeout(()=>setMouse(p=>({...p,scroll:false})),350);
      setTimeout(()=>setScrollDir(0),450);
    };
    const noCtx = (e)=>e.preventDefault();
    window.addEventListener("mousedown",md);
    window.addEventListener("mouseup",mu);
    window.addEventListener("wheel",wh,{passive:false});
    window.addEventListener("contextmenu",noCtx);
    return()=>{
      window.removeEventListener("mousedown",md);
      window.removeEventListener("mouseup",mu);
      window.removeEventListener("wheel",wh);
      window.removeEventListener("contextmenu",noCtx);
    };
  },[]);

  // ── Render a single keyboard key ─────────────────────────────────────────
  const Key = ({k, i}) => {
    const on  = pressed.has(k.key);
    const col = keyColors[k.key] || "#E84545";
    const fs  = k.fs ?? 3.6;
    return (
      <g key={i} style={{
        transformOrigin:`${k.cx}px ${k.cy}px`,
        transform: on ? "scale(0.84) translateY(0.5px)" : "scale(1)",
        transition:"transform .07s cubic-bezier(.4,0,.2,1), filter .07s",
        filter: on ? `drop-shadow(0 0 3px ${col})` : "none",
      }}>
        {/* shadow */}
        <polygon points={k.pts} fill="#550000" opacity="0.6"
          transform={`translate(0,${on?0.2:1.1})`}/>
        {/* face */}
        <polygon points={k.pts} fill={on ? col : "#D94040"}/>
        {/* gloss */}
        <polygon points={k.pts} fill="white" opacity={on?0.18:0.07}/>
        {/* label */}
        <text x={k.cx} y={k.cy} textAnchor="middle" dominantBaseline="central"
          fontSize={fs} fontWeight="700"
          fontFamily="'Inter','Segoe UI',sans-serif"
          fill={on?"#fff":"rgba(255,255,255,0.88)"}
          style={{pointerEvents:"none",userSelect:"none",transition:"fill .07s"}}>
          {k.label}
        </text>
      </g>
    );
  };

  return (
    <div style={{
      maxHeight:"80vh", maxWidth:"40%", background:"#D3D3D3", color:"white",
      display:"flex", flexDirection:"column",
      alignItems:"center", justifyContent:"center",
      fontFamily:"monospace",
    }}>
      <style>{`
        @keyframes scrollFade {
          0%  {opacity:1; transform:translateY(0)}
          100%{opacity:0; transform:translateY(${scrollDir>0?5:-5}px)}
        }
      `}</style>

      {/* ── Stats ─────────────────────────────────────────── */}
      {/* <div style={{display:"flex",gap:14,marginBottom:22}}>
        {[["LAST KEY",lastKey,"#f472b6"],["KEYSTROKES",count,"#818cf8"]].map(([l,v,c])=>(
          <div key={l} style={{
            background:"rgba(255,255,255,0.04)",
            border:"1px solid rgba(255,255,255,0.08)",
            borderRadius:10,padding:"8px 22px",textAlign:"center",minWidth:108,
          }}>
            <div style={{color:"rgba(255,255,255,0.3)",fontSize:9,letterSpacing:"0.15em",marginBottom:3}}>{l}</div>
            <div style={{color:c,fontSize:20,fontWeight:700,minHeight:24}}>{v}</div>
          </div>
        ))}
      </div> */}

      {/* ── SVG ───────────────────────────────────────────── */}
      <div style={{width:"min(600px,99vw)"}}>
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"
          style={{width:"100%",height:"auto",display:"block",overflow:"visible"}}>

          {/* MONITOR */}
          <path fill="#fff" d="M72.4,53.4h278.9c2.2,0,4.1,1.8,4.1,4.1v200.4c0,2.2-1.8,4.1-4.1,4.1H72.4c-2.2,0-4.1-1.8-4.1-4.1V57.4C68.3,55.2,70.1,53.4,72.4,53.4z"/>
          <path fill="#732A09" d="M349.6,257.1H74c-0.3,0-0.6-0.3-0.6-0.6V58.7c0-0.3,0.3-0.6,0.6-0.6h275.6c0.3,0,0.6,0.3,0.6,0.6v197.8C350.2,256.8,349.9,257.1,349.6,257.1z M74.6,255.9H349V59.3H74.6L74.6,255.9z"/>

          {/* STAND */}
          <rect x="190.1" y="261.9" fill="#fff" width="8.9" height="124.1"/>
          <rect x="222.9" y="261.9" fill="#fff" width="8.9" height="124.1"/>
          <polygon fill="#fff" points="199,297.8 190.1,297.8 222.9,270.5 231.8,270.5"/>
          <polygon fill="#fff" points="199,270.5 190.1,270.5 222.9,297.8 231.8,297.8"/>
          <polygon fill="#fff" points="199,305.1 190.1,305.1 222.9,332.4 231.8,332.4"/>
          <polygon fill="#fff" points="199,332.4 190.1,332.4 222.9,305.1 231.8,305.1"/>
          <polygon fill="#fff" points="199,339.7 190.1,339.7 222.9,367.1 231.8,367.1"/>
          <polygon fill="#fff" points="199,367.1 190.1,367.1 222.9,339.7 231.8,339.7"/>

          {/* STAIRS */}
          <path fill="#fff" d="M268.6,232.8c-2.1,0-3.8,1.7-3.8,3.8c0,0.3,0,0.6,0.1,0.9l38.5,145.6c0.4,1.7,1.9,2.8,3.7,2.8c2.1,0,3.8-1.7,3.8-3.8c0-0.3,0-0.7-0.1-1l-38.6-145.6C271.8,233.9,270.3,232.8,268.6,232.8z"/>
          <path fill="#F75454" d="M234.8,251.7h36.6c1.1,0,2.1,0.9,2.1,2.1v0.7c0,1.1-0.9,2.1-2.1,2.1h-36.6c-1.1,0-2.1-0.9-2.1-2.1v-0.7C232.7,252.6,233.6,251.7,234.8,251.7z"/>
          <path fill="#F75454" d="M241.3,275h36.6c1.1,0,2.1,0.9,2.1,2.1v0.7c0,1.1-0.9,2.1-2.1,2.1h-36.6c-1.1,0-2.1-0.9-2.1-2.1v-0.7C239.2,275.9,240.1,275,241.3,275z"/>
          <path fill="#F75454" d="M247.7,298.3h36.6c1.1,0,2.1,0.9,2.1,2.1v0.7c0,1.1-0.9,2.1-2.1,2.1h-36.6c-1.1,0-2.1-0.9-2.1-2.1v-0.7C245.7,299.2,246.6,298.3,247.7,298.3z"/>
          <path fill="#F75454" d="M254.2,321.6h36.6c1.1,0,2.1,0.9,2.1,2.1v0.7c0,1.1-0.9,2.1-2.1,2.1h-36.6c-1.1,0-2.1-0.9-2.1-2.1v-0.7C252.2,322.6,253.1,321.6,254.2,321.6z"/>
          <path fill="#F75454" d="M260.7,344.9h36.6c1.1,0,2.1,0.9,2.1,2.1v0.7c0,1.1-0.9,2.1-2.1,2.1h-36.6c-1.1,0-2.1-0.9-2.1-2.1V347C258.6,345.9,259.6,344.9,260.7,344.9z"/>
          <path fill="#F75454" d="M267.2,368.2h36.6c1.1,0,2.1,0.9,2.1,2.1v0.7c0,1.1-0.9,2.1-2.1,2.1h-36.6c-1.1,0-2.1-0.9-2.1-2.1v-0.7C265.1,369.2,266,368.2,267.2,368.2z"/>
          <path fill="#fff" d="M228.9,232.8c-2.1,0-3.8,1.7-3.8,3.8c0,0.3,0,0.6,0.1,0.9l38.5,145.6c0.4,1.7,1.9,2.8,3.7,2.8c2.1,0,3.8-1.7,3.8-3.8c0-0.3,0-0.6-0.1-1l-38.5-145.6C232.1,233.9,230.6,232.7,228.9,232.8z"/>

          {/* LIGHTING */}
          <path fill="#fff" d="M127.4,63.7h-3.3V48.3c0-2.9,2.4-5.3,5.3-5.3c2.9,0,5.3,2.4,5.3,5.3v4.5h-3.3v-4.5c0-1.1-0.9-2-2-2c-1.1,0-2,0.9-2,2L127.4,63.7z"/>
          <rect x="107.4" y="61" fill="#fff" width="41.3" height="11.7"/>
          <polygon fill="#F75454" points="148.8,72.7 152.1,77.1 152.1,65.4 148.8,61"/>
          <polygon fill="#F75454" points="107.5,72.7 104.1,77.1 104.1,65.4 107.5,61"/>
          <polygon fill="#fff" points="104.1,77.1 152.1,77.1 148.8,72.7 107.5,72.7"/>
          <path fill="#fff" d="M210.1,63.7h-3.3V48.3c0-2.9,2.4-5.3,5.3-5.3s5.3,2.4,5.3,5.3v4.5h-3.3v-4.5c0-1.1-0.9-2-2-2c-1.1,0-2,0.9-2,2V63.7z"/>
          <rect x="190.1" y="61" fill="#fff" width="41.3" height="11.7"/>
          <polygon fill="#F75454" points="231.5,72.7 234.9,77.1 234.9,65.4 231.5,61"/>
          <polygon fill="#F75454" points="190.3,72.7 186.9,77.1 186.9,65.4 190.3,61"/>
          <polygon fill="#fff" points="186.9,77.1 234.9,77.1 231.5,72.7 190.3,72.7"/>
          <path fill="#fff" d="M295.3,63.7H292V48.3c0.1-2.9,2.6-5.2,5.5-5c2.7,0.1,4.9,2.3,5,5v4.5h-3.3v-4.5c-0.1-1.1-1-1.9-2.2-1.9c-1,0.1-1.8,0.9-1.9,1.9V63.7z"/>
          <rect x="275.4" y="61" fill="#fff" width="41.3" height="11.7"/>
          <polygon fill="#F75454" points="316.7,72.7 320.1,77.1 320.1,65.4 316.7,61"/>
          <polygon fill="#F75454" points="275.5,72.7 272.1,77.1 272.1,65.4 275.5,61"/>
          <polygon fill="#fff" points="272.1,77.1 320.1,77.1 316.7,72.7 275.5,72.7"/>

          {/* CHARACTER */}
          <path fill="#F75454" d="M132.5,156.2c3.9,0,6.8,1.5,8.7,8.3c1.8,6.9,7.9,27.6,7.9,27.6s27.4-39,62-39s53.8,21.9,66.5,38c0,0-0.6-25,0.5-26.7c1.1-1.7,3.9-2.5,3.9-2.5l18.2,3.2c1.4,4.2,2.3,8.5,2.6,12.9c0.7,7.5,3.8,35.4-3.5,41.5s-30.6,3.4-33.7,0.8l6.3,36.3H161c0,0,0-18,1-31.5c0,0-17.6,9.2-31.3,0.2c-13.7-9-17.6-57.5-17.8-60.1s5.1-5.7,5.1-5.7L132.5,156.2z"/>

          {/* KEYBOARD BASE */}
          <polygon fill="#fff" points="102.4,395.9 336.4,395.9 380.6,441 58.2,441"/>
          <rect x="58.2" y="441" fill="#F75454" width="322.4" height="8.2"/>

          {/* ── ALL KEYBOARD KEYS ── */}
          {ALL_KEYS.map((k,i)=><Key key={i} k={k} i={i}/>)}

          {/* ══════════════════════
               MOUSE
              ══════════════════════ */}

          {/* Cable */}
          <path fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round"
            d={`M${MCX},${MY} C${MCX},${MY-16} ${MCX+8},${MY-22} ${MCX+10},${MY-28}`}/>

          {/* Mouse shadow/base */}
          <path fill="#0a0404" opacity="0.8"
            d={`M${MX+10},${MY+2}
               Q${MX},${MY+2} ${MX},${MY+16}
               Q${MX},${MY+MH+2} ${MCX},${MY+MH+2}
               Q${MX+MW},${MY+MH+2} ${MX+MW},${MY+16}
               Q${MX+MW},${MY+2} ${MX+MW-10},${MY+2} Z`}/>

          {/* Mouse outer dark body */}
          <path fill="#1c0808" d={mouseBody}/>

          {/* Left button */}
          <path
            d={leftBtn}
            fill={mouse.left ? mColors.left : "#c03535"}
            style={{
              transition:"fill .08s, filter .08s, transform .08s",
              filter: mouse.left?`drop-shadow(0 0 5px ${mColors.left})`:"none",
              transform: mouse.left?"translateY(1px)":"translateY(0)",
              transformOrigin:`${ML_CX}px ${MB_CY}px`,
            }}/>
          {/* Left gloss */}
          <path d={leftBtn} fill="white" opacity={mouse.left?0.15:0.05}
            style={{pointerEvents:"none"}}/>

          {/* Right button */}
          <path
            d={rightBtn}
            fill={mouse.right ? mColors.right : "#c03535"}
            style={{
              transition:"fill .08s, filter .08s, transform .08s",
              filter: mouse.right?`drop-shadow(0 0 5px ${mColors.right})`:"none",
              transform: mouse.right?"translateY(1px)":"translateY(0)",
              transformOrigin:`${MR_CX}px ${MB_CY}px`,
            }}/>
          {/* Right gloss */}
          <path d={rightBtn} fill="white" opacity={mouse.right?0.15:0.05}
            style={{pointerEvents:"none"}}/>

          {/* Divider line */}
          <line x1={MCX} y1={MY+1} x2={MCX} y2={MY+MBTN_H}
            stroke="rgba(0,0,0,0.5)" strokeWidth="1"/>

          {/* Bottom body */}
          <path fill="#2a0d0d" d={bottomBody}/>
          {/* Bottom body inner shine */}
          <path fill="white" opacity="0.03" d={bottomBody}/>

          {/* Scroll wheel track */}
          <rect x={MWHEEL_CX-2.5} y={MWHEEL_TY}
            width="5" height={MBTN_H-8}
            rx="2.5" fill="rgba(0,0,0,0.5)"/>

          {/* Scroll wheel */}
          <rect
            x={MWHEEL_CX-2.5}
            y={mouse.scroll && scrollDir>0
              ? MWHEEL_TY+4
              : mouse.scroll && scrollDir<0
              ? MWHEEL_TY
              : MWHEEL_TY+2}
            width="5"
            height={MBTN_H*0.38}
            rx="2.5"
            fill={mouse.scroll ? mColors.scroll : "rgba(255,255,255,0.4)"}
            style={{
              transition:"fill .1s, y .1s, filter .1s",
              filter: mouse.scroll?`drop-shadow(0 0 3px ${mColors.scroll})`:"none",
            }}/>

          {/* Mouse body outer border */}
          <path fill="none"
            stroke={
              mouse.left  ? mColors.left  :
              mouse.right ? mColors.right :
              mouse.scroll? mColors.scroll:
              "rgba(255,255,255,0.12)"
            }
            strokeWidth="0.7"
            d={mouseBody}
            style={{transition:"stroke .08s"}}/>

          {/* L / R labels */}
          <text x={ML_CX} y={MB_CY+1} textAnchor="middle" dominantBaseline="central"
            fontSize="3.2" fontWeight="700" fontFamily="Inter,sans-serif"
            fill={mouse.left?"#fff":"rgba(255,255,255,0.4)"}
            style={{pointerEvents:"none",transition:"fill .08s"}}>L</text>
          <text x={MR_CX} y={MB_CY+1} textAnchor="middle" dominantBaseline="central"
            fontSize="3.2" fontWeight="700" fontFamily="Inter,sans-serif"
            fill={mouse.right?"#fff":"rgba(255,255,255,0.4)"}
            style={{pointerEvents:"none",transition:"fill .08s"}}>R</text>

          {/* Scroll direction indicator */}
          {scrollDir !== 0 && (
            <text x={MCX+12} y={MY+MBTN_H*0.5}
              textAnchor="middle" dominantBaseline="central"
              fontSize="7" fill={mColors.scroll}
              style={{animation:"scrollFade 0.45s ease-out forwards",pointerEvents:"none"}}>
              {scrollDir>0?"↓":"↑"}
            </text>
          )}

        </svg>
      </div>

      <p style={{color:"rgba(255,255,255,0.15)",fontSize:10,letterSpacing:"0.2em",marginTop:14,textTransform:"uppercase"}}>
        Type · Click · Scroll — everything reacts
      </p>
    </div>
  );
}