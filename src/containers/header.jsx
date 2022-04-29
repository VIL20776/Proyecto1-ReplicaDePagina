import React from 'react';
import ArchNavBarLogo from '../components/header/archnavbarlogo';
import ArchNavBarMenu from '../components/header/archnavbarmenu';
import '../assets/sass/header.sass';

export default function Header() {
  return (
    <div id="archheader">
      <ArchNavBarLogo />
      <ArchNavBarMenu />
    </div>
  );
}
