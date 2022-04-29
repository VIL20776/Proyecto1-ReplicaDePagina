import React from 'react';
import rss from '../../assets/rss.svg';
// import interfaz from './api/interface';

export default function PkgUpdates() {
  return (
    <div id="pkgupdates" className="widget box">
      <h3>
        Recent Updates (
        <a href="https://aur.archlinux.org/packages/?SB=l&SO=d">more</a>
        )
      </h3>
      <a className="rss latest" href="https://aur.archlinux.org/rss">
        <img src={rss} alt="AUR Latest Packages RSS Feed" />
      </a>
      <a className="rss" href="https://aur.archlinux.org/rss/modified">
        <img src={rss} alt="AUR Modified Packages RSS Feed" />
      </a>
      <table>
        <tbody>
          <tr>
            <td className="pkg-name">
              <a href="/packages/warsaw-bin">
                warsaw-bin 2.21.2.2-1
              </a>
            </td>
            <td className="pkg-date">
              2022-04-27 21:06 (UTC)
            </td>
          </tr>

          <tr>
            <td className="pkg-name">
              <a href="/packages/gitleaks">
                gitleaks 8.8.3-1
              </a>
            </td>
            <td className="pkg-date">
              2022-04-27 21:00 (UTC)
            </td>
          </tr>

          <tr>
            <td className="pkg-name">
              <a href="/packages/cncjs">
                cncjs 1.9.24-1
              </a>
            </td>
            <td className="pkg-date">
              2022-04-27 20:50 (UTC)
            </td>
          </tr>

          <tr>
            <td className="pkg-name">
              <a href="/packages/64gram-desktop">
                64gram-desktop 1:1.0.34-1
              </a>
            </td>
            <td className="pkg-date">
              2022-04-27 20:41 (UTC)
            </td>
          </tr>

          <tr>
            <td className="pkg-name">
              <a href="/packages/kscript">
                kscript 4.0.0-1
              </a>
            </td>
            <td className="pkg-date">
              2022-04-27 20:25 (UTC)
            </td>
          </tr>

          <tr>
            <td className="pkg-name">
              <a href="/packages/steam-rom-manager-appimage">
                steam-rom-manager-appimage 2.3.30-1
              </a>
            </td>
            <td className="pkg-date">
              2022-04-27 20:23 (UTC)
            </td>
          </tr>

          <tr>
            <td className="pkg-name">
              <a href="/packages/plex-media-server-plexpass">
                plex-media-server-plexpass 1.26.1.5772-1
              </a>
            </td>
            <td className="pkg-date">
              2022-04-27 20:18 (UTC)
            </td>
          </tr>

          <tr>
            <td className="pkg-name">
              <a href="/packages/diaspora-postgresql-git">
                diaspora-postgresql-git 0.7.17.0.r552.g865c36bc8-1
              </a>
            </td>
            <td className="pkg-date">
              2022-04-27 20:14 (UTC)
            </td>
          </tr>

          <tr>
            <td className="pkg-name">
              <a href="/packages/foot-git">
                foot-git 1.12.1-1
              </a>
            </td>
            <td className="pkg-date">
              2022-04-27 20:14 (UTC)
            </td>
          </tr>

          <tr>
            <td className="pkg-name">
              <a href="/packages/foot-themes-git">
                foot-themes-git 1.12.1-1
              </a>
            </td>
            <td className="pkg-date">
              2022-04-27 20:14 (UTC)
            </td>
          </tr>

          <tr>
            <td className="pkg-name">
              <a href="/packages/diaspora-postgresql">
                diaspora-postgresql 0.7.17.0-1
              </a>
            </td>
            <td className="pkg-date">
              2022-04-27 20:14 (UTC)
            </td>
          </tr>

          <tr>
            <td className="pkg-name">
              <a href="/packages/foot-terminfo-git">
                foot-terminfo-git 1.12.1-1
              </a>
            </td>
            <td className="pkg-date">
              2022-04-27 20:13 (UTC)
            </td>
          </tr>

          <tr>
            <td className="pkg-name">
              <a href="/packages/diaspora-mysql-git">
                diaspora-mysql-git 0.7.17.0.r552.g865c36bc8-1
              </a>
            </td>
            <td className="pkg-date">
              2022-04-27 20:13 (UTC)
            </td>
          </tr>

          <tr>
            <td className="pkg-name">
              <a href="/packages/diaspora-mysql">
                diaspora-mysql 0.7.17.0-1
              </a>
            </td>
            <td className="pkg-date">
              2022-04-27 20:12 (UTC)
            </td>
          </tr>

          <tr>
            <td className="pkg-name">
              <a href="/packages/gnome-backgrounds-macos">
                gnome-backgrounds-macos 42.0-0
              </a>
            </td>
            <td className="pkg-date">
              2022-04-27 20:11 (UTC)
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}
