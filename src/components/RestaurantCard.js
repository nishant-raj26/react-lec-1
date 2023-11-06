import { CDN_URL } from "../utils/constants";

const ResturantCard = ({ resData }) => {
  const { cloudinaryImageId, name, locality, avgRating, costForTwo, cuisines } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="dessert"
      />
      <h3>{name}</h3>
      <h3>{locality}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
      <h3>{cuisines.join(", ")}</h3>
    </div>
  );
};

export default ResturantCard;
