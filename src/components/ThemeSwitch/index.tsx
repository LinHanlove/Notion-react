/* eslint-disable react-hooks/exhaustive-deps */
import { asyncThemeSwitch } from "@/store/modules/themeSwitch";
import { getTheme, setThemeSwitch } from "@/utils";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const ThemeProvider = styled.div`
  * {
    padding: 0px;
    margin: 0px auto;
    text-align: center;
  }
  .cont_principal {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .cont_text > p {
    color: #7730ec;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
  }

  .cont_text_dia > p {
    color: #fcce18;
  }

  .cont_text_noche > p {
    color: #7730ec;
  }

  body {
    background-color: #f2edff;
    transition-delay: 0.7s;
    transition: background-color 0.5s;
  }

  .cont_centro {
    position: relative;
    width: 100%;
    height: 100%;
    top: 50%;
    margin-top: -106px;
  }

  .cont_circle {
    width: 80%;
    height: 80%;
    position: relative;
    border-radius: 50%;
    border: 3px solid #fff;
    box-shadow: 0px 5px 30px 5px rgba(119, 48, 236, 0.4);
    overflow: hidden;
    transition: all 0.5s;
    background-color: #7730ec;
    cursor: pointer;
  }
  .cont_circle_noche {
    box-shadow: 0px 5px 30px 5px rgba(119, 48, 236, 0.4);
    transition-delay: 0.7s;
  }

  .cont_circle_noche > .sun {
    animation-name: ocultar_sun;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  .cont_circle_noche > .moon {
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    animation-name: salida_sun;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-duration-delay: 1s;
  }

  .cont_olas_top {
    position: absolute;
    bottom: 63px;
    left: -210px;
  }

  .cont_olas_bottom {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 212px;
    z-index: 0;
    overflow: hidden;
    border-radius: 50%;
  }

  .cont_olas_bottom > svg {
    margin-top: 100px;
    transition: all 1.5s;
    position: relative;
    left: -212px;
  }

  .cont_circle_dia > .cont_olas_bottom > svg {
    position: relative;
    left: 0px;
  }

  .moon {
    position: absolute;
    top: 50px;
    right: 50px;
    border-radius: 50%;
    overflow: hidden;
  }

  .cont_circle_dia {
    background-color: #fcce18;
    transition-delay: 0.7s;
    box-shadow: 0px 5px 30px 5px rgba(252, 206, 24, 0.5);
  }

  .cont_circle_dia > .sun {
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    animation-name: salida_sun;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-duration-delay: 1s;
  }
  .cont_circle_dia > .moon {
    animation-name: ocultar_sun;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  .sun {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 23px;
    height: 23px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 1px 1px 10px 6px rgba(255, 255, 255, 0.5);
    transform: translate(-190px, 20px);
  }

  @-webkit-keyframes salida_sun {
    from {
      transform: translate(100px, 50px);
    }
    to {
      transform: translate(0px, 0px);
    }
  }
  @-o-keyframes salida_sun {
    from {
      transform: translate(100px, 50px);
    }
    to {
      transform: translate(0px, 0px);
    }
  }
  @-moz-keyframes salida_sun {
    from {
      transform: translate(100px, 50px);
    }
    to {
      transform: translate(0px, 0px);
    }
  }
  @keyframes salida_sun {
    from {
      transform: translate(100px, 50px);
    }
    to {
      transform: translate(0px, 0px);
    }
  }

  @-webkit-keyframes ocultar_sun {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(-50px, -20px);
    }
    60% {
      transform: translate(-70px, -15px);
    }
    70% {
      transform: translate(-90px, -10px);
    }
    85% {
      transform: translate(-130px, 5px);
    }

    100% {
      transform: translate(-190px, 20px);
    }
  }
  @-o-keyframes ocultar_sun {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(-50px, -20px);
    }
    60% {
      transform: translate(-70px, -15px);
    }
    70% {
      transform: translate(-90px, -10px);
    }
    85% {
      transform: translate(-130px, 5px);
    }

    100% {
      transform: translate(-190px, 20px);
    }
  }
  @-moz-keyframes ocultar_sun {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(-50px, -20px);
    }
    60% {
      transform: translate(-70px, -15px);
    }
    70% {
      transform: translate(-90px, -10px);
    }
    85% {
      transform: translate(-130px, 5px);
    }

    100% {
      transform: translate(-190px, 20px);
    }
  }
  @keyframes ocultar_sun {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(-50px, -20px);
    }
    60% {
      transform: translate(-70px, -15px);
    }
    70% {
      transform: translate(-90px, -10px);
    }
    85% {
      transform: translate(-130px, 5px);
    }

    100% {
      transform: translate(-190px, 20px);
    }
  }
`;

