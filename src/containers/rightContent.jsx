import React from 'react';
import Language from '../components/rightContent/language';
import PkgSearch from '../components/rightContent/pkgsearch';
import PkgUpdates from '../components/rightContent/pkgupdates';
import PkgStats from '../components/rightContent/pkgstats';
import '../assets/sass/rightContent.sass';

export default function RightContent() {
  return (
    <div id="rightContent">
      <Language />
      <PkgSearch />
      <PkgUpdates />
      <PkgStats />
    </div>
  );
}
