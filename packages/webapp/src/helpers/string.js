export const maxLength = (value, max) => {
    if (value.length > max) {
        return `${value.substring(0, max)}...`;
    }

    return value;
};

export const toCurrency = value => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return formatter.format(value);
};