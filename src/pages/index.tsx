import Hero from "./view/Hero";
import Navbar from "./components/navbar/Navbar";
import Content1 from "./components/content/Content1";
import Content2 from "./components/content/Content2";
import Content3 from "./components/content/Content3";
import Content4 from "./components/content/Content4";
import ChelseaCart from "./components/Cart/ChelseaCart";
import CardView from "./view/CardView";
export default function Home() {
  return (
    <div className="min-h-svh font-montserratV ">
      <header>
        <Hero />
      </header>
      <main>
        {" "}
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
        <CardView />
      </main>
      <footer></footer>
    </div>
  );
}
