import React, { useState } from "react";
import { ISearchPropes } from "../screens/Search/ISearchPropes";

export  const usefilter =():ISearchPropes=>{
    const [showfilter,setshowfilter] = React.useState(false);
    return{
        showfilter,
        setshowfilter
    }
}