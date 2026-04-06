import { useState, useEffect, useRef } from "react";
import React from "react";

const COLORS = ["#f472b6","#818cf8","#34d399","#fbbf24","#60a5fa","#a78bfa","#f87171","#2dd4bf"];
let _ci = 0;
const nextColor = () => COLORS[_ci++ % COLORS.length];

const ROW1 = [
  { pts: "116.2,402.7 107.2,402.7 101.1,409.1 110.7,409.1", cx: 108.8, cy: 405.9, label: "`", key: "`" },
  { pts: "113.9,409.1 126.2,409.1 130.9,402.7 119.4,402.7", cx: 122.6, cy: 405.9, label: "1", key: "1" },
  { pts: "145.6,402.7 134,402.7 129.2,409.1 141.7,409.1", cx: 137.6, cy: 405.9, label: "2", key: "2" },
  { pts: "160.2,402.7 148.5,402.7 144.6,409.1 157.1,409.1", cx: 152.6, cy: 405.9, label: "3", key: "3" },
  { pts: "174.7,402.7 163,402.7 159.9,409.1 172.4,409.1", cx: 167.5, cy: 405.9, label: "4", key: "4" },
  { pts: "189.2,402.7 177.5,402.7 175.1,409.1 187.7,409.1", cx: 182.4, cy: 405.9, label: "5", key: "5" },
  { pts: "203.6,402.7 192,402.7 190.4,409.1 202.8,409.1", cx: 197.2, cy: 405.9, label: "6", key: "6" },
  { pts: "218,402.7 206.4,402.7 205.7,409.1 218,409.1", cx: 212.0, cy: 405.9, label: "7", key: "7" },
  { pts: "232.1,402.7 220.9,402.7 220.9,409.1 232.9,409.1", cx: 226.7, cy: 405.9, label: "8", key: "8" },
  { pts: "246.2,402.7 234.9,402.7 235.7,409.1 247.8,409.1", cx: 241.2, cy: 405.9, label: "9", key: "9" },
  { pts: "260.4,402.7 249,402.7 250.5,409.1 262.7,409.1", cx: 255.6, cy: 405.9, label: "0", key: "0" },
  { pts: "274.5,402.7 263.1,402.7 265.4,409.1 277.7,409.1", cx: 270.2, cy: 405.9, label: "-", key: "-" },
  { pts: "288.7,402.7 277.3,402.7 280.4,409.1 292.6,409.1", cx: 284.8, cy: 405.9, label: "=", key: "=" },
  { pts: "302.9,402.7 291.6,402.7 295.5,409.1 307.6,409.1", cx: 299.4, cy: 405.9, label: "⌫", key: "Backspace", fs: 5 },
  { pts: "317.1,402.7 305.9,402.7 310.6,409.1 322.6,409.1", cx: 314.1, cy: 405.9, label: "⌫", key: "Backspace", fs: 5 },
  { pts: "325.9,409.1 337.8,409.1 331.7,402.7 320.4,402.7", cx: 328.9, cy: 405.9, label: "⌫", key: "Backspace", fs: 5 },
];
const ROW2 = [
  { pts: "108.7,411.4 98.9,411.4 93.2,417.3 103.6,417.3", cx: 101.1, cy: 414.4, label: "Tab", key: "Tab", fs: 3 },
  { pts: "106.8,417.3 120.1,417.3 124.5,411.4 111.9,411.4", cx: 115.8, cy: 414.4, label: "Q", key: "q" },
  { pts: "140.3,411.4 127.5,411.4 123.2,417.3 136.6,417.3", cx: 131.9, cy: 414.4, label: "W", key: "w" },
  { pts: "156,411.4 143.2,411.4 139.5,417.3 153.1,417.3", cx: 147.9, cy: 414.4, label: "E", key: "e" },
  { pts: "171.6,411.4 158.7,411.4 155.8,417.3 169.4,417.3", cx: 163.9, cy: 414.4, label: "R", key: "r" },
  { pts: "187.1,411.4 174.3,411.4 172.1,417.3 185.7,417.3", cx: 179.8, cy: 414.4, label: "T", key: "t" },
  { pts: "202.6,411.4 189.9,411.4 188.4,417.3 201.8,417.3", cx: 195.7, cy: 414.4, label: "Y", key: "y" },
  { pts: "218,411.4 205.4,411.4 204.7,417.3 218,417.3", cx: 211.5, cy: 414.4, label: "U", key: "u" },
  { pts: "233.1,411.4 220.9,411.4 220.9,417.3 233.9,417.3", cx: 227.2, cy: 414.4, label: "I", key: "i" },
  { pts: "248.3,411.4 236,411.4 236.7,417.3 249.8,417.3", cx: 242.7, cy: 414.4, label: "O", key: "o" },
  { pts: "263.5,411.4 251.1,411.4 252.5,417.3 265.7,417.3", cx: 258.2, cy: 414.4, label: "P", key: "p" },
  { pts: "278.8,411.4 266.3,411.4 268.5,417.3 281.7,417.3", cx: 273.8, cy: 414.4, label: "[", key: "[" },
  { pts: "294,411.4 281.6,411.4 284.5,417.3 297.7,417.3", cx: 289.4, cy: 414.4, label: "]", key: "]" },
  { pts: "309.3,411.4 296.9,411.4 300.5,417.3 313.7,417.3", cx: 305.1, cy: 414.4, label: "\\", key: "\\" },
  { pts: "324.6,411.4 312.3,411.4 316.7,417.3 329.7,417.3", cx: 320.8, cy: 414.4, label: "↵", key: "Enter", fs: 5 },
  { pts: "333,417.3 345.6,417.3 340,411.4 327.9,411.4", cx: 336.6, cy: 414.4, label: "↵", key: "Enter", fs: 5 },
];
const ROW3 = [
  { pts: "101.6,419.6 91,419.6 85.4,425.5 96.5,425.5", cx: 93.6, cy: 422.6, label: "Caps", key: "CapsLock", fs: 2.5 },
  { pts: "99.7,425.5 114.1,425.5 118.4,419.6 104.8,419.6", cx: 109.2, cy: 422.6, label: "A", key: "a" },
  { pts: "135.2,419.6 121.5,419.6 117.1,425.5 131.6,425.5", cx: 126.3, cy: 422.6, label: "S", key: "s" },
  { pts: "151.9,419.6 138.1,419.6 134.5,425.5 149,425.5", cx: 143.4, cy: 422.6, label: "D", key: "d" },
  { pts: "168.6,419.6 154.7,419.6 151.8,425.5 166.4,425.5", cx: 160.4, cy: 422.6, label: "F", key: "f" },
  { pts: "185.1,419.6 171.3,419.6 169.1,425.5 183.7,425.5", cx: 177.3, cy: 422.6, label: "G", key: "g" },
  { pts: "201.6,419.6 187.8,419.6 186.4,425.5 200.8,425.5", cx: 194.2, cy: 422.6, label: "H", key: "h" },
  { pts: "218,419.6 204.4,419.6 203.7,425.5 218,425.5", cx: 211.0, cy: 422.6, label: "J", key: "j" },
  { pts: "234.1,419.6 220.9,419.6 220.9,425.5 234.9,425.5", cx: 227.7, cy: 422.6, label: "K", key: "k" },
  { pts: "250.3,419.6 237,419.6 237.7,425.5 251.8,425.5", cx: 244.2, cy: 422.6, label: "L", key: "l" },
  { pts: "266.6,419.6 253.1,419.6 254.5,425.5 268.7,425.5", cx: 260.7, cy: 422.6, label: ";", key: ";" },
  { pts: "282.8,419.6 269.3,419.6 271.5,425.5 285.7,425.5", cx: 277.3, cy: 422.6, label: "'", key: "'" },
  { pts: "299.1,419.6 285.6,419.6 288.5,425.5 302.7,425.5", cx: 294.0, cy: 422.6, label: "↵", key: "Enter", fs: 5 },
  { pts: "315.4,419.6 302,419.6 305.6,425.5 319.7,425.5", cx: 310.7, cy: 422.6, label: "↵", key: "Enter", fs: 5 },
  { pts: "331.7,419.6 318.4,419.6 322.8,425.5 336.8,425.5", cx: 327.4, cy: 422.6, label: "↵", key: "Enter", fs: 5 },
  { pts: "340.1,425.5 353.5,425.5 347.8,419.6 334.9,419.6", cx: 344.1, cy: 422.6, label: "↵", key: "Enter", fs: 5 },
];
const ROW4 = [
  { pts: "94.5,427.8 83.2,427.8 76.8,434.4 88.7,434.4", cx: 85.8, cy: 431.1, label: "⇧", key: "Shift", fs: 5 },
  { pts: "92,434.4 107.5,434.4 112.4,427.8 97.7,427.8", cx: 102.4, cy: 431.1, label: "Z", key: "z" },
  { pts: "130.2,427.8 115.4,427.8 110.5,434.4 126.1,434.4", cx: 120.5, cy: 431.1, label: "X", key: "x" },
  { pts: "147.9,427.8 133.1,427.8 129,434.4 144.6,434.4", cx: 138.7, cy: 431.1, label: "C", key: "c" },
  { pts: "165.5,427.8 150.7,427.8 147.4,434.4 163.1,434.4", cx: 156.7, cy: 431.1, label: "V", key: "v" },
  { pts: "183.1,427.8 168.3,427.8 165.8,434.4 181.5,434.4", cx: 174.7, cy: 431.1, label: "B", key: "b" },
  { pts: "269.6,427.8 185.8,427.8 184.2,434.4 272,434.4", cx: 227.9, cy: 431.1, label: "SPACE", key: " ", fs: 2.5 },
  { pts: "286.8,427.8 272.3,427.8 274.7,434.4 290.1,434.4", cx: 281.0, cy: 431.1, label: "N", key: "n" },
  { pts: "304.1,427.8 289.6,427.8 292.9,434.4 308.2,434.4", cx: 298.7, cy: 431.1, label: "M", key: "m" },
  { pts: "321.4,427.8 307,427.8 311.1,434.4 326.3,434.4", cx: 316.4, cy: 431.1, label: ",", key: "," },
  { pts: "338.8,427.8 324.5,427.8 329.4,434.4 344.5,434.4", cx: 334.3, cy: 431.1, label: ".", key: "." },
  { pts: "347.8,434.4 362.1,434.4 355.7,427.8 342,427.8", cx: 351.9, cy: 431.1, label: "⇧", key: "Shift", fs: 5 },
];
const ALL_KEYS = [...ROW1, ...ROW2, ...ROW3, ...ROW4];