export default function ThemeSwitch() {
  const [text, setText] = useState("NIGHT");
  const cont_circle = useRef<HTMLDivElement | null>(null); //sun and muon
  const dispatch = useDispatch();
  const night = async () => {
    if (cont_circle.current) {
      cont_circle.current.className = "cont_circle cont_circle_noche";
      document.body.style.backgroundColor = "#f2edff";
    }

    await dispatch(asyncThemeSwitch(false));
  };

  const day = async () => {
    if (cont_circle.current) {
      cont_circle.current.className = "cont_circle cont_circle_dia";
      document.body.style.backgroundColor = "#f2edff";
    }
    await dispatch(asyncThemeSwitch(false));
  };

  getTheme() == "dark" ? night() : day();

  useEffect(() => {
    setText(getTheme() == "dark" ? "NIGHT" : "DAY");
    console.log(text);
  }, [getTheme()]);

  return (
    <ThemeProvider className=" absolute z-[998]  w-[30vh] h-[30vh]  rounded-3xl backdrop-blur-sm  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="cont_principal ">
        <div className="cont_centro ">
          <div ref={cont_circle} className="cont_circle backdrop-blur-md">
            <div className="sun"></div>
            <div className="moon">
              <svg
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:svg="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                id="svg4185"
                version="1.1"
                inkscape:version="0.91 r13725"
                sodipodi:docname="moon.svg"
              >
                <defs id="defs4187" />
                <sodipodi:namedview
                  id="base"
                  pagecolor="#ffffff"
                  bordercolor="#666666"
                  borderopacity="1.0"
                  inkscape:pageopacity="0.0"
                  inkscape:pageshadow="2"
                  inkscape:zoom="7.9195959"
                  inkscape:cx="33.77632"
                  inkscape:cy="21.697334"
                  inkscape:document-units="px"
                  inkscape:current-layer="layer1"
                  showgrid="false"
                  units="px"
                  inkscape:window-width="1366"
                  inkscape:window-height="709"
                  inkscape:window-x="0"
                  inkscape:window-y="27"
                  inkscape:window-maximized="1"
                />
                <metadata id="metadata4190">
                  <rdf:RDF>
                    <cc:Work rdf:about="">
                      <dc:format>image/svg+xml</dc:format>
                      <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                      <dc:title></dc:title>
                    </cc:Work>
                  </rdf:RDF>
                </metadata>
                <g
                  inkscape:label="Capa 1"
                  inkscape:groupmode="layer"
                  id="layer1"
                  transform="translate(0,-1028.3622)"
                >
                  <path
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      stroke: "none",
                      strokeOpacity: "1",
                    }}
                    d="m 12.5,1051.8622 a 11.5,11.5 0 0 0 9.93359,-5.7305 11.5,11.5 0 0 1 -10.14844,-11.4121 11.5,11.5 0 0 1 1.56446,-5.7676 11.5,11.5 0 0 0 -1.34961,-0.09 11.5,11.5 0 0 0 -11.5,11.5 11.5,11.5 0 0 0 11.5,11.5 z"
                    id="circle5402"
                    inkscape:connector-curvature="0"
                  />
                </g>
              </svg>
            </div>

            <div className="cont_olas_bottom">
              <svg
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:svg="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                width="428"
                height="140"
                viewBox="0 0 428 140"
                id="svg4185"
                version="1.1"
                inkscape:version="0.91 r13725"
                sodipodi:docname="olas.svg"
              >
                <defs id="defs4187" />
                <sodipodi:namedview
                  id="base"
                  pagecolor="#ffffff"
                  bordercolor="#666666"
                  borderopacity="1.0"
                  inkscape:pageopacity="0.0"
                  inkscape:pageshadow="2"
                  inkscape:zoom="0.25"
                  inkscape:cx="1165.2456"
                  inkscape:cy="474.36342"
                  inkscape:document-units="px"
                  inkscape:current-layer="layer1"
                  showgrid="false"
                  units="px"
                  inkscape:window-width="1366"
                  inkscape:window-height="717"
                  inkscape:window-x="0"
                  inkscape:window-y="25"
                  inkscape:window-maximized="1"
                />
                <metadata id="metadata4190">
                  <rdf:rdf>
                    <cc:work rdf:about="">
                      <dc:format>image/svg+xml</dc:format>
                      <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                      <dc:title />
                    </cc:work>
                  </rdf:rdf>
                  <rdf:RDF>
                    <cc:Work rdf:about="">
                      <dc:format>image/svg+xml</dc:format>
                      <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                    </cc:Work>
                  </rdf:RDF>
                </metadata>
                <g
                  inkscape:label="Capa 1"
                  inkscape:groupmode="layer"
                  id="layer1"
                  transform="translate(0,-912.36216)"
                >
                  <g
                    transform="translate(0.05230238,-83.806076)"
                    id="g5323"
                    style={{ fill: "#ffffff", fillOpacity: "0.78604653" }}
                  >
                    <path
                      sodipodi:nodetypes="ccsccccc"
                      inkscape:connector-curvature="0"
                      id="rect4152-3"
                      d="m 0,1028.2403 c 23.31769,-8.6016 55.72675,-17.4895 79.04444,-18.1827 11.2904,-0.3156 26.68128,7.4409 42.09759,11.1455 15.41631,3.7046 26.81743,2.8522 40.22985,2.4916 12.95522,-0.4126 28.2055,-6.151 52.31482,-14.5357 l -0.644,30.193 -213.09500238,0.016 z"
                      style={{
                        fill: "#ffffff",
                        fillOpacity: "0.78604653",
                        stroke: "none",
                        strokeOpacity: "1",
                      }}
                    />
                    <path
                      sodipodi:nodetypes="ccsccccc"
                      inkscape:connector-curvature="0"
                      id="path4159-1"
                      d="m 426.18304,1015.7276 c -26.34815,1.5 -54.33844,-0.6778 -66.03938,-1.876 -12.30054,-1.4521 -31.28361,-7.4363 -46.76147,-11.8498 -9.13204,-2.60397 -38.62494,-3.50794 -51.85031,-2.30725 -12.95522,0.97645 -28.22921,4.43235 -47.85598,9.47015 L 213.04683,1039.38 425,1039.343 Z"
                      style={{
                        fill: "#ffffff",
                        fillOpacity: "0.78604653",
                        stroke: "none",
                        strokeOpacity: "1",
                      }}
                    />
                    <rect
                      y="1039.3678"
                      x="-0.052302379"
                      height="96.800781"
                      width="425.14133"
                      id="rect5314"
                      style={{
                        fill: "#ffffff",
                        fillOpacity: "0.78604653",
                        stroke: "none",
                        strokeOpacity: "1",
                      }}
                    />
                  </g>
                  <g
                    transform="matrix(1.0046942,0,0,1,-427.94717,-83.806076)"
                    id="g5318"
                    style={{ fill: "#ffffff", fillOpacity: "0.78139535" }}
                  >
                    <path
                      style={{
                        fill: "#ffffff",
                        fillOpacity: "0.78139535",
                        stroke: "none",
                        strokeOpacity: "1",
                      }}
                      d="m 425.9497,1038.22 c 26.34814,1.5 45.12014,-1.2008 56.31601,-2.0203 12.17428,-1.1995 37.78171,-5.1492 53.25957,-9.5626 9.13204,-2.604 41.52933,-12.7208 54.88097,-12.7076 13.04897,0.025 62.82855,10.2944 82.45532,15.3322 l -40.41163,23.1005 -206.50024,0 z"
                      id="path4155-4"
                      inkscape:connector-curvature="0"
                      sodipodi:nodetypes="ccsccccc"
                    />
                    <path
                      style={{
                        fill: "#ffffff",
                        fillOpacity: "0.78139535",
                        stroke: "none",
                        strokeOpacity: "1",
                      }}
                      d="m 852.0083,1015.8985 c -25.46427,-6.2025 -64.78376,0.7136 -86.08114,6.2076 -11.66922,3.4725 -20.60985,4.9409 -36.02616,8.6454 -35.32671,8.3971 -50.21019,0.1889 -57.05774,-1.4881 l -40.29957,23.0988 219.45631,0 z"
                      id="path4157-5"
                      inkscape:connector-curvature="0"
                      sodipodi:nodetypes="ccccccc"
                    />
                    <rect
                      style={{
                        fill: "#ffffff",
                        fillOpacity: "0.78139535",
                        stroke: "none",
                        strokeOpacity: "1",
                      }}
                      id="rect5316"
                      width="426.01624"
                      height="83.800438"
                      x="425.94769"
                      y="1052.3678"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="cont_text">
          <p className="text-[--text-color] absolute bottom-0  left-1/2 -translate-x-1/2 text-2xl font-bold z-[999]">
            {text}
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}
