const programs = {
    foundation: {
        title: "Beginner Workout",
        subtitle: "2-4-week training system for beginners",
        price: "Rs 2500.00",
        phases: [
            {
                title: "Advanced Movement Skills (Week 2-4)",
                icon: "fa-running",
                description: "Learn proper movement patterns and establish neuromuscular connections",
                days: [
                    {
                        title: "Full Body Strength",
                        exercises: [
                            { name: "Goblet Squats", sets: "3-4", reps: "8-10", notes: "Tempo 3-0-1" },
                            { name: "Bench Press", sets: "3", reps: "8-10", notes: "Pause at bottom" },
                            { name: "Lat Pulldown", sets: "3", reps: "10-12", notes: "Squeeze at top" },
                            { name: "Plank", sets: "3", reps: "30-45s", notes: "Maintain neutral spine" }
                        ]
                    },
                    {
                        title: "Home Workout",
                        exercises: [
                            { name: "Bodyweight Lunges", sets: "3", reps: "10/side" },
                            { name: "TRX Rows", sets: "3", reps: "10-12" },
                            { name: "Pallof Press", sets: "3", reps: "10/side" },
                            { name: "Dead Bug", sets: "3", reps: "12/side" }
                        ]
                    }
                ]
            },
            {
                title: "Strength Upgrading (Week 2-4)",
                icon: "fa-dumbbell",
                description: "Build foundational strength with progressive overload",
                days: [
                    {
                        title: "Lower Body Focus",
                        exercises: [
                            { name: "Barbell Squats", sets: "4", reps: "6-8" },
                            { name: "Romanian Deadlifts", sets: "3", reps: "8-10" },
                            { name: "Leg Press", sets: "3", reps: "10-12" },
                            { name: "Calf Raises", sets: "3", reps: "12-15" }
                        ]
                    }
                ]
            }
        ],
        notes: [
            "Perform dynamic warm-up before each session",
            "Rest 30-60 seconds between sets",
            "Increase weight by 2.5-5lbs each week when possible",
            "Record all workouts in provided tracking sheet"
        ]
    },
    hypertrophy: {
        title: "Muscle Architect Workouts",
        subtitle: "8-week hypertrophy-focused training system for intermediates",
        price: "Rs 2800.00",
        phases: [
            {
                title: "Volume Upgrader (Week 4-6)",
                icon: "fa-layer-group",
                description: "High volume phase to stimulate muscle growth",
                days: [
                    {
                        title: "Chest & Triceps",
                        exercises: [
                            { name: "Incline Barbell Press", sets: "4", reps: "8-10" },
                            { name: "Dumbbell Flyes", sets: "3", reps: "10-12" },
                            { name: "Weighted Dips", sets: "3", reps: "8-10" },
                            { name: "Cable Flyes", sets: "3", reps: "12-15" }
                        ]
                    },
                    {
                        title: "Back & Biceps",
                        exercises: [
                            { name: "Pull-ups", sets: "4", reps: "6-8" },
                            { name: "Bent-over Rows", sets: "3", reps: "8-10" },
                            { name: "T-bar Rows", sets: "3", reps: "10-12" },
                            { name: "Face Pulls", sets: "3", reps: "12-15" }
                        ]
                    }
                ]
            },
            {
                title: "Build-Up Workouts (Week 4-6)",
                icon: "fa-fire",
                description: "Increase intensity with advanced techniques",
                days: [
                    {
                        title: "Chest & Triceps (Dropsets)",
                        exercises: [
                            { name: "Flat Bench Press", sets: "4", reps: "6-8" },
                            { name: "Incline DB Press", sets: "3", reps: "8-10 + dropset" },
                            { name: "Cable Crossovers", sets: "3", reps: "12-15 + dropset" }
                        ]
                    }
                ]
            }
        ],
        notes: [
            "45-60 seconds rest between sets",
            "Increase calories by 200-300 during program",
            "Use 2-0-1 tempo for most lifts",
            "Implement 1-2 forced reps on final sets"
        ]
    },
    elite: {
        title: "Peak Performance Program",
        subtitle: "12-week competition prep training system",
        price: "Rs 3500.00",
        phases: [
            {
                title: "Strength Phase (Week 9-12)",
                icon: "fa-weight-hanging",
                description: "Maximize strength with heavy compound lifts",
                days: [
                    {
                        title: "Max Effort Lower",
                        exercises: [
                            { name: "Back Squats", sets: "5", reps: "5 @85% 1RM" },
                            { name: "Front Squats", sets: "3", reps: "5" },
                            { name: "Bulgarian Split Squats", sets: "3", reps: "8/side" }
                        ]
                    },
                    {
                        title: "Dynamic Effort Upper",
                        exercises: [
                            { name: "Bench Press (Speed)", sets: "8", reps: "3 @60% 1RM" },
                            { name: "Weighted Pull-ups", sets: "5", reps: "5" },
                            { name: "Overhead Press", sets: "3", reps: "6-8" }
                        ]
                    }
                ]
            },
            {
                title: "Peaking Phase (Week 9-12)",
                icon: "fa-medal",
                description: "Peak strength and competition preparation",
                days: [
                    {
                        title: "Competition Squat",
                        exercises: [
                            { name: "Squats (Singles)", sets: "5", reps: "1 @90-95% 1RM" },
                            { name: "Paused Squats", sets: "3", reps: "3 @70%" }
                        ]
                    }
                ]
            }
        ],
        notes: [
            "Deload every 4th week",
            "Maintain 1.2-1.5g protein per lb of bodyweight",
            "Implement contrast training for power development",
            "Video analysis of all competition lifts"
        ]
    }
};

