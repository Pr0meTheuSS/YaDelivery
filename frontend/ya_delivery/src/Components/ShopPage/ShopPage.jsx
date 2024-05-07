import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

// const GET_SHOP = gql`
//   query GetShop($shopId: ID!) {
//     shop(id: $shopId) {
//       id
//       name
//       image
//       address
//       geoPos {
//         latitude
//         longitude
//       }
//       info
//     }
//   }
// `;

const getProducts = gql`
  query GetProducts($idShop: ID!) {
    GetProducts(idShop: $idShop) {
      idPriduct
      name
      cost
    }
  }
`;

const ShopPage = () => {
  const { id } = useParams(0);

  const { loading, error, data } = useQuery(getProducts, {
    variables: { idShop: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div>
        <h2>Products:</h2>
        <ul>
          {data.GetProducts.map((product) => (
            <li key={product.idPriduct}>
              <h3>{product.name}</h3>
              <p>Cost: {product.cost}</p>
              <button>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopPage;