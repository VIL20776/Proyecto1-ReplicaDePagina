import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './containers/header';
import LeftContent from './containers/leftContent';
import RightContent from './containers/rightContent';
import Footer from './containers/footer';
import './assets/sass/index.sass';

const index = createRoot(document.getElementById('archmain'));
index.render(
  <>
    <Header />
    <div id="content">
      <LeftContent />
      <RightContent />
    </div>
    <Footer />
  </>,
);
