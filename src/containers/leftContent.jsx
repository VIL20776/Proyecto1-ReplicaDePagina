import React from 'react';
import ArchDevNavBar from '../components/leftContent/archdevnavbar';
import Intro from '../components/leftContent/intro';
import News from '../components/leftContent/news';
import '../assets/sass/leftContent.sass';

export default function LeftContent() {
  return (
    <div id="leftcontent">
      <div className="wrapper">
        <ArchDevNavBar />
        <Intro />
        <News />
      </div>
    </div>
  );
}
