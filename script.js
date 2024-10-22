document.addEventListener('DOMContentLoaded', function () {
    const chimpSound = document.getElementById('chimp-sound');
    const swingingChimp = document.getElementById('swinging-chimp');

    // Play chimp sound when the animation starts
    swingingChimp.addEventListener('animationstart', () => {
        chimpSound.play();
    });
});
