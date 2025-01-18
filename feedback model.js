const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
    category: { type: String, required: true },
    priority: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Resolved'], default: 'Pending' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Feedback', feedbackSchema);