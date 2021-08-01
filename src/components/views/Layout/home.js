import React, { Fragment } from "react";

import { Hero, HomeContent } from "../Login";
import { NavBar, Footer, Loading } from "../Login";
import "../../../App.css";

const Home = () => (
  <Fragment>
    <NavBar />
    <Hero />

    <Footer />
  </Fragment>
);

export default Home;
