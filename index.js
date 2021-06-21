const https = require("https");
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
var get_output = require('./utils/result').get_output;
var get_array_from = require('./utils/string').get_array_from;

//check arguments availability
if (argv._.length === 3) {
    if (isNaN(argv._[0]) || isNaN(argv._[1]) || !isNaN(argv._[2])) {
        console.log('Incorrect arguments.');
    }else {
        const x_coord = argv._[0];
        const y_coord = argv._[1];
        const shop_data_url = argv._[2];

        try {
            https.get(shop_data_url, response => {
                var body = '';
                response.on('data', function (chunk) {
                    body += chunk;
                });
                response.on('end', function () {
                    console.log(get_output(x_coord, y_coord, get_array_from(body)));                             
                });
            }).on('error', function(e) {
                console.log('Shop data url is incorrect. Please check again.');              
            });
        }catch (error) {
            console.log("Invalid shop data url.");
        }        
    }
}else {
    console.log('Please provide 3 arguments - <user x coordinate> <user y coordinate> <shop data url>');
}