import { Counter } from "../Components/Counter";
import { Layout } from "../Components/Layout";

export default function () {
  return (
    <Layout title="Home">
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
