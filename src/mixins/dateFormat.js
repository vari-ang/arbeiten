export default {
    filters: {
        dateFormat(sec) {
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            const fullDate = new Date(sec);

            //console.log(fullDate);
            //Thu May 19 2011 17:25:38 GMT+1000 {}
            
            //get day, month, and year
            var d = fullDate.getDate(),
                m = monthNames[fullDate.getMonth()],
                y = fullDate.getFullYear(),
                result = d + ' ' + m + ' ' + y;
            
            return result;
        }
    }
}