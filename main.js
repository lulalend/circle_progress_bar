let progressBar = document.querySelector('.progress-bar'),
    progressValue = document.querySelector('#progress-value'),
    isAnimate = document.querySelector('#switch-animate'),
    isHide = document.querySelector('#switch-hide');

const progressStartValue = 0,
    progressEndValue = 100,
    speed = 100;

let animateFunc;

const setProgress = (value) => {
    progressBar.style.background = `conic-gradient(#6ca1fc ${value * 3.6}deg, #ededed 0deg)`;
}

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
        let currentProgress = progressStartValue;

        animateFunc = setInterval(() => {
            currentProgress++;

            if (currentProgress > progressEndValue)
                currentProgress = progressStartValue;

            progressValue.value = currentProgress;
            setProgress(currentProgress);
        }, speed);
    } else {
        clearInterval(animateFunc);
        setProgress(progressStartValue);
    }
});

isHide.addEventListener('click', () => {
    if (isHide.checked)
        progressBar.classList.add('hidden');
    else
        progressBar.classList.remove('hidden');
});





