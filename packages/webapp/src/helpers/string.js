export const maxLength = (value, max) => {
    if (value.length > max) {
        return `${value.substring(0, max)}...`;
    }

    return value;
};