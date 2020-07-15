const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <footer id="footer">
      Copyright &copy; <span>{date}</span>, Stefan Ljiljak
    </footer>
  );
};

export default Footer;
