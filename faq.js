// FAQ アコーディオン機能
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        question.addEventListener('click', () => {
            const isOpen = question.getAttribute('aria-expanded') === 'true';

            // 他のFAQを閉じる
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    otherItem.querySelector('.faq-icon').textContent = '+';
                }
            });

            // クリックしたFAQをトグル
            question.setAttribute('aria-expanded', !isOpen);
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.textContent = '−';
            } else {
                answer.style.maxHeight = null;
                icon.textContent = '+';
            }
        });
    });
});
