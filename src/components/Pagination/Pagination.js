import "./Pagination.css";

export const Pagination = ({ productsPerPage, productsNumber, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(productsNumber / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination-container">
        {pageNumbers.map((page) => (
          <li
            onClick={() => paginate(page)}
            className="pagination-item"
            key={page}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
};
