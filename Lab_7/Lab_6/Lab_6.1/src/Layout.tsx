import { Outlet, NavLink } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav style={navStyle}>
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/courses" style={linkStyle}>
          Courses
        </NavLink>

        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>
      </nav>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>

      <footer style={footerStyle}>
        6.1
      </footer>
    </>
  );
}

const navStyle: React.CSSProperties = {
  display: "flex",
  gap: "20px",
  padding: "15px",
  backgroundColor: "#222",
};

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "yellow" : "white",
  textDecoration: "none",
});

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#eee",
};

export default Layout;