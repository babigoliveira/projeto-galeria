import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <div className="d-flex justify-content-center bg-secondary pt-2 pb-2">
        <span className="text-white">
          <FiHeart color="#f00" className="me-2" />
          Desenvolvido por Bárbara Oliveira
        </span>
      </div>
    </footer>
  );
};

export default Footer;
