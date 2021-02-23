function getPrice(price, code) {

    if (code === 'USD') {
        return `$${price}`
    }

    if (code === 'EUR') {
        return `€${price}`
    }

    return `${price} ${code}`
}

function getQuantity(number) {
    let abbr = 'high';

    if (number <= 10) {
        abbr = 'low';
    } else if (number <= 20) {
        abbr = 'medium'
    }

    return abbr
}

export { getPrice, getQuantity }