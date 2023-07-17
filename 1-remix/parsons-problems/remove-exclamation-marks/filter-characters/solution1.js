export const noExclamation = (str) =>
    str
        .split('')
        .filter((el) => el !== '!')
        .join('');
