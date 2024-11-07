"use strict";
// Access form and output div
var form = document.getElementById('resume-form');
var outputDiv = document.getElementById('resume-output');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page refresh
    // Get values from form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Display data
    outputDiv.innerHTML = "\n        <h2>Generated Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Work Experience:</strong> ").concat(experience, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n    ");
    outputDiv.style.display = 'block'; // Show resume output
});
document.getElementById("resume-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from refreshing the page

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    // Generate the resume HTML
    const resumeContent = `
        <div class="resume-section">
            <h3>Personal Information</h3>
            <div class="resume-content">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
            </div>
        </div>
        <div class="resume-section">
            <h3>Education</h3>
            <div class="resume-content">
                <p>${education}</p>
            </div>
        </div>
        <div class="resume-section">
            <h3>Work Experience</h3>
            <div class="resume-content">
                <p>${experience}</p>
            </div>
        </div>
        <div class="resume-section">
            <h3>Skills</h3>
            <div class="resume-content">
                <p>${skills}</p>
            </div>
        </div>
    `;

    // Display the resume
    document.getElementById("resume-output").innerHTML = resumeContent;
});

document.getElementById("clear-form").addEventListener("click", function() {
    document.getElementById("resume-form").reset();  // Reset all fields
    document.getElementById("resume-output").innerHTML = '';  // Clear the generated resume
});
