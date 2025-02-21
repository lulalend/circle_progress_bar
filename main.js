let progressBar = document.querySelector('.progress-bar'),
    progressValue = document.querySelector('#progress-value'),
    isAnimate = document.querySelector('#switch-animate'),
    isHide = document.querySelector('#switch-hide');

const progressStartValue = 0,
    progressEndValue = 100,
    speed = 30;

let animateFunc, rotationAngle = 0, stopAnimationFunc;

const setProgress = (value) => {
    let progressAngle = value * 3.6;
    progressBar.style.background = `conic-gradient(var(--dark-blue) ${progressAngle}deg, var(--progress-bar) 0deg)`;
};


const stopAnimation = () => {
    stopAnimationFunc = setInterval(() => {
        rotationAngle += 5;
        progressBar.style.transform = `rotate(${rotationAngle}deg)`;

        if (rotationAngle % 360 === 0) {
            clearInterval(stopAnimationFunc);
        }
    }, speed);
};

progressValue.addEventListener('input', () => {
    if (progressValue.value >= progressStartValue && progressValue.value <= progressEndValue)
        setProgress(progressValue.value);
    else {
        setProgress(progressStartValue);
        progressValue.value = progressStartValue;
    }
});


isAnimate.addEventListener('click', () => {
    if (isAnimate.checked) {
        animateFunc = setInterval(() => {
            rotationAngle += 5;
            progressBar.style.transform = `rotate(${rotationAngle}deg)`;
        }, speed);
    } else {
        clearInterval(animateFunc);
        stopAnimation();
    }
});

isHide.addEventListener('click', () => {
    if (isHide.checked)
        progressBar.classList.add('hidden');
    else
        progressBar.classList.remove('hidden');
});





