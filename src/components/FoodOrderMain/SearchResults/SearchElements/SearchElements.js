import React from "react";
import styles from "./searchElements.module.css";
import veg from "assets/images/veg.png"
import nonveg from "assets/images/nonveg.png"
import both from "assets/images/both.png"

function StarRating(props) {
  const rating = props.rating;
  const n_reviewers = props.n_reviewers;

  let badge_color = ""
  if(rating > 4){
    badge_color = "green";
  }
  else if(rating > 2){
    badge_color = "orange";
  }
  else{
    badge_color = "red";
  }
  const rating_style = {
    color : "white",
    backgroundColor: badge_color,
    margin: "0.5rem"
  }
  return (
    <div className={styles.elementBottom}>
      <div style = {rating_style}>
        {`★ ${rating}`}
      </div>
      <div style = {{fontSize : "small", alignment: "bottom"}}>
        {`${n_reviewers} reviews`}
      </div>
    </div>
    );
}


function SearchElements(props) {
  const name = props.name;
  const photo = props.img_url;
  const price = props.price;
  const n_dish = props.n_dish;
  const rating = props.rating;
  const n_reviewers = props.n_reviewers;
  var foodTypeKey = Math.floor(Math.random() * 3);
  var foodType = "";
  var width = "0";
  if (foodTypeKey === 0)
  {
    foodType = veg;
    width = "30";
  }
  else if (foodTypeKey === 1)
  {
    foodType = nonveg;
    width = "30";
  }
  else{
    foodType = both;
    width = "60";
  }

  return (
    <div className = {styles.elementCustom}>
      <img src={photo} height="120" weight="120" alt=""></img>
      <br />
      <b>{name}</b>
      <div className="container">
      <div className="row">
        <div className="col">
        <b style={{color:"red"}}>{`₹ ${price}`}</b> <small>per head</small>
        </div>
        <div className="col">
        {`${n_dish} dishes`}
        </div>
        </div>
        <div className={styles.elementBottom}>
        <StarRating rating = {rating} n_reviewers = {n_reviewers}/>
        <div> <img src={foodType} height="30" width={width} alt=""></img></div>
      </div>
    </div>
    </div>
  );
}


export default SearchElements;
