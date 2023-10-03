import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CarItem from "./CarItem";
import data from "./data.json";
import "../App.css";

const Cars = () => {
  const navigate = useNavigate();
  const { pageParam } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(parseInt(pageParam) || 1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    setArticle(data);
    setTotalResults(data.length);
  }, []);

  const itemsPerPage = 6;
  const cardsPerRow = 3;
  const totalPages = Math.ceil(totalResults / itemsPerPage);
  const maxVisiblePages = 10;

  const handlePageChange = (newPage) => {
    setPage(newPage);
    navigate(`/page/${newPage}`);
  };

  const handlePrevClick = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < totalPages) {
      handlePageChange(page + 1);
    }
  };

  const getPageData = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return article.slice(startIndex, endIndex);
  };

  const pageData = getPageData();

  return (
    <div className="container carrs my-3">
      <div className="row">
        {pageData.map((element, index) => (
          <div className={`col-md-${12 / cardsPerRow}`} key={index}>
            <CarItem
              className="carsitem"
              model={element.model}
              year={element.year}
              imageurl={element.img_url}
              people={element.people}
              fuel={element.fuel}
              average={element.average}
              feature={element.feature}
              price={element.price}
            />
          </div>
        ))}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePrevClick}
        >
          &larr; Previous
        </button>
        <div className="pagination ">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              type="button"
              className={`btn btn-dark ${page === index + 1 ? "active" : ""}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          disabled={page >= totalPages}
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default Cars;
