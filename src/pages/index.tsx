import Header from '../../components/Header';

export default function Home() {
  return (
    <div style={{backdropFilter:"blur(30px)", height: '100vh', backgroundImage: "url('/bg-fond.jpeg')" }}>
      <Header />
    </div>
  );
}
