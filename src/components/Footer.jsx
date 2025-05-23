import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{
      padding: "1rem",
      textAlign: "center",
      background: "#eee",
      marginTop: "auto"
    }}>
      <p>
        <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
          ⬅ Back to ABOUT ME 
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
