

var mysql = require("mysql");


function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}


REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {

    var query;
    var table;

    /////////////////////////////////////////////////////////////GET
    router.get("/fetchCustomer",function(req,res){
            //put the fieldnames instead of *             
            query = "select * from RealDemo.CUSTOMER where CUCUID=1";
            table = [];
            query = mysql.format(query,table);
            connection.query(query,function(err,rows)
            {
                if(err) 
                {
                    res.json({"Error" : true, "Message" : "Error executing MySQL query"});
                } 
                else 
                {
                    console.log("data fetched through a call to API --------------->");
             
                    res.json({"Error" : false, "data" : rows});
                }
            });  
        });
}

module.exports = REST_ROUTER;
