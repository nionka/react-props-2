import PropTypes from 'prop-types';
import Item from '../item/Item';


function Listing({ items }) {

    return (
        <div className="item-list">
            {items.map(item => <Item key={item.listing_id} item={item} />)}
        </div>
    )
}

Listing.defaultProps = {
    items: []
}

Listing.propTypes = {
    items: PropTypes.array
}

export default Listing;