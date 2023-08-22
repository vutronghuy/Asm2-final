var mongoose = require('mongoose');

//Schema: khai báo, định nghĩa cấu trúc của bảng (tên các cột và kiểu dữ liệu tương ứng)
var NeftSchema  = mongoose.Schema(
    {
        name : String,
        age : Number,
        sku : Number,
        image : String, 
        des : String,
        price : Number

    }
)
const NeftModel = mongoose.model('neft', NeftSchema, 'neft');
module.exports = NeftModel;