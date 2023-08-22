var mongoose = require('mongoose');

//Schema: khai báo, định nghĩa cấu trúc của bảng (tên các cột và kiểu dữ liệu tương ứng)
var CategorySchema  = mongoose.Schema(
    {
        name : String,

    }
)
const CategoryModel = mongoose.model('category', CategorySchema, 'category');
module.exports = CategoryModel;