// スティッキーCTAボタンの表示/非表示制御
document.addEventListener('DOMContentLoaded', function () {
    const stickyCta = document.getElementById('sticky-cta');
    const heroSection = document.querySelector('.hero');
    const ctaSection = document.getElementById('register');

    if (!stickyCta || !heroSection) return;

    function updateStickyVisibility() {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const ctaTop = ctaSection ? ctaSection.getBoundingClientRect().top : Infinity;
        const windowHeight = window.innerHeight;

        // ヒーローセクションを過ぎたら表示、CTAセクションが見えたら非表示
        if (heroBottom < 0 && ctaTop > windowHeight) {
            stickyCta.classList.add('visible');
        } else {
            stickyCta.classList.remove('visible');
        }
    }

    // スクロールイベントリスナー
    window.addEventListener('scroll', updateStickyVisibility);

    // 初期状態をチェック
    updateStickyVisibility();
});
