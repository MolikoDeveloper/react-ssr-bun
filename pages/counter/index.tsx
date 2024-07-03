import { useState } from 'react';
import { Layout } from '../../components/Layout';

export default function () {
    const [count, setCount] = useState(0);
    return (
        <Layout title="Counter">
            <div style={{ height: "20px" }}></div>
            <p>This is '/counter' pages/counter/index.tsx</p>
            <div style={{ display: "flex" }}>
                <button style={{ cursor: "pointer", border: "none", borderRadius: "4px", width: "20px", }} onClick={() => setCount(count - 1)}>-</button>
                <span style={{ paddingLeft: "10px", paddingRight: "10px", fontSize: "14pt", fontFamily: "monospace", }}>{count}</span>
                <button style={{ cursor: "pointer", border: "none", borderRadius: "4px", width: "20px", }} onClick={() => { setCount(count + 1); }}>+</button>
            </div>
        </Layout>
    );
}
