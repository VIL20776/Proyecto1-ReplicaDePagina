import React from 'react';
import '../assets/sass/footer.sass';

export default function Footer() {
  return (
    <div id="footer">
      <p>
        aurweb
        <a href="https://gitlab.archlinux.org/archlinux/aurweb/-/commits/v6.0.25"> aurweb v6.0.25</a>
      </p>
      <p>
        Report issues
        <a href="Report issues here."> here</a>
        .
      </p>
      <p>
        Copyright © 2004-2022 aurweb Development Team.
      </p>
      <p>
        AUR packages are user produced content. Any use of the provided files is at your own risk.
      </p>
    </div>
  );
}
