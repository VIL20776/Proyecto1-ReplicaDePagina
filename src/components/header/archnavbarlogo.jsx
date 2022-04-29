import React from 'react';
import aurlogo from '../../assets/aurlogo.png';

export default function ArchNavBarLogo() {
  return (
    <div id="archnavbarlogo">
      <a href="https://aur.archlinux.org/" title="Return to the main page">
        <img src={aurlogo} alt="" />
      </a>
    </div>
  );
}
