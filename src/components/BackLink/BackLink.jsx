import React from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/svg-icons/arrow-left.svg";

export default function BackLink() {
  return (
    <Link to="/orders" className="left-arrow text-decoration-none text-black">
      <span className="d-inline-block left-arrow--icon me-2">
        <img src={arrowLeft} alt="arrow left icon" className="w-100 h-100" />
      </span>
      <span className="left-arrow--text py-1">Back to orders</span>
    </Link>
  );
}
