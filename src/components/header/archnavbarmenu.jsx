import React from 'react';

export default function ArchNavBarMenu() {
  return (
    <div>
      <ul id="archnavbarmenu">
        <li>
          <a href="https://www.archlinux.org/" title="Arch news, packages, projects and more">Home</a>
        </li>
        <li>
          <a href="https://www.archlinux.org/packages/" title="Arch Package Database">Packages</a>
        </li>
        <li>
          <a href="https://bbs.archlinux.org/" title="Community forums">Forums</a>
        </li>
        <li>
          <a href="https://wiki.archlinux.org/" title="Community documentation">Wiki</a>
        </li>
        <li>
          <a href="https://bugs.archlinux.org/" title="Report and track bugs">Bugs</a>
        </li>
        <li>
          <a href="https://security.archlinux.org/" title="Arch Linux Security Tracker">Security</a>
        </li>
        <li>
          <a id="selected" href="https://aur.archlinux.org/" title="Arch Linux User Repository">AUR</a>
        </li>
        <li>
          <a href="https://www.archlinux.org/download/" title="Get Arch Linux">Download</a>
        </li>
      </ul>
    </div>
  );
}
