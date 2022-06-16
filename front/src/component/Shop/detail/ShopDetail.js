import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { selectShopDetail } from '../../../Store/shopDetail';

const ShopDetail = () => {
    const shopId = useParams();
    console.log('Selected ShopId: ', shopId); //2

    const dispatch = useDispatch();
    const getShopDetail = () => {
        dispatch(selectShopDetail(shopId));
    };

    useEffect(() => {
        getShopDetail();
    });

    return <div></div>;
};

export default ShopDetail;
