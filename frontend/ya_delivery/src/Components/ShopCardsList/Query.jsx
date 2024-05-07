import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

export const getShops = gql`
  query GetShops($lat: Float!, $lon: Float!) {
    GetShops(lat: $lat, lon: $lon) {
      id
      name
    }
  }
`;

const getProducts = gql`
  query GetProducts($idShop: ID!) {
    GetProducts(idShop: $idShop) {
      id
      name
      price
    }
  }
`;
