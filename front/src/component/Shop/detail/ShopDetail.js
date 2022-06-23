import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { shopDetailRequest } from '../../../Sagas/shop';
import Details from './Details';
const ShopDetail = () => {

    useEffect(() => {
        console.log("useEffect.......shopdetail")
        getShopDetail();
    },[]);
    const shopDetail = useSelector((state) => state.shop.shopDetail);
    console.log("shopId/k///////////////////",shopDetail)
    const shopId = useParams();
    const dispatch = useDispatch();
    const getShopDetail = () => {
        console.log("shopId/k///////////////////",shopId)
        dispatch(shopDetailRequest(shopId));
    };

    

    return (
        <div>
            <Details shop={shopDetail.shop} review={shopDetail.review}></Details>
        </div>
    );
};

export default ShopDetail;
