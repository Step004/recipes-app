import React, { useState } from "react";
import css from "./Pagination.module.css";

interface PaginationProps {
  totalItems: number; // Загальна кількість елементів
  itemsPerPage: number; // Кількість елементів на сторінку
  onPageChange: (page: number) => void; // Функція для зміни сторінки
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const getPageNumbers = () => {
    const pages: (string | number)[] = [];

    // Перші 7 сторінок
    for (let i = 1; i <= Math.min(7, totalPages); i++) {
      pages.push(i);
    }

    // Додавання "..." якщо є пропуски
    if (totalPages > 7) {
      if (currentPage > 5) {
        pages.push("...");

        // Додаємо номер сторінки перед останньою
        if (currentPage < totalPages - 2) {
          pages.push(totalPages - 1);
        }

        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className={css.pagination}>
      <button
        className={css.numberOfPage}
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        &#8249;
      </button>

      <div className={css.numbers}>
        {getPageNumbers().map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              onClick={() => handlePageClick(page)}
              className={css.numberOfPage}
              style={{ fontWeight: page === currentPage ? "bold" : "normal" }}
            >
              {page}
            </button>
          ) : (
            <span key={index}>{page}</span>
          )
        )}
      </div>
      <button
        className={css.numberOfPage}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Pagination;
