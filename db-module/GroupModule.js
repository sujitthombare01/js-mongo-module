

var mongoose = require('mongoose');

var groupSchema   = mongoose.Schema({
    clnt : { type :String ,index : true, default :'4500' }  ,
    lang : { type :String ,index : true, default :'EN' } ,
    cmpn :  { type :String ,index : true, default :'1000' } ,
 groupcode : {type :String , unique : true, required :true} ,
 groupname : {type :String , index : true, required : [true,'required group name'] } 

});

module.exports = {
  groupmaster:  mongoose.model('groupmaster',groupSchema)

};