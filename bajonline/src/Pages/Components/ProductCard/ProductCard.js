import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AuthorizedAxios from "../../../AuthorizedAxios";

const ProductCard = ({ props }) => {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    if (props.imageUrl === "string" || props.imageUrl === "") {
      setImageUrl("https://i.imgur.com/BlVFcdX.png");
    } else {
      setImageUrl(props.imageUrl);
    }
  }, [props.imageUrl]);

  const handleAddToCart = () => {
    AuthorizedAxios.post(`https://localhost:44332/api/ShoppingCart/AddToCart?count=1&productId=${props.id}`)

  };

  const handleAddToWishList = () => {
    console.log("added to wishlist");
  };

  return (
    <div className="product__card">
      <img className="image" src={imageUrl} alt="pencil" />
      <p className="product__title">{props.name}</p>
      <p className="product__price">
        {props.listPrice > props.price && (
          <i className="price__before">{props.listPrice}€</i>
        )}
        <br />
        <i>{props.price}€</i>
      </p>
      <div className="buttons">
        <button
          type="button"
          onClick={handleAddToCart}
          className="add__to__cart"
        >
          <AddShoppingCartIcon />
          Add to cart
        </button>
        <button
          type="button"
          onClick={handleAddToWishList}
          className="add__to__wishlist"
        >
          <BookmarkBorderIcon />
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
