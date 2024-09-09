// listing
document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    // Type assertions for input elements
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    // Check if all elements are available
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        // Get values from input elements
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Create resume output
        const resumeResult = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>`;

        // Display resume result
        const resumeResultElement = document.getElementById("resumeResult");

        if (resumeResultElement) {
            resumeResultElement.innerHTML = resumeResult;
        } else {
            console.error("Error: unable to find resumeResult element");
        }
    } else {
        console.error("One or more input fields are missing");
    }
});
