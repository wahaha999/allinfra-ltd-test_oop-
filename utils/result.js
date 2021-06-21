var calc_distance_between = require('./math').calc_distance_between;

module.exports = {
    get_output: function(x_coord, y_coord, array) {
        //map initial array to <shop name>,<distance> and get three closest coffee shops
        var result_array = array.map(el => {
                                var shop_info = el.split(',');
                                return shop_info[0] + "," + calc_distance_between(x_coord, y_coord, shop_info[1], shop_info[2]);
                            })
                            .sort((el1, el2) => {
                                var array1 = el1.split(',');
                                var array2 = el2.split(',');
                                return parseFloat(array1[1]) - parseFloat(array2[1]);
                            })
                            .slice(0, 3);

        //get output string from result_array
        var result = '';
        result_array.forEach((el, index) => {
            result += el;
            if (index < 2) {
                result += '\n';
            }
        })
        return result;
    }
}