function showPlan(programKey) {
    const program = programs[programKey];
    const modal = document.getElementById('program-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalBody = document.getElementById('modal-body');
    const modalCta = document.getElementById('modal-cta');

    modalTitle.textContent = program.title;
    modalSubtitle.textContent = program.subtitle;
    modalCta.textContent = `Get ${program.title} - ${program.price}`;

    let content = `
        <div class="program-description" style="margin-bottom: 3rem;">
            <p style="font-size: 1.1rem; line-height: 1.7; color: var(--light);">${program.subtitle}. This program was designed by our team of professional strength coaches to deliver maximum results through scientifically-proven training methodologies.</p>
        </div>
    `;

    program.phases.forEach(phase => {
        content += `
            <div class="program-phase">
                <div class="phase-header">
                    <div class="phase-icon">
                        <i class="fas ${phase.icon}"></i>
                    </div>
                    <div>
                        <h4 class="phase-title">${phase.title}</h4>
                        <p class="phase-duration">${phase.description}</p>
                    </div>
                </div>
        `;

        phase.days.forEach(day => {
            content += `
                <div class="workout-day">
                    <h5 class="day-title">
                        <i class="fas fa-calendar-day"></i>
                        ${day.title}
                    </h5>
                    <table class="exercise-table">
                        <thead>
                            <tr>
                                <th>Exercise</th>
                                <th>Sets</th>
                                <th>Reps</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${day.exercises.map(ex => `
                                <tr>
                                    <td class="exercise-name">${ex.name}</td>
                                    <td class="exercise-sets">${ex.sets}</td>
                                    <td>${ex.reps}</td>
                                    <td>${ex.notes || ''}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        });

        content += `</div>`; 
    });

    if (program.notes) {
        content += `
            <div class="program-notes">
                <h5 class="notes-title">
                    <i class="fas fa-clipboard-check"></i>
                    Coach's Critical Notes
                </h5>
                <ul class="notes-list">
                    ${program.notes.map(note => `<li>${note}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    content += `
        <div style="margin-top: 3rem; text-align: center; padding: 2rem; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); border-radius: var(--radius-md);">
            <h4 style="color: white; margin-bottom: 1rem; font-size: 1.5rem;">Expected Results</h4>
            <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;">
                <div style="color: white; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; margin-bottom: 0.25rem;">+8-12lbs</div>
                    <div style="font-size: 0.9rem;">Muscle Mass</div>
                </div>
                <div style="color: white; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; margin-bottom: 0.25rem;">+15-25%</div>
                    <div style="font-size: 0.9rem;">Strength Gains</div>
                </div>
                <div style="color: white; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; margin-bottom: 0.25rem;">-3-5%</div>
                    <div style="font-size: 0.9rem;">Body Fat</div>
                </div>
            </div>
        </div>
    `;

    modalBody.innerHTML = content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('program-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const modal = document.getElementById('program-modal');
    if (event.target === modal) {
        closeModal();
    }
};

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});