const MX = 390, MY = 400, MW = 65, MH = 43;
const MCX = MX + MW / 2;
const MBTN_H = MH * 0.42;
const ML_CX = MX + MW * 0.27, MR_CX = MX + MW * 0.73;
const MB_CY = MY + MBTN_H * 0.5;
const MWHEEL_CX = MCX, MWHEEL_TY = MY + 5;

const mouseBody = `M${MX+10},${MY} Q${MX},${MY} ${MX},${MY+14} Q${MX},${MY+MH} ${MCX},${MY+MH} Q${MX+MW},${MY+MH} ${MX+MW},${MY+14} Q${MX+MW},${MY} ${MX+MW-10},${MY} Z`;
const leftBtn   = `M${MX+10},${MY} Q${MX},${MY} ${MX},${MY+14} L${MX},${MY+MBTN_H} L${MCX-1},${MY+MBTN_H} L${MCX-1},${MY} Z`;
const rightBtn  = `M${MCX+1},${MY} L${MCX+1},${MY+MBTN_H} L${MX+MW},${MY+MBTN_H} L${MX+MW},${MY+14} Q${MX+MW},${MY} ${MX+MW-10},${MY} Z`;
const bottomBody= `M${MX},${MY+MBTN_H} Q${MX},${MY+MH} ${MCX},${MY+MH} Q${MX+MW},${MY+MH} ${MX+MW},${MY+MBTN_H} Z`;

