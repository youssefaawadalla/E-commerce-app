function About() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="text-center mb-4">About Us</h1>
          <p className="lead text-center">
            Welcome to our e-commerce application! We offer a wide range of
            products including electronics, men's wear, women's wear, and
            jewelry. Our mission is to provide high-quality products at
            affordable prices.
          </p>
          <p className="text-center">
            This application uses a fake API store to simulate a real shopping
            experience. The products you see here are for demonstration purposes
            only.
          </p>
          <div className="mt-5">
            <h2 className="text-center mb-4">Our Categories</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Electronics</li>
              <li className="list-group-item">Men's Wear</li>
              <li className="list-group-item">Women's Wear</li>
              <li className="list-group-item">Jewelry</li>
            </ul>
          </div>
          <p className="text-center mt-5">
            Thank you for visiting our store! We hope you have a great shopping
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
