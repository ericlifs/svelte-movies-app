export const getRandomItemOfArray = list => list[Math.floor((Math.random() * list.length))]

export const getStringFromMap = (list, field, joinBy = ',') => list.reduce((memo, current) => {
    if (memo) {
        return `${memo}${joinBy} ${current[field]}`;
    }

    return current[field];
}, '');