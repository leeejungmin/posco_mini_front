import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shopRequest } from "../../../Sagas/shop";
import Shops from "./Shops";

const ShopList =()=>{
	
	const shopList = useSelector((state)=>state.shop.shopList);
	const dispatch = useDispatch();
	const getShoplist = () =>{
		dispatch(shopRequest());
	};
	console.log("this is shplsit......"+shopList);
	
	useEffect(()=>{
		getShoplist();
	},[]);



    return(
        <>
			<Shops shops={shopList} shopState={shopList}></Shops>								
        </>

    );
}

export default ShopList;