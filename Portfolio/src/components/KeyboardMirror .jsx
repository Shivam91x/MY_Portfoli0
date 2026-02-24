import React, { useState } from "react";
import LaptopFrame from "./LaptopFrame";

const DEFAULT_CODE = `console.log("Hello World");`;

export default function LaptopJSPlayground() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState("Hello World");

  const runCode = () => {
    let logs = [];
    const originalLog = console.log;

    console.log = (...args) => logs.push(args.join(" "));

    try {
      new Function(code)();
      setOutput(logs.join("\n") || "(no output)");
    } catch (err) {
      setOutput(`Error: ${err.message}`);
    } finally {
      console.log = originalLog;
    }
  };

  return (
    <div className="mx-auto mt-8">
      <p className="mb-2 text-center text-sm text-gray-600">
        Try editing JavaScript and click <b>Run</b> 👇
      </p>

      <LaptopFrame>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {/* Editor */}
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="h-48 w-full resize-none rounded-lg bg-black p-3 font-mono text-sm text-green-300 outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Output */}
          <div className="relative h-48 w-full overflow-auto rounded-lg bg-black p-3 font-mono text-sm text-green-400 whitespace-pre-wrap">
            {output}
            <span className="ml-1 inline-block h-4 w-[2px] bg-green-400 animate-blink align-middle" />
          </div>
        </div>
      </LaptopFrame>

      <div className="mt-3 flex justify-center gap-2">
        <button
          onClick={runCode}
          className="rounded-md bg-orange-500 px-4 py-1.5 text-sm font-medium text-white hover:bg-orange-600 transition"
        >
          Run ▶
        </button>
      </div>
    </div>
  );
}