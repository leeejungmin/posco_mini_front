import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import shopDetail, { selectShopDetail } from '../../../Store/shopDetail';
import Details from './Details';

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

    return (
        <div>
            <Details detailState={shopDetail}></Details>
        </div>
    );
};

export default ShopDetail;
