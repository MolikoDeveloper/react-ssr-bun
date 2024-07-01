import { Counter } from '../../components/Counter';
import { Layout } from '../../components/Layout';

export default function () {
    return (
        <Layout title="Test">
            <Counter />
            <div style={{ height: "20px" }}></div>
            <p>
                <a href="/">Home</a>
            </p>
            <p>
                <a href="/settings">Settings</a>
            </p>
            <p>
                <a href="/test">Test</a>
            </p>
        </Layout>
    );
}
