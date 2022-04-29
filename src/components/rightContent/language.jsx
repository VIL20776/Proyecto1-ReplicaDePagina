import React from 'react';

export default function Language() {
  return (
    <div id="language">
      <select name="setlang" id="idsetlang">
        <option
          value="ar"
        >
          العربية
        </option>

        <option
          value="ast"
        >
          Asturianu
        </option>

        <option
          value="ca"
        >
          Català
        </option>

        <option
          value="cs"
        >
          Český
        </option>

        <option
          value="da"
        >
          Dansk
        </option>

        <option
          value="de"
        >
          Deutsch
        </option>

        <option
          value="el"
        >
          Ελληνικά
        </option>

        <option
          value="en"
          selected="selected"
        >
          English
        </option>

        <option
          value="es"
        >
          Español
        </option>

        <option
          value="es_419"
        >
          Español (Latinoamérica)
        </option>

        <option
          value="fi"
        >
          Suomi
        </option>

        <option
          value="fr"
        >
          Français
        </option>

        <option
          value="he"
        >
          עברית
        </option>

        <option
          value="hr"
        >
          Hrvatski
        </option>

        <option
          value="hu"
        >
          Magyar
        </option>

        <option
          value="it"
        >
          Italiano
        </option>

        <option
          value="ja"
        >
          日本語
        </option>

        <option
          value="nb"
        >
          Norsk
        </option>

        <option
          value="nl"
        >
          Nederlands
        </option>

        <option
          value="pl"
        >
          Polski
        </option>

        <option
          value="pt_BR"
        >
          Português (Brasil)
        </option>

        <option
          value="pt_PT"
        >
          Português (Portugal)
        </option>

        <option
          value="ro"
        >
          Română
        </option>

        <option
          value="ru"
        >
          Русский
        </option>

        <option
          value="sk"
        >
          Slovenčina
        </option>

        <option
          value="sr"
        >
          Srpski
        </option>

        <option
          value="tr"
        >
          Türkçe
        </option>

        <option
          value="uk"
        >
          Українська
        </option>

        <option
          value="zh_CN"
        >
          简体中文
        </option>

        <option
          value="zh_TW"
        >
          正體中文
        </option>
      </select>
      <input type="submit" value="Go" />
    </div>
  );
}
