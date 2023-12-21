import Blogs from "./components/blogs/Blogs";
import FooterBanner from "./components/footerBanner/FooterBanner";
import Galley from "./components/galley/Galley";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Offer from "./components/offers/Offer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Offer />
      <Blogs />
      <Galley />
      <FooterBanner />
    </>
  );
}
