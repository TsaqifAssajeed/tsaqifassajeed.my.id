document.addEventListener('DOMContentLoaded', function() {
    const schedule = [
        { day: 'Senin', time: '08:00 - 10:00', subject: 'Algoritma Pemrograman' },
        { day: 'Selasa', time: '10:00 - 12:00', subject: 'Agama Islam' },
        { day: 'Rabu', time: '08:00 - 10:00', subject: 'Pengantar Teknologi Informasi' },
        { day: 'Rabu', time: '10:00 - 12:00', subject: 'Pancasila' },
        { day: 'Kamis', time: '10.00 - 12.00', subject: 'Pengenalan Pemrograman' },
        { day: 'kamis', time: '14.00 - 17.00', subject: 'Konsep Sistem Informsi'},
        {day: 'jumat', time: '14.00 - 17.00', subject: 'Matematika Diskrit'},
        // Tambahkan jadwal lainnya di sini
    ];

    const tableBody = document.querySelector('#schedule-table tbody');
    schedule.forEach(entry => {
        const row = document.createElement('tr');
        Object.values(entry).forEach(text => {
            const cell = document.createElement('td');
            cell.textContent = text;
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
});
