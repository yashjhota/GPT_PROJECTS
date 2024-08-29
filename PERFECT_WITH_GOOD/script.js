// Function to redirect to the Attendance page
function redirectToAttendance() {
    window.location.href = 'attendance.html';
}


// Define student data
const students = [
    { usn: "22BTRCN155", name: "Kuushal Kamboji" },
    { usn: "22BTRCN157", name: "Mathew Abraham Leo" },
    { usn: "22BTRCN158", name: "MANOJ KUMAR LINGUTLA" },
    { usn: "22BTRCN161", name: "Neel Kariappa M M" },
    { usn: "22BTRCN162", name: "Sashank Maddula" },
    { usn: "22BTRCN163", name: "Rohith Madineni" },
    { usn: "22BTRCN167", name: "Rakshith Kumar.M" },
    { usn: "22BTRCN173", name: "Mohamed Faiz V S" },
    { usn: "22BTRCN175", name: "SAI HASHWANTH REDDY M" },
    { usn: "22BTRCN176", name: "Deepthi. Mullaguru" },
    { usn: "22BTRCN177", name: "Sai venkata praneeth myla" },
    { usn: "22BTRCN178", name: "N Bala Mohan" },
    { usn: "22BTRCN180", name: "Nakul Govind S" },
    { usn: "22BTRCN183", name: "SANTHOSH REDDY NAMALA" },
    { usn: "22BTRCN186", name: "MOURYA VARDHAN GOWD NEELLA" },
    { usn: "22BTRCN187", name: "Punarvika Neeluri" },
    { usn: "22BTRCN188", name: "Nikhil Reddy K" },
    { usn: "22BTRCN191", name: "Niraj Shah Rauniyar" },
    { usn: "22BTRCN193", name: "Omswaroop T M" },
    { usn: "22BTRCN199", name: "PARAS" },
    { usn: "22BTRCN200", name: "Parth Jain" },
    { usn: "22BTRCN201", name: "Sharani Sai.P" },
    { usn: "22BTRCN205", name: "Pooja.H" },
    { usn: "22BTRCN222", name: "Rahul Rajasekharan Menon" },
    { usn: "22BTRCN224", name: "Rakesh M" },
    { usn: "22BTRCN226", name: "RATHAN S" },
    { usn: "22BTRCN234", name: "Rohith s" },
    { usn: "22BTRCN240", name: "saivenkatpujari224@gmail.com" },
    { usn: "22BTRCN246", name: "Sanskriti Saxena" },
    { usn: "22BTRCN252", name: "Shaik Nida Fathima" },
    { usn: "22BTRCN257", name: "Shashank. S" },
    { usn: "22BTRCN260", name: "Shikhar S" },
    { usn: "22BTRCN262", name: "Shreya Badarish" },
    { usn: "22BTRCN263", name: "Shreya k" },
    { usn: "22BTRCN267", name: "Shrutakeval H A" },
    { usn: "22BTRCN270", name: "Shyam Sundar G" },
    { usn: "22BTRCN272", name: "Sindhu R" },
    { usn: "22BTRCN273", name: "Sirrisathwik" },
    { usn: "22BTRCN275", name: "Sreenath S" },
    { usn: "22BTRCN276", name: "Sreerag Pradeepan" },
    { usn: "22BTRCN277", name: "SREERAM ES" },
    { usn: "22BTRCN285", name: "Sudeeksha Bhat" },
    { usn: "22BTRCN289", name: "Sushmith S Mokashi" },
    { usn: "22BTRCN290", name: "BHAVYA SRI TALARI" },
    { usn: "22BTRCN291", name: "Tamil Iniyan KS" },
    { usn: "22BTRCN294", name: "Tanni Saha Puja" },
    { usn: "22BTRCN295", name: "Tanvi S" },
    { usn: "22BTRCN301", name: "Thanu Shree K" },
    { usn: "22BTRCN304", name: "Trishlaa S" },
    { usn: "22BTRCN307", name: "Mokshith V" },
    { usn: "22BTRCN308", name: "Hima Bindhu .V" },
    { usn: "22BTRCN309", name: "Bindhu sri reddy.V" },
    { usn: "22BTRCN313", name: "Varshitha Y" },
    { usn: "22BTRCN314", name: "Varun.R" },
    { usn: "22BTRCN316", name: "Varuni L" },
    { usn: "22BTRCN317", name: "Vasundhara parihar" },
    { usn: "22BTRCN327", name: "YASH KUMAR JAIN M" },
    { usn: "22BTRCN329", name: "YASHWANT PATEL" },
    { usn: "22BTRCN330", name: "Chandana.Y" },
    { usn: "22BTRCN331", name: "Yoshita Punnati" },
    { usn: "22BTREC026", name: "Pavan O C" },
    { usn: "22BTREI002", name: "Anusha Hiregoudar" },
    { usn: "22BTTCN003", name: "Nisha p" },
    { usn: "22BTTCN004", name: "RAGHAVAN S" }
];

