import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../slice/store';
// import { fetchProductData } from '../../slice/productSlice';
import UserInfo from './UserInfo';
import { fetchProductData } from '../../slice/productSlice';



const UserDetail: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();


    // const fetchDataProuct = async () => {
    //     const url = "https://fakestoreapi.com/products?limit=5"
    //     const res = await fetch(url)
    //     console.log('res', res.body)
    //     console.log('data', await res.json())

    // }

    useEffect(() => {
        // dispatch(fetchProductData());

        // fetchDataProuct()
        dispatch(fetchProductData())
    }, [dispatch]);

    return (
        <div>
            <UserInfo />
        </div>
    );
};

export default UserDetail;
