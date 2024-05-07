import 'react-dom';
import React from 'react';
import { useParams } from 'react-router-dom';

const ShopPage = (props) => {
    const {id} = useParams();
    return <h1>Тут будет страница с данными о магазине {id}</h1>
} 

export default ShopPage;
