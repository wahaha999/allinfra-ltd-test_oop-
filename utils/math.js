module.exports = {
    calc_distance_between: function(x1, y1, x2, y2) {
        var a = x1 - x2;
        var b = y1 - y2;

        var c = Math.sqrt( a*a + b*b ).toFixed(4);

        return c;
    }
}