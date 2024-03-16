import React, { useState } from 'react';

const GeolocationPage = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Геолокация не поддерживается вашим браузером');
    }
  };

  return (
    <div>
      <h1>Запрос геопозиции</h1>
      <button onClick={getLocation}>Получить геопозицию</button>
      {latitude && longitude && (
        <div>
          <h2>Ваши координаты:</h2>
          <p>Широта: {latitude}</p>
          <p>Долгота: {longitude}</p>
        </div>
      )}
      {error && <p>Ошибка: {error}</p>}
    </div>
  );
};

export default GeolocationPage;
