import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectShopDetail } from '../../../Store/shopDetail';
import Details from './Details';

const ShopDetail = () => {
    const shopDetail = useSelector((state) => state.details.shopDetail);
    const shopId = useParams();
    // console.log('Selected ShopId: ', shopId); //2

    const dispatch = useDispatch();
    const getShopDetail = () => {
        dispatch(selectShopDetail(shopId));
    };

    useEffect(() => {
        getShopDetail();
    }, []);

    return (
        <div>
            <Details details={shopDetail.details} detailState={shopDetail}></Details>
        </div>
    );
};

export default ShopDetail;
