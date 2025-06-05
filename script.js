
        document.addEventListener('DOMContentLoaded', function () {
            // Get references to DOM elements
            const menuToggle = document.getElementById('menuToggle');
            const navMenu = document.getElementById('navMenu');
            const navLinks = document.querySelectorAll('.nav-link');
            const contactForm = document.getElementById('contactForm');
            const successMessage = document.getElementById('successMessage');

            // --- Mobile Navigation Toggle Functionality (Simple JS for Responsiveness) ---
            // This toggles the 'active' classes which trigger CSS styles for showing/hiding the mobile menu
            menuToggle.addEventListener('click', function () {
                navMenu.classList.toggle('active');
                menuToggle.classList.toggle('active'); // For animating the hamburger icon to an 'X'
            });

            // Close mobile menu when a navigation link is clicked (for single-page navigation)
            navLinks.forEach(link => {
                link.addEventListener('click', function () {
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                });
            });

            // --- Contact Form Submission Handling ---
            contactForm.addEventListener('submit', function (event) {
                event.preventDefault(); // Prevent the default form submission (page reload)

                // Basic client-side form validation
                let isValid = true;
                const requiredInputs = contactForm.querySelectorAll('[required]');
                requiredInputs.forEach(input => {
                    // Check if required fields are empty (after trimming whitespace)
                    if (!input.value.trim()) {
                        isValid = false;
                        input.style.borderColor = 'var(--error-color)'; // Highlight empty fields
                    } else {
                        input.style.borderColor = '#e0e0e0'; // Reset border for valid fields
                    }
                });

                if (isValid) {
                    // In a real-world scenario, you would send this form data to a server
                    // using fetch API or XMLHttpRequest, e.g., to a backend endpoint or a service like Formspree.
                    console.log('Form Submitted!', new FormData(contactForm));

                    // Show the success message
                    successMessage.classList.add('show');

                    // Reset the form and hide the success message after a delay
                    setTimeout(() => {
                        contactForm.reset(); // Clears all form fields
                        successMessage.classList.remove('show'); // Hides the message
                        // Ensure all input borders are reset after form reset
                        contactForm.querySelectorAll('.form-control').forEach(input => {
                            input.style.borderColor = '#e0e0e0';
                        });
                    }, 3000); // 3 seconds delay
                } else {
                    // Use a custom modal or message box in a production app, not alert()
                    // alert('Please fill in all required fields.'); // Removed as per instructions
                    console.error('Please fill in all required fields.'); // Log error instead
                }
            });

            // --- Placeholder Functions (Replace with actual functionality) ---

            // Function to handle CV download
            window.downloadCV = function() {
                // In a real application, you would provide a direct link to your CV file.
                // For example: window.open('path/to/your/cv.pdf', '_blank');
                console.log('CV download initiated.');
                // Using console.log instead of alert() as per instructions
            };

            // Function to open project live demos
            window.openDemo = function(projectId) {
                // Replace with actual URLs for your projects
                console.log(`Attempting to open live demo for project: ${projectId}`);
                // Example of how you might link to specific projects:
                // if (projectId === 'project1') {
                //     window.open('https://your-ecommerce-demo.com', '_blank');
                // } else if (projectId === 'project2') {
                //     window.open('https://your-task-app-demo.com', '_blank');
                // }
            };

            // Function to open social media links
            window.openSocial = function(platform) {
                // Replace with your actual social media profile URLs
                console.log(`Attempting to open ${platform} profile.`);
                // Example:
                // if (platform === 'linkedin') {
                //     window.open('https://linkedin.com/in/yourprofile', '_blank');
                // } else if (platform === 'twitter') {
                //     window.open('https://twitter.com/yourprofile', '_blank');
                // } else if (platform === 'github') {
                //     window.open('https://github.com/yourprofile', '_blank');
                // }
            };
        });
    