const STAND_COLOR   = "#c8a882";
const MONITOR_BORDER= "#732A09";
const SCREEN_BG     = "#1a1a2e";
const KB_BASE       = "#e8d5c0";
const KB_ACCENT     = "#F75454";
const STAIR_LINE    = "#d4956a";

/* ─── Robot sub-component ─── */
function Robot({ lastKey, lastColor, isTyping }) {
  const [bounce, setBounce]         = useState(false);
  const [happy,  setHappy]          = useState(false);
  const [bubble, setBubble]         = useState(false);
  const [arrowOn,setArrowOn]        = useState(false);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [chestCol, setChestCol]     = useState("#34d399");
  const [antennaCol, setAntennaCol] = useState("#f472b6");

  const bubbleTimerRef = useRef(null);

  useEffect(() => {
    if (!lastKey) return;

    // bounce
    setBounce(true);
    setTimeout(() => setBounce(false), 260);

    // happy mouth
    setHappy(true);
    setTimeout(() => setHappy(false), 600);

    // bubble
    setBubble(true);
    if (bubbleTimerRef.current) clearTimeout(bubbleTimerRef.current);
    bubbleTimerRef.current = setTimeout(() => setBubble(false), 900);

    // pupils look down-left toward keyboard
    setPupilOffset({ x: -2, y: 1.5 });
    setTimeout(() => setPupilOffset({ x: 0, y: 0 }), 350);

    // chest + antenna color
    setChestCol(lastColor || "#34d399");
    setAntennaCol(lastColor || "#f472b6");
    setTimeout(() => { setChestCol("#34d399"); setAntennaCol("#f472b6"); }, 500);

    // arrow
    setArrowOn(true);
    setTimeout(() => setArrowOn(false), 700);
  }, [lastKey, lastColor]);

  const getBubbleLabel = (k) => {
    if (!k) return "";
    if (k === "Backspace") return "⌫";
    if (k === "Enter")     return "↵";
    if (k === "Tab")       return "⇥";
    if (k === " ")         return "_";
    if (k === "Shift")     return "⇧";
    return k.toUpperCase();
  };

  return (
    <>
      {/* curved dashed arrow from robot toward keyboard */}
      <defs>
        <marker id="arr-robot" viewBox="0 0 10 10" refX="8" refY="5"
          markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#818cf8"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </marker>
      </defs>
      <path
        d="M 427,370 C 410,385 390,390 330,415"
        fill="none"
        stroke={lastColor || "#818cf8"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="6 4"
        markerEnd="url(#arr-robot)"
        opacity={arrowOn ? 0.9 : 0.25}
        style={{ transition: "opacity 0.4s" }}
      />

      {/* Antenna */}
      <line x1="450" y1="348" x2="450" y2="336" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="450" cy="333" r="3" fill={antennaCol} style={{ transition: "fill 0.15s" }}/>

      {/* Robot body group */}
      <g style={{
        transformOrigin: "450px 390px",
        transform: bounce ? "translateY(-3px)" : "translateY(0)",
        transition: bounce ? "transform 0.13s ease-out" : "transform 0.13s ease-in",
      }}>
        {/* Body */}
        <rect x="430" y="365" width="40" height="30" rx="6" fill="#334155"/>
        <rect x="436" y="371" width="12" height="8" rx="2" fill="#1e293b"/>
        <rect x="452" y="371" width="12" height="8" rx="2" fill="#1e293b"/>
        <circle cx="450" cy="385" r="3" fill={chestCol} style={{ transition: "fill 0.15s" }}/>

        {/* Neck */}
        <rect x="445" y="357" width="10" height="9" rx="2" fill="#475569"/>

        {/* Head */}
        <rect x="427" y="330" width="46" height="30" rx="8" fill="#334155"/>
        {/* Visor */}
        <rect x="432" y="336" width="36" height="16" rx="4" fill="#0f172a"/>

        {/* Left eye */}
        <circle cx="443" cy="344" r="5" fill="#1e3a5f"/>
        <circle cx={443 + pupilOffset.x} cy={344 + pupilOffset.y} r="2.5" fill="#60a5fa"
          style={{ transition: "cx 0.15s, cy 0.15s" }}/>
        <circle cx="444.2" cy="342.8" r="0.8" fill="white" opacity="0.8"/>

        {/* Right eye */}
        <circle cx="457" cy="344" r="5" fill="#1e3a5f"/>
        <circle cx={457 + pupilOffset.x} cy={344 + pupilOffset.y} r="2.5" fill="#60a5fa"
          style={{ transition: "cx 0.15s, cy 0.15s" }}/>
        <circle cx="458.2" cy="342.8" r="0.8" fill="white" opacity="0.8"/>

        {/* Mouth */}
        <path
          d={happy
            ? "M442,352 Q450,358 458,352"
            : "M443,353 Q450,356 457,353"}
          fill="none"
          stroke={happy ? "#34d399" : "#60a5fa"}
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ transition: "d 0.15s, stroke 0.15s" }}
        />

        {/* Ear bolts */}
        <circle cx="427" cy="344" r="3" fill="#475569"/>
        <circle cx="473" cy="344" r="3" fill="#475569"/>

        {/* Arms */}
        <rect x="411" y="368" width="18" height="7" rx="3" fill="#475569"/>
        <rect x="471" y="368" width="18" height="7" rx="3" fill="#475569"/>
        <circle cx="411" cy="371.5" r="4" fill="#334155"/>
        <circle cx="489" cy="371.5" r="4" fill="#334155"/>

        {/* Legs */}
        <rect x="436" y="394" width="8" height="12" rx="3" fill="#475569"/>
        <rect x="456" y="394" width="8" height="12" rx="3" fill="#475569"/>
        <rect x="433" y="404" width="13" height="6" rx="3" fill="#334155"/>
        <rect x="453" y="404" width="13" height="6" rx="3" fill="#334155"/>
      </g>

      {/* Speech bubble */}
      {bubble && (
        <g style={{
          transformOrigin: "408px 311px",
          animation: "bubble-pop 0.25s cubic-bezier(.4,0,.2,1) forwards",
        }}>
          <rect x="382" y="298" width="52" height="26" rx="8"
            fill="#1e293b" stroke="#60a5fa" strokeWidth="1.2"/>
          <polygon points="418,324 428,330 424,324" fill="#1e293b"/>
          <polygon points="418,324 428,330 424,324" fill="none" stroke="#60a5fa" strokeWidth="1.2"/>
          <text x="408" y="311" textAnchor="middle" dominantBaseline="central"
            fontSize="13" fontFamily="'Courier New',monospace"
            fontWeight="700" fill="#f472b6">
            {getBubbleLabel(lastKey)}
          </text>
        </g>
      )}
    </>
  );
}

