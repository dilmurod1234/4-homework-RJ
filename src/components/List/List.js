import React from "react";

function List({title1, title2, title3, title4}) {
    return(
        <ul className="header__list">
           <li>{title1}</li>
           <li>{title2}</li>
           <li>{title3}</li>
           <li>{title4}</li>
        </ul>
        )
    };
    
    export default List;