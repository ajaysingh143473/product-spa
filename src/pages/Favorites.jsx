import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { getFavorites } from "../services/favorites";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Favorites() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProducts()
      .then(res => {
        const favIds = getFavorites();
        const favProducts = res.data.filter(p =>
          favIds.includes(p.id)
        );
        setProducts(favProducts);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (error) return <Error />;

  if (products.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h4>No favorites yet ❤️</h4>
      </div>
    );
  }

  return (
    <div className="container-fluid px-4">
      <h3 className="mb-4">Your Favorites ❤️</h3>
      <div className="row g-4">
        {products.map(product => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
