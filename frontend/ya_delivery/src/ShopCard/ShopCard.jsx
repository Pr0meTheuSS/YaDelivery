import './ShopCard.css';
import logo from '../assets/base-shop-image.png'

const ShopCard = (props) => {
    return(
        <div className="shop-card-div">
            <img src={logo} alt="Изображение магазина не установлено"></img>
            <div className='text-data-wrapper'>
                <div><h2 className='text shop-name'>Название магазина</h2></div>
                <div><h4 className='text address'>Адрес магазина</h4></div>
            </div>
        </div>
    )
}

export default ShopCard;
