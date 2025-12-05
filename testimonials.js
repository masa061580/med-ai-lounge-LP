// セミナー感想データ
const allTestimonials = [
    "長い間ありがとうございました！あっという間でした。",
    "有用な情報を惜しみなく披露してくださりありがとうございます。これからも医療業界へのAI普及を牽引されるよう期待しています。",
    "もっともっと長くなってもいいので聞きたかったです！さらに、今回のレクチャーを分割して深堀してききたいです。",
    "すごくわかりやすかったです。他のアプリの使い方も教えてほしいです。",
    "色々な活用方法を提示頂き驚きました。",
    "過去にも他の講演者のセミナーを視聴しましたが最もわかりやすく実用的でした。ありがとうございました。",
    "医療従事者のための生成AIセミナーというのは今までに参加したことがなかったので、大変勉強になりました。",
    "還暦越えですが大変勉強なりました。記憶や知識が不安になる我々世代こそ必要と感じました。",
    "様々な活用法の解説ありがとうございます。中級編も楽しみにしております。",
    "実践的なことや臨床に即した内容を丁寧に教えていただき、先生のお人柄も伝わりました！",
    "情熱を感じました。長い時間、ありがとうございました。",
    "非常に勉強になるレクチャーを長時間ありがとうございました。どんどん生成AIを使ってみようと思いました。",
    "長い時間、貴重な情報を無料で提供下さりありがとうございました。大変有用な時間になりました。",
    "日常業務にすぐに役立つ内容で学会や研究会ではなかなか聞けない内容で大変ためになりました。",
    "ものすごく勉強になりました。インスタグラムもフォロー シェア メンションします。ありがとうございました。",
    "生成AIについて本当にわかりやすく説明してくださってありがとうございました。私もすこしずつ業務に活かそうと思いました。",
    "ここまで生成AIを利用している先生が身近にいなかったため、ものすごく勉強になり3時間があっという間でした。",
    "画期的でした。ぜひ書籍として今回の内容を出版されてください。必ず買います。",
    "生成AIに関する講習は最近よくみかけますが、勇気を出して先生の講演を聞いてみて良かったです。",
    "とても勉強になりました。お金払ってでも最後まで見たかったです。",
    "J-oslerや臨床経過表作成へのAI活用など卑近なところから、後輩に教えてあげたいです。",
    "知識を惜しげもなく披露してくださりありがとうございます。",
    "非常に有意義な講演でした。ありがとうございます。",
    "先生のこれからのますますの御活躍を期待しています。",
    "次の公演があったら絶対に拝見します。本当にありがとうございました。",
    "生成AIを勉強したくて生成AIパスポートの資格を取りましたが、そんなものよりも実践的で勉強になりました。",
    "Pubmedへのアクセス、非常に感銘を受けました。文献検索のあり方が今後変わりそうです。",
    "AIについて包括的にレクチャーが聴けて大変勉強になりました。",
    "同業の先生で使いこなしている先生のお話は今日から役立つ有用なもので、ワクワクしました。",
    "ありがとうございました。今後も楽しみにしてます。",
    "とても勉強になりました。今後日々の臨床や、論文を書く際に活用していきたいと思います。",
    "目から鱗が落ちるようでした。",
    "非常に参考になる講演感謝します。"
];

// ランダムにシャッフル
function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// カルーセル初期化
function initTestimonialsCarousel() {
    const container = document.getElementById('testimonials-track');
    if (!container) return;

    const shuffledTestimonials = shuffleArray(allTestimonials);
    const displayCount = 3; // 一度に表示する件数
    let currentIndex = 0;

    // HTML生成関数
    function renderTestimonials(startIndex) {
        const items = [];
        for (let i = 0; i < displayCount; i++) {
            const index = (startIndex + i) % shuffledTestimonials.length;
            items.push(`
                <div class="testimonial-item" style="animation-delay: ${i * 0.15}s">
                    <div class="testimonial-content">
                        <span class="quote-icon">"</span>
                        <p>${shuffledTestimonials[index]}</p>
                    </div>
                </div>
            `);
        }
        return items.join('');
    }

    // 初期表示
    container.innerHTML = renderTestimonials(currentIndex);

    // 自動切り替え
    setInterval(() => {
        // フェードアウト
        container.classList.add('fading-out');

        setTimeout(() => {
            currentIndex = (currentIndex + displayCount) % shuffledTestimonials.length;
            container.innerHTML = renderTestimonials(currentIndex);
            container.classList.remove('fading-out');
        }, 500); // フェードアウト時間
    }, 5000); // 5秒ごとに切り替え
}

// DOMContentLoaded時に初期化
document.addEventListener('DOMContentLoaded', initTestimonialsCarousel);
