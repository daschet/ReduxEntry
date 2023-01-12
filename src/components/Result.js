import React from "react";
import store from "../Redux/store";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";

const Result = () => {

    const {total} = useSelector ((state) => state)
    console.log(total)
    return (
        <div>
            <h1>Ini Hasil</h1>
            <h1>{total}</h1>
            </div>
            )
}

export default Result