import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Yash Tiwari's personal website. India based IIT graduate, "
    + 'Assistant Manager - Data Science at Cars24'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this</Link></h2>
          <p>
            A developer with product mindset and research capabilities.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
