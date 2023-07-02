function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-6">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-lg-3">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h3>Contact Us</h3>
            <p>123 Street, City, State</p>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-secondary">
        &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
