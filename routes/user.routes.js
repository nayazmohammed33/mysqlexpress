const express=require("express");
const router=express.Router();
const {insertIntoDb,updateData,deleteData}=require("../db")


router.post('/',function(req,res){


    insertIntoDb(req.body).then((data)=>{
        console.log(data);
        res.json({
            message:"user Create"
        })
    }).catch(err=>{
        
            console.log(err);
            res.json({
                message:"Error"
        
    })
})

})



router.delete("/data/:id",function(req,res){
    deleteData(req.params.id).then(result=>{
        res.json({
            message:"Successfully Deleted",
            data:result
        })

    }).catch(err=>{
        res.send(err);

    })
  
})




router.put("/data",function(req,res){
    updateData(req.body).then(result=>{
        res.json({
            message:"Successfully Updated",
            data:result
        })

    }).catch(err=>{
        res.send(err);

    })
  
})


module.exports=router;

