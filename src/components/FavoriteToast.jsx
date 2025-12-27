export default function FavoriteToast({ message }) {
  if (!message) return null;

  return (
    <div className="toast-container position-fixed top-0 end-0 p-3">
      <div className="toast show text-bg-success border-0">
        <div className="d-flex">
          <div className="toast-body">
            {message}
          </div>
          <button className="btn-close btn-close-white me-2 m-auto"></button>
        </div>
      </div>
    </div>
  );
}
