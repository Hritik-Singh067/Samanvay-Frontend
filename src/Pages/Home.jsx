import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Samanvay  | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      {/* <Departments /> */}
      <MessageForm />
    </>
  );
};

export default Home;
