const mongoose = require("mongoose");
     const FeedbackSchema = new mongoose.Schema({
       category: String,
       priority: String,
       message: String,
       userId: mongoose.Schema.Types.ObjectId,
     });
     module.exports = mongoose.model("Feedback", FeedbackSchema);