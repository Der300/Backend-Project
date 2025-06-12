// Fn dung de In Hoa Chu Cai Dau Tien Trong Chuoi
//Vi du: "chuoi string" && "chuoi_string" => "Chuoi String";         "string" =>  "String".
export const capitalizeFirstString = (string) => {
    let str = string.replace(/_/g, ' ').split(' ');
    let result = str.map(text => text[0].toUpperCase() + text.slice(1));
    return result.join(' ');
};