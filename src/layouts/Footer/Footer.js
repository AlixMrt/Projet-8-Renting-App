import "./_footer.scss";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <img
        src={require("../../assets/logo/kasa_logo-lightest.png")}
        alt="logo"
      />
      <p>© 2023 Kasa. All rights reserved</p>
    </footer>
  );
}
