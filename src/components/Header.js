import React from 'react';
import '../styles/components/header.scss';

const Header = () => {
  return (
    <header className="header">
      <section className="header__bcg"></section>
      <section className="header__content">
        <div className="header__icon">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.465l-2.667-4H20l.001 4zM9.536 9 6.869 5h2.596l2.667 4H9.536zm5 0-2.667-4h2.596l2.667 4h-2.596zM4 5h.465l2.667 4H4V5zm0 14v-8h16l.002 8H4z"></path><path d="m10 18 5.5-3-5.5-3z"></path></svg>
        </div>
        <p className="header__title">
          Movie List
        </p>
      </section>
    </header>
  );
};

export default Header;