document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.getElementById('openModal');
    const modal = document.getElementById('addSkillModal');
    const closeModalButton = document.getElementById('closeModal');
    const addSkillButton = document.getElementById('addSkillButton');

    openModalButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    addSkillButton.addEventListener('click', () => {
        const skillName = document.getElementById('skill').value;
        const proficiency = document.getElementById('proficiency').value;
        const skillsContainer = document.querySelector('.skills-container');
        if (skillName && proficiency) {
            const newSkill = document.createElement('div');
            newSkill.className = 'skill';
            newSkill.innerHTML = `
                <div class="skill-info">
                    <span>${skillName}</span>
                    <span class="percentage">${proficiency}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress" style="width: ${proficiency}%;"></div>
                </div>
            `;

            const skillCategory = skillsContainer.querySelector('.skill-category');
            skillCategory.appendChild(newSkill);
            modal.style.display = 'none';

            // Clear the input fields
            document.getElementById('skill').value = '';
            document.getElementById('proficiency').value = '';
        } else {
            alert('Please fill out both fields.');
        }
    });
});
