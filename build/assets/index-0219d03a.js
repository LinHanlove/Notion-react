import{j as a}from"./index-f32d64df.js";import{s as e}from"./styled-components.browser.esm-7e11e23d.js";const t=e.div`
  .wrapper {
    width: 200px;
    height: 60px;
    position: relative;
    z-index: 1;
  }

  .circle {
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    background-color: var(--text-color);
    left: 15%;
    transform-origin: 50%;
    animation: circle7124 0.5s alternate infinite ease;
  }

  @keyframes circle7124 {
    0% {
      top: 60px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
    }

    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }

    100% {
      top: 0%;
    }
  }

  .circle:nth-child(2) {
    left: 45%;
    animation-delay: 0.2s;
  }

  .circle:nth-child(3) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }

  .shadow {
    width: 20px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--background);
    position: absolute;
    top: 62px;
    transform-origin: 50%;
    z-index: -1;
    left: 15%;
    filter: blur(1px);
    animation: shadow046 0.5s alternate infinite ease;
  }

  @keyframes shadow046 {
    0% {
      transform: scaleX(1.5);
    }

    40% {
      transform: scaleX(1);
      opacity: 0.7;
    }

    100% {
      transform: scaleX(0.2);
      opacity: 0.4;
    }
  }

  .shadow:nth-child(4) {
    left: 45%;
    animation-delay: 0.2s;
  }

  .shadow:nth-child(5) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
`;function r(){return a.jsxs(t,{className:"w-full h-full  flex justify-center items-center flex-col",children:[a.jsxs("div",{className:"wrapper",children:[a.jsx("div",{className:"circle"}),a.jsx("div",{className:"circle"}),a.jsx("div",{className:"circle"}),a.jsx("div",{className:"shadow"}),a.jsx("div",{className:"shadow"}),a.jsx("div",{className:"shadow"})]}),a.jsx("div",{className:"mt-10 text-[--txt-color] text-3xl font-extrabold [font-family]-[Montserrat]",children:"Loading please wait..."}),a.jsx("div",{className:"mt-2 text-[teal] text-lg font-extrabold [font-family]-[Montserrat]",children:"notion"})]})}export{r as default};
//# sourceMappingURL=index-0219d03a.js.map
