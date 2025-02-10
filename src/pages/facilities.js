import React, { useEffect } from "react";
import "./facilities.css";

const Grid = () => {
    return (
    <div class="items">
        <div class="item">
          <div class="item__position">
            <img src="https://img.freepik.com/premium-vector/suitcase-icon-logo-vector-design-template_827767-1986.jpg" alt="Plant 1" class="item__image item__image--hue" />
          </div>
          <div class="item__detail">
            <p>Plant 1</p>
          </div>
        </div>
        <div class="item">
          <div class="item__position">
            <img src="https://raw.githubusercontent.com/AbubakerSaeed/plants-shopping-uix/main/assets/2.png" alt="Plant 2" class="item__image item__image--hue" />
          </div>
          <div class="item__detail">
            <p>Plant 2</p>
          </div>
        </div>
        <div class="item">
          <div class="item__position">
            <img src="https://raw.githubusercontent.com/AbubakerSaeed/plants-shopping-uix/main/assets/3.png" alt="Plant 3" class="item__image" />
          </div>
          <div class="item__detail">
            <p>Plant 3</p>
          </div>
        </div>
        <div class="item">
          <div class="item__position">
            <img src="https://raw.githubusercontent.com/AbubakerSaeed/plants-shopping-uix/main/assets/4.png" alt="Plant 4" class="item__image item__image--hue" />
          </div>
          <div class="item__detail">
            <p>Plant 4</p>
          </div>
        </div>
        <div class="item">
          <div class="item__position">
            <img src="https://raw.githubusercontent.com/AbubakerSaeed/plants-shopping-uix/main/assets/5.png" alt="Plant 5" class="item__image item__image--hue" />
          </div>
          <div class="item__detail">
            <p>Plant 5</p>
          </div>
        </div>
        <div class="item">
          <div class="item__position">
            <img src="https://raw.githubusercontent.com/AbubakerSaeed/plants-shopping-uix/main/assets/6.png" alt="Plant 6" class="item__image" />
          </div>
          <div class="item__detail">
            <p>Plant 6</p>
          </div>
        </div>
        <div class="item">
          <div class="item__position">
            <img src="https://raw.githubusercontent.com/AbubakerSaeed/plants-shopping-uix/main/assets/7.png" alt="Plant 7" class="item__image" />
          </div>
          <div class="item__detail">
            <p>Plant 7</p>
          </div>
        </div>
        <div class="item">
          <div class="item__position">
            <img src="https://raw.githubusercontent.com/AbubakerSaeed/plants-shopping-uix/main/assets/8.png" alt="Plant 8" class="item__image item__image--hue" />
          </div>
          <div class="item__detail">
            <p>Plant 8</p>
          </div>
        </div>
        <div class="item">
          <div class="item__position">
            <img src="https://raw.githubusercontent.com/AbubakerSaeed/plants-shopping-uix/main/assets/9.png" alt="Plant 9" class="item__image" /> 
          </div>
          <div class="item__detail">
            <p>Plant 9</p>
          </div>
        </div>
        <div class="item">
          <div class="item__position">
            <img src="https://raw.githubusercontent.com/AbubakerSaeed/plants-shopping-uix/main/assets/10.png" alt="Plant 10" class="item__image" />
          </div>
        </div>
    </div>
    )
}

const Facilities = () => {
    useEffect(() => {
        const gridContainer = document.getElementById("gridContainer");
        for (let i = 1; i <= 9; i++){
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.textContent = i;
            gridContainer.append(gridItem);
        }
    }, []);

    return (
        <div>
            <Grid></Grid>
            <div id="gridContainer" className="gridContainer"></div>
        </div>
    );
};


export default Facilities;