/* ─── Main component ─── */
export default function KeyboardSVG() {
  const [pressed,    setPressed]    = useState(new Set());
  const [keyColors,  setKeyColors]  = useState({});
  const [mouse,      setMouse]      = useState({ left: false, right: false });
  const [mColors]                   = useState({ left: "#f472b6", right: "#818cf8" });
  const [typedText,  setTypedText]  = useState("");
  const [charColors, setCharColors] = useState([]);
  const [lastKey,    setLastKey]    = useState(null);
  const [lastColor,  setLastColor]  = useState(null);
  // trick to re-trigger robot even on same key press twice
  const [keyTick,    setKeyTick]    = useState(0);

  useEffect(() => {
    const dn = (e) => {
      if (e.key === " " || e.key === "ArrowDown" || e.key === "ArrowUp") e.preventDefault();
      const k = e.key === " " ? " " : e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const col = nextColor();
      setPressed((p) => new Set([...p, k]));
      setKeyColors((p) => ({ ...p, [k]: col }));
      setLastKey(e.key);
      setLastColor(col);
      setKeyTick((t) => t + 1);

      if (e.key === "Backspace") {
        setTypedText((t) => t.slice(0, -1));
        setCharColors((c) => c.slice(0, -1));
      } else if (e.key === "Enter") {
        setTypedText((t) => t + "\n");
        setCharColors((c) => [...c, "#34d399"]);
      } else if (e.key.length === 1) {
        setTypedText((t) => t + e.key);
        setCharColors((c) => [...c, col]);
      }
    };
    const up = (e) => {
      const k = e.key === " " ? " " : e.key.length === 1 ? e.key.toLowerCase() : e.key;
      setPressed((p) => { const n = new Set(p); n.delete(k); return n; });
    };
    window.addEventListener("keydown", dn);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", dn); window.removeEventListener("keyup", up); };
  }, []);

  const Key = ({ k }) => {
    const on  = pressed.has(k.key);
    const col = keyColors[k.key] || "#E84545";
    const fs  = k.fs ?? 3.6;
    return (
      <g style={{
        transformOrigin: `${k.cx}px ${k.cy}px`,
        transform: on ? "scale(0.84) translateY(0.5px)" : "scale(1)",
        transition: "transform .07s cubic-bezier(.4,0,.2,1), filter .07s",
        filter: on ? `drop-shadow(0 0 3px ${col})` : "none",
      }}>
        <polygon points={k.pts} fill="#8B3A3A" opacity="0.5" transform={`translate(0,${on ? 0.2 : 1.1})`}/>
        <polygon points={k.pts} fill={on ? col : "#C94040"}/>
        <polygon points={k.pts} fill="white" opacity={on ? 0.2 : 0.1}/>
        <text x={k.cx} y={k.cy} textAnchor="middle" dominantBaseline="central"
          fontSize={fs} fontWeight="700" fontFamily="'Inter','Segoe UI',sans-serif" fill="#fff"
          style={{ pointerEvents: "none", userSelect: "none" }}>
          {k.label}
        </text>
      </g>
    );
  };

  const renderScreenContent = () => {
    if (typedText.length === 0) {
      return <span style={{ color: "rgba(255,255,255,0.35)" }}>type something...</span>;
    }
    return typedText.split("").map((char, i) => (
      <span key={i} style={{ color: charColors[i] || "#34d399", fontWeight: 700 }}>
        {char === "\n" ? <br /> : char}
      </span>
    ));
  };

  return (
    <>
      <style>{`
        @keyframes blink-cur  { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes bubble-pop { 0%{transform:scale(0.3);opacity:0} 60%{transform:scale(1.15)} 100%{transform:scale(1);opacity:1} }
      `}</style>

      <div style={{
        width: "100%", maxWidth: "540px",
        background: "transparent", color: "white",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        fontFamily: "monospace",
      }}>
        <div style={{ width: "100%" }}>
          <svg viewBox="0 0 500 520" xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}>

            {/* MONITOR BORDER */}
            <path fill={MONITOR_BORDER} d="M349.6,257.1H74c-0.3,0-0.6-0.3-0.6-0.6V58.7c0-0.3,0.3-0.6,0.6-0.6h275.6c0.3,0,0.6,0.3,0.6,0.6v197.8C350.2,256.8,349.9,257.1,349.6,257.1z M74.6,255.9H349V59.3H74.6L74.6,255.9z"/>

            {/* SCREEN */}
            <rect x="74.6" y="59.3" width="274.4" height="196.6" fill={SCREEN_BG} rx="1"/>

            {/* TERMINAL HEADER */}
            <circle cx="90" cy="70" r="2.5" fill="#ff5f57"/>
            <circle cx="98" cy="70" r="2.5" fill="#febc2e"/>
            <circle cx="106" cy="70" r="2.5" fill="#28c840"/>
            <rect x="74.6" y="77" width="274.4" height="0.5" fill="rgba(255,255,255,0.06)"/>

            {/* SCREEN TYPED TEXT */}
            <foreignObject x="74.6" y="84" width="274.4" height="166">
              <div xmlns="http://www.w3.org/1999/xhtml" style={{
                width: "100%", height: "100%",
                padding: "8px 10px 6px 10px",
                fontFamily: "'Courier New', monospace",
                fontSize: "11px", lineHeight: "1.55",
                overflow: "hidden", wordBreak: "break-all",
                whiteSpace: "pre-wrap", boxSizing: "border-box",
              }}>
                <span style={{ color: "#34d399", fontWeight: 700 }}>$ </span>
                {renderScreenContent()}
                <span style={{
                  display: "inline-block", width: "7px", height: "11px",
                  background: "#34d399", verticalAlign: "text-bottom",
                  marginLeft: "1px", borderRadius: "1px",
                  animation: "blink-cur 1s step-end infinite",
                }}/>
              </div>
            </foreignObject>

            {typedText.length === 0 && (
              <text x="211.8" y="230" textAnchor="middle" fontSize="9"
                fontFamily="'Courier New',monospace" fill="rgba(255,255,255,0.2)">
                press any key...
              </text>
            )}

            {/* STAND */}
            <rect x="190.1" y="261.9" fill={STAND_COLOR} width="8.9" height="124.1"/>
            <rect x="222.9" y="261.9" fill={STAND_COLOR} width="8.9" height="124.1"/>
            <polygon fill={STAND_COLOR} points="199,297.8 190.1,297.8 222.9,270.5 231.8,270.5"/>
            <polygon fill={STAND_COLOR} points="199,270.5 190.1,270.5 222.9,297.8 231.8,297.8"/>
            <polygon fill={STAND_COLOR} points="199,305.1 190.1,305.1 222.9,332.4 231.8,332.4"/>
            <polygon fill={STAND_COLOR} points="199,332.4 190.1,332.4 222.9,305.1 231.8,305.1"/>
            <polygon fill={STAND_COLOR} points="199,339.7 190.1,339.7 222.9,367.1 231.8,367.1"/>
            <polygon fill={STAND_COLOR} points="199,367.1 190.1,367.1 222.9,339.7 231.8,339.7"/>

            {/* STAIRS */}
            <path fill={STAIR_LINE} d="M268.6,232.8c-2.1,0-3.8,1.7-3.8,3.8c0,0.3,0,0.6,0.1,0.9l38.5,145.6c0.4,1.7,1.9,2.8,3.7,2.8c2.1,0,3.8-1.7,3.8-3.8c0-0.3,0-0.7-0.1-1l-38.6-145.6C271.8,233.9,270.3,232.8,268.6,232.8z"/>
            <path fill={KB_ACCENT} d="M234.8,251.7h36.6c1.1,0,2.1,0.9,2.1,2.1v0.7c0,1.1-0.9,2.1-2.1,2.1h-36.6c-1.1,0-2.1-0.9-2.1-2.1v-0.7C232.7,252.6,233.6,251.7,234.8,251.7z"/>
            <path fill={KB_ACCENT} d="M241.3,275h36.6c1.1,0,2.1,0.9,2.1,2.1v0.7c0,1.1-0.9,2.1-2.1,2.1h-36.6c-1.1,0-2.1-0.9-2.1-2.1v-0.7C239.2,275.9,240.1,275,241.3,275z"/>
            <path fill={KB_ACCENT} d="M247.7,298.3h36.6c1.1,0,2.1,0.9,2.1,2.1v0.7c0,1.1-0.9,2.1-2.1,2.1h-36.6c-1.1,0-2.1-0.9-2.1-2.1v-0.7C245.7,299.2,246.6,298.3,247.7,298.3z"/>
            <path fill={KB_ACCENT} d="M254.2,321.6h36.6c1.1,0,2.1,0.9,2.1,2.1v0.7c0,1.1-0.9,2.1-2.1,2.1h-36.6c-1.1,0-2.1-0.9-2.1-2.1v-0.7C252.2,322.6,253.1,321.6,254.2,321.6z"/>
            <path fill={KB_ACCENT} d="M260.7,344.9h36.6c1.1,0,2.1,0.9,2.1,2.1v0.7c0,1.1-0.9,2.1-2.1,2.1h-36.6c-1.1,0-2.1-0.9-2.1-2.1V347C258.6,345.9,259.6,344.9,260.7,344.9z"/>
            <path fill={KB_ACCENT} d="M267.2,368.2h36.6c1.1,0,2.1,0.9,2.1,2.1v0.7c0,1.1-0.9,2.1-2.1,2.1h-36.6c-1.1,0-2.1-0.9-2.1-2.1v-0.7C265.1,369.2,266,368.2,267.2,368.2z"/>
            <path fill={STAIR_LINE} d="M228.9,232.8c-2.1,0-3.8,1.7-3.8,3.8c0,0.3,0,0.6,0.1,0.9l38.5,145.6c0.4,1.7,1.9,2.8,3.7,2.8c2.1,0,3.8-1.7,3.8-3.8c0-0.3,0-0.6-0.1-1l-38.5-145.6C232.1,233.9,230.6,232.7,228.9,232.8z"/>

            {/* LIGHTING */}
            <path fill={STAND_COLOR} d="M127.4,63.7h-3.3V48.3c0-2.9,2.4-5.3,5.3-5.3c2.9,0,5.3,2.4,5.3,5.3v4.5h-3.3v-4.5c0-1.1-0.9-2-2-2c-1.1,0-2,0.9-2,2L127.4,63.7z"/>
            <rect x="107.4" y="61" fill={STAND_COLOR} width="41.3" height="11.7"/>
            <polygon fill={KB_ACCENT} points="148.8,72.7 152.1,77.1 152.1,65.4 148.8,61"/>
            <polygon fill={KB_ACCENT} points="107.5,72.7 104.1,77.1 104.1,65.4 107.5,61"/>
            <polygon fill="#e8c9a0" points="104.1,77.1 152.1,77.1 148.8,72.7 107.5,72.7"/>
            <path fill={STAND_COLOR} d="M210.1,63.7h-3.3V48.3c0-2.9,2.4-5.3,5.3-5.3s5.3,2.4,5.3,5.3v4.5h-3.3v-4.5c0-1.1-0.9-2-2-2c-1.1,0-2,0.9-2,2V63.7z"/>
            <rect x="190.1" y="61" fill={STAND_COLOR} width="41.3" height="11.7"/>
            <polygon fill={KB_ACCENT} points="231.5,72.7 234.9,77.1 234.9,65.4 231.5,61"/>
            <polygon fill={KB_ACCENT} points="190.3,72.7 186.9,77.1 186.9,65.4 190.3,61"/>
            <polygon fill="#e8c9a0" points="186.9,77.1 234.9,77.1 231.5,72.7 190.3,72.7"/>
            <path fill={STAND_COLOR} d="M295.3,63.7H292V48.3c0.1-2.9,2.6-5.2,5.5-5c2.7,0.1,4.9,2.3,5,5v4.5h-3.3v-4.5c-0.1-1.1-1-1.9-2.2-1.9c-1,0.1-1.8,0.9-1.9,1.9V63.7z"/>
            <rect x="275.4" y="61" fill={STAND_COLOR} width="41.3" height="11.7"/>
            <polygon fill={KB_ACCENT} points="316.7,72.7 320.1,77.1 320.1,65.4 316.7,61"/>
            <polygon fill={KB_ACCENT} points="275.5,72.7 272.1,77.1 272.1,65.4 275.5,61"/>
            <polygon fill="#e8c9a0" points="272.1,77.1 320.1,77.1 316.7,72.7 275.5,72.7"/>

            {/* KEYBOARD BASE */}
            <polygon fill={KB_BASE} points="102.4,395.9 336.4,395.9 380.6,441 58.2,441"/>
            <rect x="58.2" y="441" fill={KB_ACCENT} width="322.4" height="8.2"/>

            {/* ALL KEYS */}
            {ALL_KEYS.map((k, i) => <Key key={i} k={k} />)}

            {/* ROBOT */}
            <Robot lastKey={lastKey} lastColor={lastColor} isTyping={typedText.length > 0} />

            {/* MOUSE CABLE */}
            <path fill="none" stroke="rgba(100,80,60,0.4)" strokeWidth="1.5" strokeLinecap="round"
              d={`M${MCX},${MY} C${MCX},${MY-16} ${MCX+8},${MY-22} ${MCX+10},${MY-28}`}/>

            {/* MOUSE */}
            <path fill="#2a1a1a" opacity="0.6"
              d={`M${MX+10},${MY+2} Q${MX},${MY+2} ${MX},${MY+16} Q${MX},${MY+MH+2} ${MCX},${MY+MH+2} Q${MX+MW},${MY+MH+2} ${MX+MW},${MY+16} Q${MX+MW},${MY+2} ${MX+MW-10},${MY+2} Z`}/>
            <path fill="#3d1f1f" d={mouseBody}/>
            <path d={leftBtn} fill={mouse.left ? mColors.left : "#c03535"}
              style={{ transition: "fill .08s", filter: mouse.left ? `drop-shadow(0 0 5px ${mColors.left})` : "none" }}/>
            <path d={leftBtn} fill="white" opacity={mouse.left ? 0.15 : 0.05} style={{ pointerEvents: "none" }}/>
            <path d={rightBtn} fill={mouse.right ? mColors.right : "#c03535"}
              style={{ transition: "fill .08s", filter: mouse.right ? `drop-shadow(0 0 5px ${mColors.right})` : "none" }}/>
            <path d={rightBtn} fill="white" opacity={mouse.right ? 0.15 : 0.05} style={{ pointerEvents: "none" }}/>
            <line x1={MCX} y1={MY+1} x2={MCX} y2={MY+MBTN_H} stroke="rgba(0,0,0,0.4)" strokeWidth="1"/>
            <path fill="#4a2020" d={bottomBody}/>
            <rect x={MWHEEL_CX-2.5} y={MWHEEL_TY} width="5" height={MBTN_H-8} rx="2.5" fill="rgba(0,0,0,0.4)"/>
            <rect x={MWHEEL_CX-2.5} y={MWHEEL_TY+2} width="5" height={MBTN_H*0.38} rx="2.5" fill="rgba(255,255,255,0.35)"/>
            <path fill="none"
              stroke={mouse.left ? mColors.left : mouse.right ? mColors.right : "rgba(180,100,80,0.3)"}
              strokeWidth="0.7" d={mouseBody} style={{ transition: "stroke .08s" }}/>
            <text x={ML_CX} y={MB_CY+1} textAnchor="middle" dominantBaseline="central"
              fontSize="3.2" fontWeight="700" fontFamily="Inter,sans-serif"
              fill={mouse.left ? "#fff" : "rgba(255,255,255,0.5)"}
              style={{ pointerEvents: "none" }}>L</text>
            <text x={MR_CX} y={MB_CY+1} textAnchor="middle" dominantBaseline="central"
              fontSize="3.2" fontWeight="700" fontFamily="Inter,sans-serif"
              fill={mouse.right ? "#fff" : "rgba(255,255,255,0.5)"}
              style={{ pointerEvents: "none" }}>R</text>
          </svg>
        </div>
      </div>
    </>
  );
}