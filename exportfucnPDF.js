import jsPDF from 'jspdf';

const exportPDF = (feedbacks) => {
  const doc = new jsPDF();
  doc.text('Feedback Report', 10, 10);
  feedbacks.forEach((fb, index) => {
    doc.text(`${index + 1}. ${fb.description}`, 10, 20 + index * 10);
  });
  doc.save('feedback.pdf');
};