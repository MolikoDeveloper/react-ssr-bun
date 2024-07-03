import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);



    return (
        <div className="flex">
            <button
                onClick={() => setCount(count - 1)}
                className="cursor-pointer border-none w-5">-</button>
            <span
                className="pl-3 pr-3 text-xl font-mono"
            >{count}</span>
            <button
                onClick={() => { setCount(count + 1); }}
                className="cursor-pointer border-none w-5">+</button>
        </div>
    );
}
//paddingLeft: "10px", paddingRight: "10px", fontSize: "14pt", fontFamily: "monospace"