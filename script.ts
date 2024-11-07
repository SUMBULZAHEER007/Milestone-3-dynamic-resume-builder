// Access form and output div
const form = document.getElementById('resume-form') as HTMLFormElement;
const outputDiv = document.getElementById('resume-output') as HTMLElement;

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh

    // Get values from form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Display data
    outputDiv.innerHTML = `
        <h2>Generated Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Work Experience:</strong> ${experience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;

    outputDiv.style.display = 'block'; // Show resume output
});
