import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../services/api";
import { isFavorite, toggleFavorite } from "../services/favorites";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [fav, setFav] = useState(isFavorite(Number(id)));

  useEffect(() => {
    getProductById(id)
      .then(res => setProduct(res.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  const handleFavorite = () => {
    toggleFavorite(product.id);
    setFav(!fav);
  };

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <div className="row">
        <div className="col-md-5 text-center">
          <img
            src={product.image}
            className="img-fluid"
            style={{ maxHeight: "350px", objectFit: "contain" }}
            alt={product.title}
          />
        </div>

        <div className="col-md-7">
          <h3>{product.title}</h3>
          <p className="text-muted">{product.category}</p>
          <p>{product.description}</p>
          <h4 className="text-success">₹ {product.price}</h4>

          <button
            onClick={handleFavorite}
            className={`btn mt-3 ${fav ? "btn-danger" : "btn-outline-danger"}`}
          >
            {fav ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}
