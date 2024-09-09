var _a;
// listing
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");
    // Type assertions for input elements
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    // Check if all elements are available
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        // Get values from input elements
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create resume output
        var resumeResult = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>");
        // Display resume result
        var resumeResultElement = document.getElementById("resumeResult");
        if (resumeResultElement) {
            resumeResultElement.innerHTML = resumeResult;
        }
        else {
            console.error("Error: unable to find resumeResult element");
        }
    }
    else {
        console.error("One or more input fields are missing");
    }
});
