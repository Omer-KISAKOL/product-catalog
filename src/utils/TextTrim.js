// Metni verilen uzunluğa göre kısaltan fonksiyon
export const trimText = (text, length) => {
    if (text){
        return text.length > length ? text.substring(0, length) + '...' : text;
    }
};