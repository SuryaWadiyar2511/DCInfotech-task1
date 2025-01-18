import React, { useState } from 'react';
import { submitFeedback } from '../api';
const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        category: '',
        priority: '',
        description: '',
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await submitFeedback(formData);
        console.log(response);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Category" onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
            <input type="text" placeholder="Priority" onChange={(e) => setFormData({ ...formData, priority: e.target.value })} />
            <textarea placeholder="Description" onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
            <button type="submit">Submit Feedback</button>
        </form>
    );
};
export default FeedbackForm;