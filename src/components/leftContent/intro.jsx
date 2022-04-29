import React from 'react';

export default function Intro() {
  return (
    <div className="box">
      <h2>AUR Home</h2>
      <p>
        Welcome to the AUR! Please read the
        <a href="https://wiki.archlinux.org/title/AUR_User_Guidelines"> AUR User Guidelines </a>
        and
        <a href="https://wiki.archlinux.org/title/AUR_Trusted_User_Guidelines"> AUR TU Guidelines </a>
        for more information. Contributed PKGBUILDs
        <strong> must </strong>
        conform to the
        <a href="https://wiki.archlinux.org/title/Arch_Packaging_Standards"> Arch Packaging Standards </a>
        otherwise they will be deleted! Remember to vote for your favourite
        packages! Some packages may be provided as binaries in [community].
      </p>
      <p id="important">
        DISCLAIMER: AUR packages are user produced content. Any use of the provided
        files is at your own risk.
      </p>
      <p id="readmore">
        <a href="https://wiki.archlinux.org/title/AUR">Learn More...</a>
      </p>
    </div>
  );
}
