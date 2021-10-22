import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: 'flex', alignItems: 'center', color: 'white', scrollMarginBottom:'20px'}}>
          <DiCssdeck size="3rem"/><Span>Portfolio</Span>
        </a>
      </Link>

    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>tech</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>about</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/rukundoronaldo"><AiFillGithub/></SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/rukundo-ronaldo-7a62b6168/"><AiFillLinkedin/></SocialIcons>
    </Div3>
  </Container>
);

export default Header;
