import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectShoplist } from "../../../Store/shopslist";
import Shops from "./Shops";

const ShopList =()=>{
	const shopList = useSelector((state)=>state.shops.shopList);
	const dispatch = useDispatch();
	const getShoplist =()=>{
		dispatch(selectShoplist());
	};
	useEffect(()=>{
		getShoplist();
	},[]);


    return(
        <>
			<Shops shops={shopList.shops} shopState={shopList}></Shops>
										
        </>

    );
}

export default ShopList;