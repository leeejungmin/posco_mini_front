import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPartyList } from '../../Store/party';
import Partys from './Party';

const PartyList = () => {
    const partys = useSelector((state) => state.partys);
    const dispatch = useDispatch();
    const getPartylist = () => {
        dispatch(selectPartyList());
    };
    useEffect(() => {
        getPartylist();
    },[partys]);
    return(
        <>
			<Partys partys={partys} partyState={partys}></Partys>								
        </>

    );
}

export default PartyList;
