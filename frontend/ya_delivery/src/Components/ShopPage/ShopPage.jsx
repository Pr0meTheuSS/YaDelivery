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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column", // добавлено для вертикального выравнивания элементов списка
          backgroundColor: "#333", // фон всего контейнера
          borderRadius: "8px",
          padding: "20px", // добавлено немного внутреннего отступа для визуального улучшения
        }}
      >
        <h2>Products:</h2>
        <ul
          
        >
          {data.GetProducts.map((product) => (
            <li 
              style={{
                backgroundColor: "#444", // фон каждой карточки продукта
                borderRadius: "8px", // скругление углов каждой карточки
                margin: "10px", // отступы между карточками
                padding: "10px", // внутренние отступы карточек
                color: '#FFF' // цвет текста в карточке, чтобы лучше читался на темном фоне
              }}
              key={product.idPriduct}>
              <h3>{product.name}</h3>
              <p>Cost: {product.cost}</p>
              <button
                style={{ 
                  backgroundColor: '#FFF', // фон кнопки
                  color: '#333', // цвет текста кнопки
                  border: 'none', // убрать стандартный бордер кнопки
                  padding: '5px 10px', // паддинги кнопки
                  borderRadius: '5px', // скругление углов кнопки
                  cursor: 'pointer', // курсор в виде указателя
                  marginTop: '10px'
                }}
              >Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopPage;