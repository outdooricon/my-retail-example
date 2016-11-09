import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Targetica', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  a, button {
    cursor: pointer;
  }

  // p,
  // label {
  //   font-family: Georgia, Times, 'Times New Roman', serif;
  //   line-height: 1.5em;
  // }

  .sr-only {
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
  }

  // @font-face {
  //   font-family: 'Targetica';
  //   font-weight: 200;
  //   src: url("http://www.target.com/icon_font/273cae72-9365-49ab-b24f-5d8e2d5e7332.woff2") format("woff2"),
  //         url("http://www.target.com/icon_font/273cae72-9365-49ab-b24f-5d8e2d5e7332.woff") format("woff"),
  //         url("http://www.target.com/icon_font/bbb430ca-fd54-457d-b031-11c5b1db5e28.ttf") format("truetype");
  // }

  // @font-face {
  //   font-family: 'Targetica';
  //   src: url("http://www.target.com/icon_font/99ecc614-958b-457a-be15-01e00c53057f.woff2") format("woff2"),
  //         url("http://www.target.com/icon_font/99ecc614-958b-457a-be15-01e00c53057f.woff") format("woff"),
  //         url("http://www.target.com/icon_font/9ba3c652-3ba4-41a4-909a-8521c57cf527.ttf") format("truetype");
  // }

  // @font-face {
  //   font-family: 'Targetica';
  //   font-weight: 700;
  //   src: url("http://www.target.com/icon_font/3420ab8a-6ccf-4c75-9da7-efe26f1ced8a.woff2") format("woff2"),
  //         url("http://www.target.com/icon_font/3420ab8a-6ccf-4c75-9da7-efe26f1ced8a.woff") format("woff"),
  //         url("http://www.target.com/icon_font/0fb60485-dafe-414d-8d84-e23db55149ba.ttf") format("truetype");
  // }
`;
