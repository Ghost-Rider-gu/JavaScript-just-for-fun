const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const steps = document.querySelectorAll('.step');
const progressTracker = document.getElementById('progress-tracker');

let currentStep = 1;

nextButton.addEventListener('click', () => {
    currentStep++;
    if (currentStep > steps.length) {
        currentStep = steps.length;
    }

    updateState();
});

previousButton.addEventListener('click', () => {
    currentStep--;
    if (currentStep < 1) {
        currentStep = 1;
    }

    updateState();
});

function updateState() {
    steps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add('active')
        } else {
            step.classList.remove('active');
        }
    })

    const stepsSoFar = document.querySelectorAll('.active');
    progressTracker.style.width = (stepsSoFar.length - 1) / (steps.length - 1) * 100 + '%';

    if (currentStep === 1) {
        previousButton.disabled = true;
    } else if (currentStep === steps.length) {
        nextButton.disabled = true;
    } else {
        previousButton.disabled = false;
        nextButton.disabled = false;
    }
}
