export const changeFormat=(date)=>{
    var date = new Date(dateString);
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    var formattedDate = year + "-" + month + "-" + day;
    return formattedDate;
}