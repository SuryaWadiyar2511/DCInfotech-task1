import { submitFeedback, getFeedbackStats } from '../controllers/Feedbackcontroller.js';


router.get('/export-pdf', exportFeedbackPDF);
router.get('/export-excel', exportFeedbackExcel);

module.exports = router;