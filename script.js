const quotes = [
    {
        arabic: "البكاء من خشية الله مفتاح رحمته، ودموع الخوف تطفئ نار الذنوب",
        albanian: "Qarja nga frika e Allahut është çelësi i mëshirës së Tij, dhe lotët e frikës shuan zjarrin e mëkateve.",
        context: "Abdullah ibn Mubarak theksonte se lotët e sinqertë në adhurim janë shenjë e zemrës së gjallë dhe të lidhur me Allahun."
    },
    {
        arabic: "إذا جفت العين من البكاء فقد قست القلوب",
        albanian: "Kur syri thahet nga qarje, atëherë zemrat janë ngurtësuar.",
        context: "Ai paralajmëronte se mungesa e lotëve në namaz dhe dhikër mund të jetë shenjë e ngurtësisë së zemrës."
    },
    {
        arabic: "ما رأيت شيئا أحب إلى الله من دموع تسيل من عينين خاشعتين",
        albanian: "Nuk kam parë asgjë më të dashur për Allahun se lotët që rrjedhin nga sytë e përulur.",
        context: "Ibn Mubarak e konsideronte qarjen në përkujtim të Allahut si një nga veprat më fisnike."
    },
    {
        arabic: "من بكى على ذنبه كان ذلك له نورا يوم القيامة",
        albanian: "Ai që qan për mëkatin e tij, ajo do të jetë për të një dritë në Ditën e Gjykimit.",
        context: "Ai theksonte rëndësinë e pendimit të sinqertë dhe lotëve të pendimit."
    },
    {
        arabic: "البكاء في جوف الليل خير من الضحك في النهار",
        albanian: "Qarja në mes të natës është më e mirë se të qeshurit gjatë ditës.",
        context: "Abdullah ibn Mubarak ishte i njohur për namazet e tij të gjata të natës dhe lotët e tij në lutje."
    },
    {
        arabic: "إذا لم تستطع البكاء فتباكى، فإن القلب الذي لا يبكي قلب ميت",
        albanian: "Nëse nuk mund të qash, përpiqu të qash, sepse zemra që nuk qan është zemër e vdekur.",
        context: "Ai këshillonte ndjekësit e tij të përpiqen të zbusin zemrat e tyre edhe kur lotët nuk vinin lehtë."
    },
    {
        arabic: "دموع التوبة تغسل أدران المعاصي",
        albanian: "Lotët e pendimit lajnë papastërtinë e mëkateve.",
        context: "Ibn Mubarak besonte se pendimi i vërtetë shoqërohet me lot dhe zemër të thyer."
    },
    {
        arabic: "من لم تدمع عيناه عند ذكر الموت والآخرة فليتفقد قلبه",
        albanian: "Kush nuk i rrjedhin lotët kur përmenden vdekja dhe Ahireti, le të kontrollojë zemrën e tij.",
        context: "Një këshillë e Abdullah ibn Mubarak për vetëreflektim dhe kontrollin e gjendjes shpirtërore."
    }
];

let currentIndex = 0;

function displayQuote(index) {
    const quotesContainer = document.getElementById('quotesContainer');
    const quote = quotes[index];

    quotesContainer.innerHTML = `
        <div class="quote-card">
            <div class="quote-arabic">${quote.arabic}</div>
            <div class="quote-albanian">${quote.albanian}</div>
            <div class="quote-context">${quote.context}</div>
        </div>
    `;

    updateCounter();
    updateButtons();
}

function updateCounter() {
    const counter = document.getElementById('counter');
    counter.textContent = `${currentIndex + 1} / ${quotes.length}`;
}

function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === quotes.length - 1;
}

function nextQuote() {
    if (currentIndex < quotes.length - 1) {
        currentIndex++;
        displayQuote(currentIndex);
    }
}

function prevQuote() {
    if (currentIndex > 0) {
        currentIndex--;
        displayQuote(currentIndex);
    }
}

function randomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentIndex = randomIndex;
    displayQuote(currentIndex);
}

// Event listeners
document.getElementById('nextBtn').addEventListener('click', nextQuote);
document.getElementById('prevBtn').addEventListener('click', prevQuote);
document.getElementById('refreshBtn').addEventListener('click', randomQuote);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextQuote();
    } else if (e.key === 'ArrowLeft') {
        prevQuote();
    } else if (e.key === 'r' || e.key === 'R') {
        randomQuote();
    }
});

// Initial display
displayQuote(currentIndex);
