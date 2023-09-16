import React from 'react';

import AboutSidebar from './AboutSidebar';

const Main = ({ children, avatar, avatarText }) => (
  <section className="main-block">
    <AboutSidebar
      avatar={avatar}
      avatarText={avatarText}
    />

    <div className="content" id="content">
      {children}
    </div>
  </section>
);

export default Main;
