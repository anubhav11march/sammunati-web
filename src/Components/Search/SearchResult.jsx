import React from "react";
import { useParams } from "react-router-dom";

const SearchResult = () => {
    const { searchQuery } = useParams();
    console.log(searchQuery);

    return <div>{searchQuery}</div>;
};

export default SearchResult;
