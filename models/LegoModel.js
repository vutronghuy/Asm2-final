var mongoose = require('mongoose');

//Schema: khai báo, định nghĩa cấu trúc của bảng (tên các cột và kiểu dữ liệu tương ứng)
var LegoSchema  = mongoose.Schema(
    {
        name : String,
        age : Number,
        sku : Number,
        image : String, 
        des : String,
        price : Number,
        NSX : Date,
        best : String
    }
)
const LegoModel = mongoose.model('lego', LegoSchema, 'lego');
module.exports = LegoModel;