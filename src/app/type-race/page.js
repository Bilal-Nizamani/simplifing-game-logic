"use client";

import React from "react";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import RaceGame from "@/component/home-page/RaceGame";

const typeRace = () => {
  return (
    <div>
      <Navbar />
      <RaceGame />;
      <Footer />
    </div>
  );
};

export default typeRace;
