import React from "react";
import {
  BsFillPeopleFill,
  BsFillFuelPumpDieselFill,
  BsSpeedometer,
  BsCurrencyDollar,
} from "react-icons/bs";
import { PiSteeringWheelFill } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";

const CarItem = ({
  model,
  year,
  imageurl,
  people,
  fuel,
  average,
  feature,
  price,
}) => {
  return (
    <div className="card mt-2">
      <img src={imageurl} className="card-img-top rounded" alt="..." />
      <div className="card-body">
        <div className="c-1 d-flex justify-content-between ">
          <h3 className="card-title">{model}</h3>
          <p className="card-text ">{year}</p>{" "}
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>
              <BsFillPeopleFill
                style={{ color: "#4a84e8", marginRight: "5px" }}
              />
              {people}
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <BsFillFuelPumpDieselFill
                style={{ color: "#4a84e8", marginRight: "5px" }}
              />
              {fuel}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>
              <BsSpeedometer style={{ color: "#4a84e8", marginRight: "5px" }} />
              {average}km/1-litre
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <PiSteeringWheelFill
                style={{ color: "#4a84e8", marginRight: "5px" }}
              />
              {feature}
            </p>
          </div>
        </div>
        <hr style={{ color: "gray" }} />

        <div className="bottom d-flex justify-content-between">
          <p class="price">
            <span
              style={{
                fontSize: "25px",
              }}
            >
              <BsCurrencyDollar />
              {price}
            </span>
            / month
          </p>

          <div className="bottom-2 d-flex gap-2">
            <div className="heart">
              <AiOutlineHeart style={{ color: "#4a84e8", margin: "3px" }} />
            </div>
            <button className="btn btn-sm btn-primary"> Rent now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
