var mongoose = require('mongoose');

//Schema: khai báo, định nghĩa cấu trúc của bảng (tên các cột và kiểu dữ liệu tương ứng)
var ProductSchema  = mongoose.Schema(
    {
        name : String,
        age : Number,
        sku : Number,
        image : String, 
        des : String,
        price : Number

    }
)
const ProductModel = mongoose.model('lego', ProductSchema, 'lego');
module.exports = ProductModel;