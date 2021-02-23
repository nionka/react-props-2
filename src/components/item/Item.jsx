import PropTypes from 'prop-types';
import { getPrice, getQuantity } from '../../utils/utils';

function Item({ item }) {
    // console.log(item.state)
    if (item.state !== 'active') return null;

    const { url, MainImage, title, currency_code, price, quantity } = item;

    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={MainImage.url_570xN} alt=''/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title.length > 50 ? `${title.slice(0, 50)}...` : title}</p>
                <p className="item-price">{getPrice(price, currency_code)}</p>
                <p className={`item-quantity level-${getQuantity(quantity)}`}>{quantity} left</p>
            </div>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string,
        MainImage: PropTypes.object,
        title: PropTypes.string,
        currency_code: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.number
    })   
}

export default Item