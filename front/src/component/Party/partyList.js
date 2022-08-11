import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectShoplist } from "../../Store/shopslist";
import Partys from "./Party";

const ShopList = () => {
  const partyList = useSelector((state) => state);
  const dispatch = useDispatch();
  const getPartylist = () => {
    dispatch(partyPost());
  };

  useEffect(() => {
    getPartylist();
  }, []);

  return (
    <>
      <Partys partys={partyList} partyState={partyList}></Partys>
    </>
  );
};

export default Party;
