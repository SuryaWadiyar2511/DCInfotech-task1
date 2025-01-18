const PDFDocument = require('pdfkit');
const excelJS = require('excel');

const exportFeedbackPDF = async (req, res) => {
    const feedbacks = await Feedback.find({});
    const pdf = new PDFDocument();
    pdf.pipe(res);
    feedbacks.forEach((fb) => {
        pdf.text(`Category: ${fb.category}, Priority: ${fb.priority}, Description: ${fb.description}`);
    });
    pdf.end();
};

const exportFeedbackExcel = async (req, res) => {
    const feedbacks = await Feedback.find({});
    const workbook = new excelJS.Workbook();
    const worksheet = workbook.addWorksheet('Feedbacks');
    worksheet.columns = [
        { header: 'Category', key: 'category' },
        { header: 'Priority', key: 'priority' },
        { header: 'Description', key: 'description' },
    ];
    feedbacks.forEach((fb) => worksheet.addRow(fb));
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=feedback.xlsx');
    await workbook.xlsx.write(res);
    res.end();
};