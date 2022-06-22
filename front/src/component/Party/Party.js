import React, { useEffect, useState } from "react";
import DateToday from "./DateToday";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import { partyPost } from "../../Store/party";
//  import '../node_modules/react-vis/dist/style.css';
import { XYPlot, DonutChart, RadialChart, MarkSeries, LineSeries } from "react-vis";

const ShopParty = ({ partys, partyState }) => {
    console.log("amos(my): ", partys);
    console.log("amos(partyState): ", partyState);
    const navigate = useNavigate();

    const onMovePrev = () => {
        navigate("/list");
    };
    const onMoveChat = () => {
        navigate("/chat");
    };
    const myData = [];
    console.log("partyList: ", partyState.partyList);
    partyState.partyList.list.map((val) => myData.concat(val));
    console.log("amos(myData): ", myData);
};

export default ShopParty;
