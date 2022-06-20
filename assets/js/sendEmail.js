function sendMail(contactForm) {
    let templateParams = {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    };
    emailjs.send("service_z62vlkr", "Ed_Resume", templateParams, "Uyx9ucl6_uY6UvvRF")
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new
}