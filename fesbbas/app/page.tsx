import React from "react";

import Hero from "./components/HeroSection";
import { Feed } from "./components/Feed";
import Footer from "./components/Footer";

const page = () => {
  return (
    <section>
      <Hero />
      <Feed />
      <Footer />
    </section>
  );
};

export default page;
