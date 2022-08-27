import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FiCamera } from "react-icons/fi";
import { useState } from "react";
import cn from "classnames";

const Header = () => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive((active) => !active);
  };

  return (
    <header>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <FiCamera color="#fff" className="me-2" />
            <strong className="pl-2">Galeria</strong>
          </a>
          <button
            className="navbar-toggler collapsed"
            data-toggle="collapse"
            data-target="#header"
            onClick={toggleActive}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      <div className={cn("bg-dark collapse", { show: active })} id="header">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">Sobre</h4>
              <p className="text-muted">Escreva sobre vc...</p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contato</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="mailto:#" className="text-white">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
