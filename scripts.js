document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted successfully!');
        
        // Here you can add code to handle the form data, like sending it to a server
        form.reset();
    });
});

function openProject(projectId) {
    const modal = document.getElementById(projectId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeProject(projectId) {
    const modal = document.getElementById(projectId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}
