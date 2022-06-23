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
    }, []);

    return <>{<Partys party={partys.myId} partyList={partys.partyList}></Partys>}</>;
};

export default PartyList;
