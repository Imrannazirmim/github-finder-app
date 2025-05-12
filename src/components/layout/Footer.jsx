const Footer = () => {
  const fullDate = new Date().getFullYear();
  return (
    <footer className="footer footer-center border-t border-t-gray-800  p-8 bg-gray-900 text-neutral-content">
      <div className="">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg"
          alt="img"
          className="rounded-full"
        />
        <span className="text-center">Copyright &copy; {fullDate}</span>
      </div>
    </footer>
  );
};
export default Footer;
