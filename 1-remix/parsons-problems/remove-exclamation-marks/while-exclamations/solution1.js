export const noExclamation = (str) => {
    while (str.includes('!')) {
        str = str.replace('!', '');
    }
    return str;
};
