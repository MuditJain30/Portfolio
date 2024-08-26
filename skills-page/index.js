/*document.getElementById('openModal').addEventListener('click', function() {
    const form = document.getElementById('addSkillForm');
    form.reset();
    
    // Clear any dynamically added skill rows except the first one
    const skillsWrapper = document.getElementById('skillsWrapper');
    skillsWrapper.innerHTML = `
        <div class="skill-input">
            <input type="text" name="skill[]" placeholder="Skill" required>
            <input type="number" name="proficiency[]" placeholder="Proficiency (%)" min="0" max="100" required>
        </div>
    `;
    document.getElementById('addSkillModal').style.display = 'flex';
});

document.getElementById('cancelModal').addEventListener('click', function() {
    document.getElementById('addSkillModal').style.display = 'none';
});

document.getElementById('addSkillRow').addEventListener('click', function() {
    const skillsWrapper = document.getElementById('skillsWrapper');
    const skillInput = document.createElement('div');
    skillInput.className = 'skill-input';
    skillInput.innerHTML = `
        <input type="text" name="skill[]" placeholder="Skill" required>
        <input type="number" name="proficiency[]" placeholder="Proficiency (%)" min="0" max="100" required>
    `;
    skillsWrapper.appendChild(skillInput);
});

document.getElementById('addSkillForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const domain = document.getElementById('domain').value;
    const skills = document.querySelectorAll('input[name="skill[]"]');
    const proficiencies = document.querySelectorAll('input[name="proficiency[]"]');

    let valid = true;
    
    // Validate Domain
    if (domain.trim() === '') {
        valid = false;
        alert('Domain is required.');
    }

    // Validate Skills and Proficiency
    skills.forEach((skill, index) => {
        if (skill.value.trim() === '') {
            valid = false;
            alert('Skill is required.');
        }

        const proficiency = proficiencies[index].value;
        if (proficiency === '' || proficiency < 0 || proficiency > 100) {
            valid = false;
            alert('Proficiency must be between 0 and 100.');
        }
    });

    if (valid) {
        // Submit the form or add skill logic
        alert('Skill added successfully!');
        document.getElementById('addSkillModal').style.display = 'none';
    }
});*/






// Open the modal and reset the form
document.getElementById('openModal').addEventListener('click', function() {
    const form = document.getElementById('addSkillForm');
    form.reset();
    
    document.getElementById('addSkillModal').style.display = 'flex';
});

// Close the modal
document.getElementById('cancelModal').addEventListener('click', function() {
    document.getElementById('addSkillModal').style.display = 'none';
});

// Add a new skill row

// Handle form submission
document.getElementById('addSkillForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const domain = document.getElementById('domain').value;
    const skills = document.querySelectorAll('input[name="skill[]"]');
    const proficiencies = document.querySelectorAll('input[name="proficiency[]"]');

    let valid = true;
    
    // Validate Domain
    if (domain.trim() === '') {
        valid = false;
        alert('Domain is required.');
    }

    // Validate Skills and Proficiency
    skills.forEach((skill, index) => {
        if (skill.value.trim() === '') {
            valid = false;
            alert('Skill is required.');
        }

        const proficiency = proficiencies[index].value;
        if (proficiency === '' || proficiency < 0 || proficiency > 100) {
            valid = false;
            alert('Proficiency must be between 0 and 100.');
        }
    });

    if (valid) {
        // Logic for submitting the form or processing the skills
        alert('Skill added successfully!');
        document.getElementById('addSkillModal').style.display = 'none';
    }
});

