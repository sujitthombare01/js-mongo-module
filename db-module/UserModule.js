
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchema   = schema({
 clnt : { type :String , default :'4500' }  ,
 lang : { type :String , default :'EN' } ,
 cmpn :  { type :String , default :'1000' } ,
 username : {type :String , unique : true, required :true} ,
 first_name : {type :String ,  required : [true,'required first name'] } ,
 last_name : {type :String ,  required : [true,'required last name'] } ,
 email : {type :String ,  required : [true,'required email'] } ,
 mobile : {type :String ,  required : [true,'required mobile'] } ,
 groups : [{type :schema.Types.ObjectId ,ref :'groupmaster'}]
});

module.exports = mongoose.model('users',userSchema);