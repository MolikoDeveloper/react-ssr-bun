import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    }

    const res = () => {
        setCount(count - 1);
    }

    return (
        <div className="flex">
            <button
                onClick={res}
                className="cursor-pointer border-none w-5">-</button>
            <span
                className="pl-3 pr-3 text-xl font-mono"
            >{count}</span>
            <button
                onClick={add}
                className="cursor-pointer border-none w-5">+</button>
        </div>
    );
}
