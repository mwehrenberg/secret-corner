import React, { useEffect } from "react";
import "./facilities.css";
import clockTower from "../images/clockTower.webp";
// import "../../node_modules/uikit";

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
            {/* <section>
                <i className="fa fa-home" aria-hidden="true"></i>
                <i className="fa fa-file-text-o" aria-hidden="true"></i>
                <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                <i className="fa fa-commenting-o" aria-hidden="true"></i>
                <i className="fa fa-user" aria-hidden="true"></i>
                <i className="fa fa-cogs" aria-hidden="true"></i>
            </section> */}

            {/* <div uk-slider>
                <div className="uk-slider-items">
                    <div>
                        <img src={clockTower}></img>
                        <div class="uk-position-center">
                            <div uk-slider-parallax="x: 100,-100">
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <h4>Coming soon...</h4>
        </div>
    );
};


export default Facilities;