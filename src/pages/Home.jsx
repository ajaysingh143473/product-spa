import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-3">Welcome to Product Explorer</h1>
      <p className="lead">
        A Single Page Application built using React, Axios & Bootstrap 5.
      </p>
      <Link to="/products" className="btn btn-success mt-3">
        Browse Products
      </Link>
    </div>
  );
}
