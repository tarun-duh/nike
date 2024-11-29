import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        imgURL === bigShoeImg ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1 `}
      onClick={handleClick}
    >
      shoecard
    </div>
  );
};

export default ShoeCard;
