document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("openModal").addEventListener("click", function () {
        document.getElementById("skillModal").style.display = "block";
    });

    document.getElementById("cancelModal").addEventListener("click", function () {
        document.getElementById("skillModal").style.display = "none";
        document.getElementById("addSkillForm").reset();
    });


    document.getElementById("addSkillForm").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("add skill");
        const domain = document.getElementById("domain").value;
        const skillRows = document.querySelectorAll(".skill-input-row");
        console.log(domain, skillRows);
        const skillCategoryDiv = document.createElement("div");
        skillCategoryDiv.classList.add("skill-category");

        const categoryTitle = document.createElement("h3");
        categoryTitle.textContent = domain;
        skillCategoryDiv.appendChild(categoryTitle);

        skillRows.forEach(row => {
            const skill = row.querySelector("input[name='skill']").value;
            const proficiency = row.querySelector("input[name='proficiency']").value;

            if (skill && proficiency) {
                const skillDiv = document.createElement("div");
                skillDiv.classList.add("skill");

                const skillInfoDiv = document.createElement("div");
                skillInfoDiv.classList.add("skill-info");

                const skillNameSpan = document.createElement("span");
                skillNameSpan.textContent = skill;

                const proficiencySpan = document.createElement("span");
                proficiencySpan.classList.add("percentage");
                proficiencySpan.textContent = `${proficiency}%`;

                skillInfoDiv.appendChild(skillNameSpan);
                skillInfoDiv.appendChild(proficiencySpan);

                const progressBarDiv = document.createElement("div");
                progressBarDiv.classList.add("progress-bar");

                const progressDiv = document.createElement("div");
                progressDiv.classList.add("progress");
                progressDiv.style.width = `${proficiency}%`;

                progressBarDiv.appendChild(progressDiv);

                skillDiv.appendChild(skillInfoDiv);
                skillDiv.appendChild(progressBarDiv);

                skillCategoryDiv.appendChild(skillDiv);
            }
        });
        console.log(skillCategoryDiv);
        document.getElementById("skill-container").appendChild(skillCategoryDiv);
        document.getElementById("skillModal").style.display = "none";
        document.getElementById("addSkillForm").reset();
    });


    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navList.classList.toggle('show');
    });
});