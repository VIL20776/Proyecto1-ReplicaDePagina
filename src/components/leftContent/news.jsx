import React from 'react';

export default function News() {
  return (
    <div id="news">
      <h3>
        <button type="button">Support</button>
        <span className="arrow" />
      </h3>
      <h4>Package Request</h4>
      <div>
        <p>
          There are three types of requests that can be filed in the Package
          Actions box on the package details page:
        </p>
        <ul>
          <li>
            <em>Orphan Request</em>
            : Request a package to be disowned, e.g. when the maintainer
            is inactive and the package has been flagged out-of-date for a long time.
          </li>
          <li>
            <em>Deletion Request</em>
            : Request a package to be removed from the Arch User Repository.
            Please do not use this if a package is broken and can be fixed easily.
            Instead, contact the package maintainer and file orphan request if necessary.
          </li>
          <li>
            <em>Merge Request</em>
            : Request a package to be merged into another one.
            Can be used when a package needs to be renamed or replaced by a split package.
          </li>
        </ul>
        <p>
          If you want to discuss a request, you can use the
          <a href="https://mailman.archlinux.org/mailman/listinfo/aur-requests"> aur-requests </a>
          mailing list. However, please do not use that list to file requests.
        </p>
      </div>
      <h4>Submitting Packages</h4>
      <div>
        <p>
          Git over SSH is now used to submit packages to the AUR. See the
          <a href="https://wiki.archlinux.org/title/Arch_User_Repository#Submitting_packages"> Submitting packages </a>
          section of the Arch User Repository ArchWiki page for more details.
        </p>
        <p>The following SSH fingerprints are used for the AUR:</p>
        <ul>
          <li>
            <code>Ed25519</code>
            :
            <code> SHA256:RFzBCUItH9LZS0cKB5UE6ceAYhBD5C8GeOBip8Z11+4</code>
          </li>
          <li>
            <code>ECDSA</code>
            :
            <code> SHA256:uTa/0PndEgPZTf76e1DFqXKJEXKsn7m9ivhLQtzGOCI</code>
          </li>
          <li>
            <code>RSA</code>
            :
            <code> SHA256:5s5cIyReIfNNVGRFdDbe3hdYiI5OelHGpw2rOUud3Q8</code>
          </li>
        </ul>
      </div>
      <h4>Discussion</h4>
      <div>
        <p>
          General discussion regarding the Arch User Repository (AUR) and Trusted User
          structure takes place on
          <a href="https://mailman.archlinux.org/mailman/listinfo/aur-general"> aur-general</a>
          . For discussion relating to the development of the AUR web interface, use the
          <a href="https://mailman.archlinux.org/mailman/listinfo/aur-dev"> aur-dev </a>
          mailing list.
        </p>
      </div>
      <h4>Bug Report</h4>
      <div>
        <p>
          If you find a bug in the AUR web interface, please fill out a bug report
          on our
          <a href="https://gitlab.archlinux.org/archlinux/aurweb/-/issues"> bug tracker</a>
          . Use the tracker to report bugs in the AUR web interface
          <strong> only</strong>
          . To report packaging bugs contact the package maintainer or leave a comment
          on the appropriate package page.
        </p>
      </div>
    </div>
  );
}
