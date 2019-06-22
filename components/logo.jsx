import Link from 'next/link';
import './logo.scss';


const Logo = ({ logoWidth, fontSize, color }) => (
  <Link as="/" href="/">
    <a title="Home" className="logo" style={{ fontSize: fontSize, color: color }}>
      <svg style={{ width: logoWidth, fill: color }} xmlns="http://www.w3.org/2000/svg" width="62.34" height="54.3" viewBox="0 0 62.34 54.3">
      <g id="Capa_2" data-name="Capa 2">
        <g id="muestras">
          <polygon style={{stroke: color}} className="cls-1" points="30.97 49.27 5.43 49.27 18.2 27.15 30.97 5.03 43.74 27.15 56.51 49.27 30.97 49.27" />
          <circle style={{fill: color}} className="cls-2" cx="31.17" cy="5.03" r="5.03" />
          <circle style={{fill: color}} className="cls-2" cx="57.31" cy="49.27" r="5.03" />
          <circle style={{fill: color}} className="cls-2" cx="5.03" cy="49.27" r="5.03" />
        </g>
      </g>
    </svg>
    Greenlink
  </a>
  </Link>
);

export default Logo;