export const convertToCelsius = (fahrenheit) => {
    return Math.ceil((fahrenheit - 32) * (5/9));
}