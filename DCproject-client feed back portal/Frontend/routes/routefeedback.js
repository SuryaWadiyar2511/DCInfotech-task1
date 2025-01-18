import axios from "axios";
axios.post("http://localhost:5000/api/feedback",feedback).then((res) => console.log(res)).catch((err) => console.log(err));
const express = require("express");
     const Feedback = require("../routes/Feedback");
     const router = express.Router();
 
     // Submit feedback
     router.post("/", async (req, res) => {
       const { category, priority, message, userId } = req.body;
       const feedback = new Feedback({ category, priority, message, userId });
       await feedback.save();
       res.status(201).send("Feedback submitted");
     });

     // Get feedback
     router.get("/", async (req, res) => {
       const feedback = await Feedback.find();
       res.send(feedback);
     });

     module.exports = router;