// Populate the datalist with USNs
const usnList = document.getElementById('usnList');
students.forEach(student => {
    let option = document.createElement('option');
    option.value = student.usn;
    usnList.appendChild(option);
});

// Populate student name based on USN input
document.getElementById('studentUSN').addEventListener('input', function() {
    const usnInput = this.value;
    const student = students.find(student => student.usn === usnInput);
    document.getElementById('studentName').value = student ? student.name : '';
});

// Set the date input to the current date
// Set the date input to the current date correctly
window.onload = function() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, '0');

    // Format date as YYYY-MM-DD
    const formattedDate = `${yyyy}-${mm}-${dd}`;

    document.getElementById('date').value = formattedDate;
    document.getElementById('dateFilter').value = formattedDate; // Also set for report filtering
};


// Ensure only one checkbox is selected
document.getElementById('present').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('absent').checked = false;
    }
});

document.getElementById('absent').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('present').checked = false;
    }
});

// Ensure the form is properly submitted
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submission
    document.getElementById('attendanceForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const usn = document.getElementById('studentUSN').value;
        const name = document.getElementById('studentName').value;
        const date = document.getElementById('date').value;
        const course = document.getElementById('courseFilter').value;
        let status = '';

        if (document.getElementById('present').checked) {
            status = 'Present';
        } else if (document.getElementById('absent').checked) {
            status = 'Absent';
        } else {
            alert('Please select either Present or Absent.');
            return;
        }

        // Save attendance data to localStorage
        let attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || [];

        // Check for duplicate entry
        const duplicateEntry = attendanceData.find(record => 
            record.usn === usn && record.date === date && record.course === course
        );

        if (duplicateEntry) {
            alert(`Attendance for ${name} (${usn}) in ${course} on ${date} is already marked.`);
            return;
        }

        // Save the new attendance record if no duplicate is found
        attendanceData.push({ usn, name, date, course, status });
        localStorage.setItem('attendanceData', JSON.stringify(attendanceData));

        alert(`Attendance recorded for ${name} (${usn}) on ${date}: ${status}`);

        // Clear the form fields after submission
        document.getElementById('attendanceForm').reset();

        // Reset the date to today's date after clearing the form
        document.getElementById('date').value = new Date().toISOString().split('T')[0];
    });
});





// Function to generate the report based on the selected date and course
function generateReport() {
    let reportContainer = document.getElementById('report');
    let attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || [];
    let selectedDate = document.getElementById('dateFilter').value;
    let selectedCourse = document.getElementById('courseFilter').value;

    if (!selectedDate) {
        alert("Please select a date to generate the report.");
        return;
    }

    // Filter attendance data by the selected date and course
    let filteredData = attendanceData.filter(record => 
        record.date === selectedDate && 
        (selectedCourse === 'All' || record.course === selectedCourse)
    );

    if (filteredData.length === 0) {
        reportContainer.innerHTML = `<p>No attendance data available for ${selectedCourse} on ${selectedDate}.</p>`;
        return;
    }

    let reportHTML = `<h3>Attendance Report for ${selectedCourse === 'All' ? 'All Courses' : selectedCourse} on ${selectedDate}</h3>
                      <table border="1">
                      <tr><th>Course</th><th>USN</th><th>Name</th><th>Status</th><th>Action</th></tr>`;

    filteredData.forEach((record, index) => {
        reportHTML += `<tr>
            <td>${record.course}</td>
            <td>${record.usn}</td>
            <td>${record.name}</td>
            <td>${record.status}</td>
            <td><button onclick="deleteRecord(${index})">Delete</button></td>
        </tr>`;
    });
    reportHTML += '</table>';
    reportContainer.innerHTML = reportHTML;
}

// Event listener for the Generate Report button
document.getElementById('generateReportButton').addEventListener('click', generateReport);

// Function to delete a record
function deleteRecord(index) {
    let attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || [];
    attendanceData.splice(index, 1);
    localStorage.setItem('attendanceData', JSON.stringify(attendanceData));
    generateReport(); // Refresh the report after deletion
}



// Function to download the report as an Excel file
function downloadExcel() {
    let table = document.querySelector('#report table');
    let wb = XLSX.utils.table_to_book(table);
    XLSX.writeFile(wb, 'Attendance_Report.xlsx');
}

// Function to download the report as a CSV file
function downloadCSV() {
    let table = document.querySelector('#report table');
    let csv = [];
    for (let row of table.rows) {
        let cols = [];
        for (let cell of row.cells) {
            cols.push(cell.innerText);
        }
        csv.push(cols.join(","));
    }
    let csvString = csv.join("\n");
    let a = document.createElement('a');
    a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvString);
    a.target = '_blank';
    a.download = 'Attendance_Report.csv';
    a.click();
}
