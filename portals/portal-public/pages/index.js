export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>ConnectionCyberOS - Portal Público</h1>
      <p>Este é o portal público do ConnectionCyberOS.</p>

      <ul>
        <li><a href="/health">Ver status do sistema (/health)</a></li>
        <li><a href="/system">Ver versão do sistema (/system)</a></li>
      </ul>
    </main>
  );
}
