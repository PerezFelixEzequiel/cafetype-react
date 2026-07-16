import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="waveDivider">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
          <path
            d="M0,100
            C180,155 380,150 600,120
            C850,85 1080,35 1240,40
            C1330,45 1390,75 1440,100
            L1440,180
            L0,180
            Z"
          ></path>
        </svg>
      </div>

      <div className="footer_content">
        <div className="container-inf">
          <p>
            &copy; 2026 <span>CAFETYPE</span>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;