import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { partyList } from "../../Sagas/party";
import Partys from "./Party";

export const partyaction =()=>{
	const partyList = useSelector((state)=>state);
	const dispatch = useDispatch();
	const getPartylist = () => {
		dispatch(partyList());
		console.log(partyList);
	};
	console.log(shopList);
	
	useEffect(()=>{
		getPartylist();
	},[]);


    return(
        <>
			<Partys partys={partyList} partyState={partyList}></Partys>								
        </>

    );
}

export default partyaction;