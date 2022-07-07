import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { partyList } from "../../Sagas/party";
import Partys from "./Party";

export const partyaction =()=>{
	const party_List = useSelector((state)=>state.party.partyUsers);

	console.log("party ..........",party_List);
	const dispatch = useDispatch();
	const getPartylist = () => {
		dispatch(partyList());
		console.log(partyList);
	};
	
	
	useEffect(()=>{
		getPartylist();
	},[]);


    return(
        <>
			<Partys partys={party_List} partyState={party_List}></Partys>								
        </>

    );
}

export default partyaction;