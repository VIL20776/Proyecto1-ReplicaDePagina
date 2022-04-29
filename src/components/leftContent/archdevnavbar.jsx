import React from 'react';

export default function ArchDevNavBar() {
  return (
    <div id="archdevnavbar">
      <ul>
        <li>
          <a href="https://aur.archlinux.org/">AUR Home</a>
        </li>
        <li>
          <a href="https://aur.archlinux.org/packages">Packages</a>
        </li>
        <li>
          <a href="https://aur.archlinux.org/register">Register</a>
        </li>
        <li>
          <a href="https://aur.archlinux.org/login?next=/">Login</a>
        </li>
      </ul>
    </div>
  );
}
