import React from "react";
import './Category.css';
import CategoryHover from './CategoryHover1.js';
import CategoryHover2 from "./CategoryHover2.js";
import CategoryHover3 from "./CategoryHover3.js";
const Category = () => {
    return(
        <div>
            <div className="Categorybox"></div>
            <div>
                <CategoryHover />
            </div>
            <div className= "triangle1"></div>
            <div>
                <CategoryHover2 />
            </div>
            <div className="triangle2"></div>
            <div>
                <CategoryHover3 />
            </div>
            <div className="triangle3"></div>
        </div>
    );
}

export default Category;