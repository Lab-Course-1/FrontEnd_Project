import React from "react";
import "./ProductCard.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const ProductCard = ({ props }) => {
  const imageUrl =
    props.imageUrl !== "string" || "" ? props.imageUrl : "Assets/pic1.png";
  const handleAddToCart = () => {
    console.log("added to cart");
  };
  const handleAddToWishList = () => {
    console.log("added to wishlist");
  };
  return (
    <div className="product__card">
      <img className="image" src={imageUrl} alt="pencil" />
      <p className="product__title">{props.name}</p>
      <p className="product__price">
        <i>{props.price}</i>
      </p>
      <div className="buttons">
        <button
          type="button"
          onclick={handleAddToCart}
          className="add__to__cart"
        >
          <AddShoppingCartIcon />
          Add to cart
        </button>
        <button
          type="button"
          onclick={handleAddToWishList}
          className="add__to__wishlist"
        >
          <BookmarkBorderIcon />
          Add to wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
