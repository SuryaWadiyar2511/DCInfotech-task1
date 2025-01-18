document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/feedback/stats', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
        .then((res) => res.json())
        .then((data) => {
            const ctx = document.getElementById('feedbackChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.categories,
                    datasets: [{ label: 'Feedback Count', data: data.counts, backgroundColor: ['#0073e6', '#ffc107', '#28a745'] }],
                },
            });
        });

    document.getElementById('exportPDF').addEventListener('click', () => {
        fetch('/api/feedback/export-pdf', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'feedback.pdf';
                a.click();
            });
    });

    document.getElementById('exportExcel').addEventListener('click', () => {
        fetch('/api/feedback/export-excel', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'feedback.xlsx';
                a.click();
            });
    });
});
