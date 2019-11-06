var template=require("art-template");
template.defaults.root="./";
var db=require("./conn");

db.getdata(function(data1){
    module.exports.data1=template("./index.html",{data:data1});
//     module.exports.data2=template("./index.html",{data:data2});

// console.log(datas[1].db_scenicinfo.introduce)
//console.log(data)
})


