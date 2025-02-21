class ProgressBar {
    constructor(
      progressBarSelector,
      progressValueSelector,
      animateSwitchSelector,
      hideSwitchSelector,
      speed = 30
    ) {
        this.progressBar = document.querySelector(progressBarSelector);
        this.progressValue = document.querySelector(progressValueSelector);
        this.isAnimate = document.querySelector(animateSwitchSelector);
        this.isHide = document.querySelector(hideSwitchSelector);
        this.speed = speed;

        this.progressStartValue = 0;
        this.progressEndValue = 100;
        this.rotationAngle = 0;
        this.animateFunc = null;

        this.initEventListeners();
    }

    setProgress(value) {
        let progressAngle = value * 3.6;
        this.progressBar.style.background = `conic-gradient(var(--dark-blue) ${progressAngle}deg, var(--progress-bar) 0deg)`;
    }

    rotateProgress(angle) {
        this.rotationAngle += angle;
        this.progressBar.style.transform = `rotate(${this.rotationAngle}deg)`;
    }

    handleProgressInput() {
        if (
          this.progressValue.value >= this.progressStartValue
          && this.progressValue.value <= this.progressEndValue
        )
            this.setProgress(this.progressValue.value);
        else {
            this.setProgress(this.progressStartValue);
            this.progressValue.value = this.progressStartValue;
        }
    }

    toggleAnimation() {
        if (this.isAnimate.checked) {
            this.animateFunc = setInterval(() => this.rotateProgress(5), this.speed);
        } else {
            clearInterval(this.animateFunc);
            this.rotationAngle = 0;
            this.progressBar.style.transform = `rotate(0deg)`;
        }
    }

    toggleVisibility() {
        this.progressBar.classList.toggle('hidden', this.isHide.checked);
    }

    initEventListeners() {
        this.progressValue.addEventListener('input', () => this.handleProgressInput());
        this.isAnimate.addEventListener('click', () => this.toggleAnimation());
        this.isHide.addEventListener('click', () => this.toggleVisibility());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const progress = new ProgressBar(
      '.progress-bar',
      '#progress-value',
      '#switch-animate',
      '#switch-hide'
    );
});

document.querySelector('input[type="number"]').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/^0+(?=\d)/g, "");
});
