import Container from "./container";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="py-14 flex flex-col items-center">
          <p>&copy; {new Date().getFullYear()} Mi Casa Su Shasta</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
