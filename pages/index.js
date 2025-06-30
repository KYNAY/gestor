import Link from 'next/link';
export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Roboto, sans-serif' }}>
      <h1>Bem-vindo à Calculadora de Remuneração</h1>
      <Link href="/pagamento"><a style={{ color: '#6200ee' }}>Ir para a Calculadora</a></Link>
    </div>
  );
}
