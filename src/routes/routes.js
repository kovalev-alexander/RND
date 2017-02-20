import express from "express";

let router = express.Router();

router.get("/", function(req, res){
    console.log("GPX read!");
});

export default router;