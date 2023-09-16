import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

import '../style/about.scss';

const AboutSidebar = ({ avatar, avatarText }) => (
  <div className="about-text">
    {/*<div className="avatar" />*/}
    <GatsbyImage image={avatar} alt="Photo of my beautiful face" />

    {
      avatarText ? (
        <div className="avatar-text">{avatarText}</div>
      ) : null
    }
  </div>
);

export default AboutSidebar;
