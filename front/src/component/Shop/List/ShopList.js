import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectShoplist } from "../../../Store/shopslist";
import Shops from "./Shops";

const ShopList =()=>{
	//처음에는 initialState에 정의된 데이터가 비어 있음
	const shopList = useSelector((state)=>state.shops.shopList);
	const dispatch = useDispatch();
	const getShoplist =()=>{
		dispatch(selectShoplist());
		//const shopList=dispatch(selectShoplist());
		//console.log(shopList.shops);
	};
	//console.log(shopList);
	
	useEffect(()=>{
		//페이지 바뀔 때만 state값 바꿔주기 위함
		getShoplist();
		
	},[]);



    return(
        <>
			<Shops shops={shopList.shops} shopState={shopList}></Shops>								
        </>

    );
}

export default ShopList;