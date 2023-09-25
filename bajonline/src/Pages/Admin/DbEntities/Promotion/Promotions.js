import React, { useState, useEffect } from "react";
import { Variables } from "../../../../Variables";
import axios from "axios";
import "../Entity.css";
import SimpleNavbar from "../Navbar/SimpleNavbar";

const Promotions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [promotionList, setPromotionList] = useState([]);
  const [noMorePromotions, setNoMorePromotions] = useState(false);

  useEffect(() => {
    getPromotionList();
  }, []);

  const getPromotionList = async () => {
    try {
      const response = await axios.get(
        Variables.API_URL + `Promotion/Promotions?page=${currentPage}&pageSize=10`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
          },
        }
      );
      const newPromotions = response.data;
      if (newPromotions.length === 0) {
        setNoMorePromotions(true);
      }
      if (currentPage === 1) {
        setPromotionList(newPromotions);
      } else {
        setPromotionList((prevPromotions) => [...prevPromotions, ...newPromotions]);
      }
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePromotion = async (id) => {
    try {
      const response = await axios.delete(
        Variables.API_URL + `Promotion/Promotion?id=${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
        },
      }
      );
      setPromotionList((prevPromotions) =>
        prevPromotions.filter((promotion) => promotion.id !== id)
      );
    } catch (error) {
      console.error("Error deleting promotion:", error);
    }
  };

  return (
    <>
      <SimpleNavbar />
      <div className="entity__container">
        <h1>Promotions</h1>
        <div className="add">
          <a href="AddPromotion" className="button">
            Create Promotion
          </a>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Discount amount</th>
              <th className="change">Change</th>
            </tr>
          </thead>
          <tbody>
            {promotionList.length > 0 &&
              promotionList.map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.id}</td>
                  <td>{promotion.name}</td>
                  <td>{promotion.startDate}</td>
                  <td>{promotion.endDate}</td>
                  <td>{promotion.discountAmount}</td>
                  <td>
                    <a
                      href={`editpromotion/${promotion.id}`}
                      className="edit__button btn"
                    >
                      Edit
                    </a>
                    <button
                      type="button"
                      onClick={() => handleDeletePromotion(promotion.id)}
                      className="delete__button btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {!noMorePromotions && (
          <button type="button" className="load__more" onClick={getPromotionList}>
            Load More
          </button>
        )}
        {noMorePromotions && (
          <h3 className="reached__final__page">Reached final page!</h3>
        )}
      </div>
    </>
  );
};

export default Promotions;
