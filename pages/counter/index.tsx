import { useState } from 'react';
import { Layout } from '../../components/Layout';
import { Counter } from '../../components/Counter';

export default function () {
    const [count, setCount] = useState(0);
    return (
        <Layout title="Counter">
            <div style={{ height: "20px" }}></div>
            <p>This is '/counter' pages/counter/index.tsx</p>
            <Counter />
        </Layout>
    );
}
