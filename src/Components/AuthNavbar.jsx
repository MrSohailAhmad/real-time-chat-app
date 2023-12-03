import "../Assets/Css/Auth.css";
import { Link } from "react-router-dom";

const AuthNavbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-9 d-flex">
            <Link to="/" className="d-flex brand">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <linearGradient
                  id="C9gCrP19MH65r7rnWLeSIa_DDDZGhkEYhFW_gr1"
                  x1="-130.401"
                  x2="-102.743"
                  y1="71.653"
                  y2="99.311"
                  gradientTransform="translate(146.143 -68.411)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#66d3a1"></stop>
                  <stop offset="1" stop-color="#59ba8d"></stop>
                </linearGradient>
                <path
                  fill="url(#C9gCrP19MH65r7rnWLeSIa_DDDZGhkEYhFW_gr1)"
                  d="M12.999,6.445v19.111c0,1.901,1.544,3.445,3.445,3.445	h24.111c1.901,0,3.445-1.544,3.445-3.445V6.445c0-1.901-1.544-3.445-3.445-3.445H16.445C14.543,2.999,12.999,4.543,12.999,6.445z"
                ></path>
                <linearGradient
                  id="C9gCrP19MH65r7rnWLeSIb_DDDZGhkEYhFW_gr2"
                  x1="-143.994"
                  x2="-123.793"
                  y1="82.428"
                  y2="102.628"
                  gradientTransform="translate(132.918 -63.638)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#33c481"></stop>
                  <stop offset="1" stop-color="#21a366"></stop>
                </linearGradient>
                <path
                  fill="url(#C9gCrP19MH65r7rnWLeSIb_DDDZGhkEYhFW_gr2)"
                  d="M3.999,43.501L4,33.999l11.756,1.367L6.571,44.55	c-0.273,0.279-0.653,0.451-1.072,0.451C4.672,45.001,3.999,44.327,3.999,43.501z"
                ></path>
                <linearGradient
                  id="C9gCrP19MH65r7rnWLeSIc_DDDZGhkEYhFW_gr3"
                  x1="-135.555"
                  x2="-115.355"
                  y1="73.989"
                  y2="94.189"
                  gradientTransform="translate(132.918 -63.638)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#33c481"></stop>
                  <stop offset="1" stop-color="#21a366"></stop>
                </linearGradient>
                <path
                  fill="url(#C9gCrP19MH65r7rnWLeSIc_DDDZGhkEYhFW_gr3)"
                  d="M3.999,15.445v19.111c0,1.901,1.544,3.445,3.445,3.445	h24.111c1.901,0,3.445-1.544,3.445-3.445v-5.56L13.003,11.999H7.444C5.543,11.999,3.999,13.543,3.999,15.445z"
                ></path>
                <path
                  fill="#0a8645"
                  d="M12.999,25.555V11.999h18.556	c1.901,0,3.445,1.544,3.445,3.445v13.556H16.445C14.543,29.001,12.999,27.457,12.999,25.555z"
                ></path>
              </svg>
              <h2 className="ms-3 brand-title">RTCAPP</h2>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AuthNavbar;
