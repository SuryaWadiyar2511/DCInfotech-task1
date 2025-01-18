document.getElementById('feedbackForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const category = document.getElementById('category').value;
  const priority = document.getElementById('priority').value;
  const description = document.getElementById('description').value;

  try {
      const response = await fetch('/api/feedback', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({ category, priority, description }),
      });

      if (response.ok) {
          alert('Feedback submitted successfully!');
      } else {
          alert('Error submitting feedback.');
      }
  } catch (error) {
      alert('Network error.');
    }
});