import { gql } from '@apollo/client';

export const getShops = gql`
  query GetShops($lat: Float!, $lon: Float!) {
    GetShops(lat: $lat, lon: $lon) {
      id
      name
    }
  }
`;

export const getProducts = gql`
  query GetProducts($idShop: ID!) {
    GetProducts(idShop: $idShop) {
      name
      price
    }
  }
`;
