import { Link } from "react-router-dom";
import { useState } from "react";
import { isFavorite, toggleFavorite } from "../services/favorites";
import FavoriteToast from "./FavoriteToast";

export default function ProductCard({ product }) {
  const [fav, setFav] = useState(isFavorite(product.id));
  const [toastMsg, setToastMsg] = useState("");

  const handleFavorite = () => {
    toggleFavorite(product.id);
    setFav(!fav);
    setToastMsg(fav ? "Removed from favorites" : "Added to favorites");

    setTimeout(() => setToastMsg(""), 2000);
  };

  return (
    <>
      <div className="card h-100 shadow-sm">
        <img
          src={product.image}
          className="card-img-top p-3"
          style={{ height: "200px", objectFit: "contain" }}
          alt={product.title}
        />

        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{product.title}</h6>
          <p className="fw-bold">₹ {product.price}</p>

          <div className="d-flex justify-content-between mt-auto">
            <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">
              View
            </Link>
            <button
              onClick={handleFavorite}
              className={`btn btn-sm ${fav ? "btn-danger" : "btn-outline-danger"}`}
            >
              {fav ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
      </div>

      <FavoriteToast message={toastMsg} />
    </>
  );
}
