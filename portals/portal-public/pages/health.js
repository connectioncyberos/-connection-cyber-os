'use client';

import { useEffect, useState } from 'react';

export default function HealthPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/core/health")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => {
        console.error("Erro ao buscar /core/health:", err);
        setData({ error: "Falha ao acessar portal-api" });
      });
  }, []);

  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Status do Sistema</h1>

      <pre
        style={{
          background: "#f0f0f0",
          padding: "1rem",
          borderRadius: "8px",
        }}
      >
        {data ? JSON.stringify(data, null, 2) : "Carregando..."}
      </pre>

      <p>
        <a href="/">Voltar</a>
      </p>
    </main>
  );
}
