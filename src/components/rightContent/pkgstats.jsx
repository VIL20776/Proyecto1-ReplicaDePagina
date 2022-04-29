import React from 'react';

export default function PkgStats() {
  return (
    <div id="pkgstats" className="widget box">
      <h3>Statistics</h3>
      <table>
        <tbody>
          <tr>
            <td>Packages</td>
            <td>74255</td>
          </tr>
          <tr>
            <td>Orphan Packages</td>
            <td>8866</td>
          </tr>
          <tr>
            <td>
              Packages added in the past 7 days
            </td>
            <td>234</td>
          </tr>
          <tr>
            <td>
              Packages updated in the past 7 days
            </td>
            <td>1438</td>
          </tr>
          <tr>
            <td>
              Packages updated in the past year
            </td>
            <td>24955</td>
          </tr>
          <tr>
            <td>
              Packages never updated
            </td>
            <td>18094</td>
          </tr>
          <tr>
            <td>
              Registered Users
            </td>
            <td>94788</td>
          </tr>
          <tr>
            <td>
              Trusted Users
            </td>
            <td>62</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
