var groupUtils = require('./db-module/GroupModule');
var groupMaster = groupUtils.groupmaster;
var userMaster = require('./db-module/UserModule');

var mongodb = require('./db-connection/mongodb');
var db =mongodb.connection;

db.once('open' , function(cb){
/*
var group1 = new groupMaster({groupcode:'G4',groupname:'group 4'});



group1.save((err)=>{
    if(err)
    {
    console.log(err);
 
    }
    else
    { console.log(group1);

    }
    });

*/

/*
    userMaster.find({}).populate({path :'groups' ,match :{groupcode:'2001'} , select :'groupname'}).exec(function(err,docs){

        if(err){
    console.log('Error');
    return;
        }
    
        docs.map(function(val,index){
            console.log(index);
            if(val.groups.length>0)
            console.log(val);

            console.log('-----------------------------------------------------');
        })
    });
  */  
    
/*
userMaster.find({first_name :'Admin'}).populate('groups').exec(function(err,docs){

    if(err){
console.log('Error');
return;
    }

    docs.map(function(val,index){
        console.log(index);
        console.log(val);
        console.log('-----------------------------------------------------');
    })
});
*/

            

                    
groupMaster.find({groupcode: {$in:['G4']}},'_id', function(err,docs){
    if(err)
    {
        console.log(err);
        db.close();
    }
    else
   { 
    // console.log(docs);
                                    var user1    = new userMaster({
                                        username : 'User2',
                                        first_name : 'User' ,
                                        last_name : '2',
                                        email : 'user.2@itss.com' ,
                                        mobile : '9988776655',
                                        groups : docs
                                            });                            



                                user1.save((err)=>{
                                if(err)
                                {
                                console.log(err);
                             
                                }
                                else
                                { console.log(user1);
                            
                                }
                                });


  
    }

});


    

  
    });







