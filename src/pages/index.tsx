import Hero from "./components/navbar/Index";
import Navbar from "./components/navbar/Navbar";
export default function Home() {
  return (
    <div className="min-h-svh font-montserratV">
      <header>
        <Hero />
      </header>
      <main>
        {" "}
        <Hero />
      </main>
      <footer></footer>
    </div>
  );
}
