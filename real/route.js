var fs=require("fs");
var yewu=require("./yewu");
module.exports.bind=function(server){
    server.on("request",function(req,res){
    if(req.url=="/"){
        res.end(yewu.data);
    }else{
        fs.readFile("."+req.url,function(err,data){
            
            res.end(data);
        })
    }
})
}
