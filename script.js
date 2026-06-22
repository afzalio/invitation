// ── Load data and populate ──
let DATA = {};

fetch('data.json')
    .then(r => r.json())
    .then(d => {
        DATA = d;
        populateFromData(d);
    });

function populateFromData(d) {
    // Title
    document.title = d.meta.title;
    document.querySelector('meta[name="theme-color"]').content = d.meta.themeColor;

    // Envelope
    document.getElementById('seal-text-ar').textContent = d.envelope.sealTextAr;
    document.getElementById('seal-text-en').textContent = d.envelope.sealTextEn;
    document.getElementById('seal-year').textContent = d.envelope.sealYear;
    document.getElementById('env-couple').textContent = d.envelope.coupleLineEn;
    document.getElementById('env-date').textContent = d.envelope.dateLine;

    // Bismillah
    document.getElementById('peek-bism').textContent = d.bismillah;
    document.getElementById('main-bism').textContent = d.bismillah;

    // Page 1 ribbons
    document.getElementById('p1-ribbon-en').textContent = d.page1.ribbonEn;
    document.getElementById('p1-ribbon-ur').textContent = d.page1.ribbonUr;
    document.getElementById('p1-ribbon-hi').textContent = d.page1.ribbonHi;

    // Family names
    document.getElementById('family-nm-en').innerHTML = d.families.familyNameEn;
    document.getElementById('family-nm-ur').innerHTML = d.families.familyNameUr;
    document.getElementById('family-nm-hi').innerHTML = d.families.familyNameHi;

    // Present text
    document.getElementById('present-en').textContent = d.families.presentEn;
    document.getElementById('present-ur').textContent = d.families.presentUr;
    document.getElementById('present-hi').textContent = d.families.presentHi;

    // Ribbon
    document.getElementById('ribbon-en').textContent = d.families.ribbonEn;
    document.getElementById('ribbon-ur').textContent = d.families.ribbonUr;
    document.getElementById('ribbon-hi').textContent = d.families.ribbonHi;

    // Groom
    document.getElementById('groom-en').textContent = d.groom.nameEn;
    document.getElementById('groom-ur').textContent = d.groom.nameUr;
    document.getElementById('groom-hi').textContent = d.groom.nameHi;
    document.getElementById('groom-parent-en').innerHTML = d.groom.parentLabelEn;
    document.getElementById('groom-parent-ur').textContent = d.groom.parentLabelUr;
    document.getElementById('groom-parent-hi').textContent = d.groom.parentLabelHi;

    // Bride
    document.getElementById('bride-en').textContent = d.bride.nameEn;
    document.getElementById('bride-ur').textContent = d.bride.nameUr;
    document.getElementById('bride-hi').textContent = d.bride.nameHi;
    document.getElementById('bride-parent-en').innerHTML = d.bride.parentLabelEn;
    document.getElementById('bride-parent-ur').textContent = d.bride.parentLabelUr;
    document.getElementById('bride-parent-hi').textContent = d.bride.parentLabelHi;

    // Countdown labels
    document.getElementById('cd-label-en').textContent = d.countdown.labelEn;
    document.getElementById('cd-label-ur').textContent = d.countdown.labelUr;
    document.getElementById('cd-label-hi').textContent = d.countdown.labelHi;

    // Page 1 Quran
    document.getElementById('p1-quran-ar').textContent = d.page1.quranAr;
    document.getElementById('p1-quran-en').textContent = d.page1.quranEn;
    document.getElementById('p1-quran-ur').textContent = d.page1.quranUr;
    document.getElementById('p1-quran-hi').textContent = d.page1.quranHi;
    document.getElementById('p1-quran-ref').textContent = d.page1.quranRef;

    // Page 2 - Ratjaga
    const r = d.events.ratjaga;
    document.getElementById('p2-ribbon-en').textContent = r.ribbonEn;
    document.getElementById('p2-ribbon-ur').textContent = r.ribbonUr;
    document.getElementById('p2-ribbon-hi').textContent = r.ribbonHi;
    document.getElementById('p2-tag-en').innerHTML = r.tagEn;
    document.getElementById('p2-tag-ur').textContent = r.tagUr;
    document.getElementById('p2-tag-hi').textContent = r.tagHi;
    document.getElementById('p2-lbl-en').textContent = r.labelEn;
    document.getElementById('p2-lbl-ur').textContent = r.labelUr;
    document.getElementById('p2-lbl-hi').textContent = r.labelHi;
    document.getElementById('p2-date-en').textContent = r.dateEn;
    document.getElementById('p2-date-ur').textContent = r.dateUr;
    document.getElementById('p2-date-hi').textContent = r.dateHi;
    document.getElementById('p2-time-en').textContent = r.timeEn;
    document.getElementById('p2-time-ur').textContent = r.timeUr;
    document.getElementById('p2-time-hi').textContent = r.timeHi;
    document.getElementById('p2-time-sub').textContent = r.timeSub;
    document.getElementById('p2-venue-en').textContent = r.venueLabelEn;
    document.getElementById('p2-venue-ur').textContent = r.venueLabelUr;
    document.getElementById('p2-venue-hi').textContent = r.venueLabelHi;
    document.getElementById('p2-addr-en').innerHTML = r.addressEn;
    document.getElementById('p2-addr-ur').innerHTML = r.addressUr;
    document.getElementById('p2-addr-hi').innerHTML = r.addressHi;
    document.getElementById('p2-quran-ar').textContent = r.quranAr;
    document.getElementById('p2-quran-en').textContent = r.quranEn;
    document.getElementById('p2-quran-ur').textContent = r.quranUr;
    document.getElementById('p2-quran-hi').textContent = r.quranHi;
    document.getElementById('p2-quran-ref').textContent = r.quranRef;

    // Page 3 - Barat & Nikah
    const b = d.events.barat;
    const n = d.events.nikah;
    document.getElementById('p3-ribbon-en').textContent = n.ribbonEn;
    document.getElementById('p3-ribbon-ur').textContent = n.ribbonUr;
    document.getElementById('p3-ribbon-hi').textContent = n.ribbonHi;
    document.getElementById('p3-barat-tag-en').textContent = b.tagEn;
    document.getElementById('p3-barat-tag-ur').textContent = b.tagUr;
    document.getElementById('p3-barat-tag-hi').textContent = b.tagHi;
    document.getElementById('p3-barat-lbl-en').textContent = b.labelEn;
    document.getElementById('p3-barat-lbl-ur').textContent = b.labelUr;
    document.getElementById('p3-barat-lbl-hi').textContent = b.labelHi;
    document.getElementById('p3-barat-date-en').textContent = b.dateEn;
    document.getElementById('p3-barat-date-ur').textContent = b.dateUr;
    document.getElementById('p3-barat-date-hi').textContent = b.dateHi;
    document.getElementById('p3-barat-dep-en').textContent = b.departureEn;
    document.getElementById('p3-barat-dep-ur').textContent = b.departureUr;
    document.getElementById('p3-barat-dep-hi').textContent = b.departureHi;
    document.getElementById('p3-barat-dep-sub').textContent = b.departureSub;

    document.getElementById('p3-nikah-tag-en').textContent = n.tagEn;
    document.getElementById('p3-nikah-tag-ur').textContent = n.tagUr;
    document.getElementById('p3-nikah-tag-hi').textContent = n.tagHi;
    document.getElementById('p3-nikah-lbl-en').textContent = n.labelEn;
    document.getElementById('p3-nikah-hadith-1').textContent = n.hadithAr;
    document.getElementById('p3-nikah-lbl-ur').textContent = n.labelUr;
    document.getElementById('p3-nikah-hadith-2').textContent = n.hadithAr;
    document.getElementById('p3-nikah-lbl-hi').textContent = n.labelHi;
    document.getElementById('p3-nikah-date-en').textContent = n.dateEn;
    document.getElementById('p3-nikah-date-ur').textContent = n.dateUr;
    document.getElementById('p3-nikah-date-hi').textContent = n.dateHi;
    document.getElementById('p3-nikah-time-sub').textContent = n.timeSub;
    document.getElementById('p3-nikah-venue-en').textContent = n.venueEn;
    document.getElementById('p3-nikah-venue-ur').textContent = n.venueUr;
    document.getElementById('p3-nikah-venue-hi').textContent = n.venueHi;
    document.getElementById('p3-nikah-venue-sub').textContent = n.venueSub;
    document.getElementById('p3-bride-addr-lbl-en').textContent = n.brideAddressLabelEn;
    document.getElementById('p3-bride-addr-lbl-ur').textContent = n.brideAddressLabelUr;
    document.getElementById('p3-bride-addr-lbl-hi').textContent = n.brideAddressLabelHi;
    document.getElementById('p3-bride-addr-en').innerHTML = n.brideAddressEn;
    document.getElementById('p3-bride-addr-ur').innerHTML = n.brideAddressUr;
    document.getElementById('p3-bride-addr-hi').innerHTML = n.brideAddressHi;

    // Page 4 - Walima
    const w = d.events.walima;
    document.getElementById('p4-ribbon-en').textContent = w.ribbonEn;
    document.getElementById('p4-ribbon-ur').textContent = w.ribbonUr;
    document.getElementById('p4-ribbon-hi').textContent = w.ribbonHi;
    document.getElementById('p4-tag-en').textContent = w.tagEn;
    document.getElementById('p4-tag-ur').textContent = w.tagUr;
    document.getElementById('p4-tag-hi').textContent = w.tagHi;
    document.getElementById('p4-lbl-en').textContent = w.labelEn;
    document.getElementById('p4-invite-en').textContent = w.inviteEn;
    document.getElementById('p4-lbl-ur').textContent = w.labelUr;
    document.getElementById('p4-invite-ur').textContent = w.inviteUr;
    document.getElementById('p4-lbl-hi').textContent = w.labelHi;
    document.getElementById('p4-invite-hi').textContent = w.inviteHi;
    document.getElementById('p4-date-en').textContent = w.dateEn;
    document.getElementById('p4-date-ur').textContent = w.dateUr;
    document.getElementById('p4-date-hi').textContent = w.dateHi;
    document.getElementById('p4-venue-en').textContent = w.venueLabelEn;
    document.getElementById('p4-venue-ur').textContent = w.venueLabelUr;
    document.getElementById('p4-venue-hi').textContent = w.venueLabelHi;
    document.getElementById('p4-addr-lbl-en').textContent = w.venueLabelEn;
    document.getElementById('p4-addr-lbl-ur').textContent = w.venueLabelUr;
    document.getElementById('p4-addr-lbl-hi').textContent = w.venueLabelHi;
    document.getElementById('p4-addr-en').innerHTML = w.addressEn;
    document.getElementById('p4-addr-ur').innerHTML = w.addressUr;
    document.getElementById('p4-addr-hi').innerHTML = w.addressHi;
    document.getElementById('p4-quran-ar').textContent = w.quranAr;
    document.getElementById('p4-quran-en').textContent = w.quranEn;
    document.getElementById('p4-quran-ur').textContent = w.quranUr;
    document.getElementById('p4-quran-hi').textContent = w.quranHi;
    document.getElementById('p4-quran-ref').textContent = w.quranRef;

    // Page 5 - Family & Closing
    const p5 = d.page5;
    document.getElementById('p5-ribbon-en').textContent = p5.ribbonEn;
    document.getElementById('p5-ribbon-ur').textContent = p5.ribbonUr;
    document.getElementById('p5-ribbon-hi').textContent = p5.ribbonHi;
    document.getElementById('p5-heading-en').textContent = p5.headingEn;
    document.getElementById('p5-heading-ur').textContent = p5.headingUr;
    document.getElementById('p5-heading-hi').textContent = p5.headingHi;
    document.getElementById('p5-groom-fam-title-en').textContent = p5.groomFamilyTitleEn;
    document.getElementById('p5-groom-fam-title-ur').textContent = p5.groomFamilyTitleUr;
    document.getElementById('p5-groom-fam-title-hi').textContent = p5.groomFamilyTitleHi;

    // Groom family members
    const gfEn = document.getElementById('p5-groom-fam-en');
    const gfUr = document.getElementById('p5-groom-fam-ur');
    const gfHi = document.getElementById('p5-groom-fam-hi');
    gfEn.innerHTML = p5.groomFamily.map(m => `${m.nameEn} <span class="fam-role">(${m.roleEn})</span><br />`).join('');
    gfUr.innerHTML = p5.groomFamily.map(m => `${m.nameUr} <span class="fam-role">(${m.roleUr})</span><br />`).join('');
    gfHi.innerHTML = p5.groomFamily.map(m => `${m.nameHi} <span class="fam-role">(${m.roleHi})</span><br />`).join('');

    document.getElementById('p5-bride-fam-title-en').textContent = p5.brideFamilyTitleEn;
    document.getElementById('p5-bride-fam-title-ur').textContent = p5.brideFamilyTitleUr;
    document.getElementById('p5-bride-fam-title-hi').textContent = p5.brideFamilyTitleHi;

    // Bride family members
    const bfEn = document.getElementById('p5-bride-fam-en');
    const bfUr = document.getElementById('p5-bride-fam-ur');
    const bfHi = document.getElementById('p5-bride-fam-hi');
    bfEn.innerHTML = p5.brideFamily.map(m => `${m.nameEn} <span class="fam-role">(${m.roleEn})</span><br />`).join('');
    bfUr.innerHTML = p5.brideFamily.map(m => `${m.nameUr} <span class="fam-role">(${m.roleUr})</span><br />`).join('');
    bfHi.innerHTML = p5.brideFamily.map(m => `${m.nameHi} <span class="fam-role">(${m.roleHi})</span><br />`).join('');

    // RSVP
    document.getElementById('p5-rsvp-en').innerHTML = p5.rsvpEn;
    document.getElementById('p5-rsvp-ur').innerHTML = p5.rsvpUr;
    document.getElementById('p5-rsvp-hi').innerHTML = p5.rsvpHi;
    document.getElementById('p5-closing-ar').textContent = p5.closingAr;
    document.getElementById('p5-closing-hi').textContent = p5.closingHi;
    document.getElementById('p5-closing-bottom').textContent = p5.closingBottom;

    // Page 6 - Message
    const p6 = d.page6;
    document.getElementById('p6-ribbon-en').textContent = p6.ribbonEn;
    document.getElementById('p6-ribbon-ur').textContent = p6.ribbonUr;
    document.getElementById('p6-ribbon-hi').textContent = p6.ribbonHi;
    document.getElementById('p6-heading-en').textContent = p6.headingEn;
    document.getElementById('p6-heading-ur').textContent = p6.headingUr;
    document.getElementById('p6-heading-hi').textContent = p6.headingHi;
    document.getElementById('p6-sub-en').textContent = p6.subEn;
    document.getElementById('p6-sub-ur').textContent = p6.subUr;
    document.getElementById('p6-sub-hi').textContent = p6.subHi;
    document.getElementById('message-status').textContent = p6.statusNote;

    // Credits
    const cr = d.credits;
    document.getElementById('credit-designer').textContent = cr.designerName;
    document.getElementById('credit-designer').href = cr.designerLink;
    document.getElementById('credit-concept').textContent = cr.conceptName;
    document.getElementById('credit-concept').href = cr.conceptLink;
}

// ── Stars ──
const starsEl = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
    const s = document.createElement('div'); s.className = 'star';
    const sz = Math.random() * 2 + .8;
    s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${sz}px;height:${sz}px;--d:${2 + Math.random() * 4}s;--delay:${Math.random() * 6}s;--op:${.15 + Math.random() * .5}`;
    starsEl.appendChild(s);
}

// ── Countdown ──
function updateCountdown() {
    const targetStr = DATA.countdown ? DATA.countdown.targetDate : '2026-11-17T13:30:00';
    const target = new Date(targetStr);
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) {
        ['cd-days', 'cd-hrs', 'cd-min', 'cd-sec'].forEach(id => document.getElementById(id).textContent = '0');
        return;
    }
    document.getElementById('cd-days').textContent = Math.floor(diff / 86400000);
    document.getElementById('cd-hrs').textContent = Math.floor((diff % 86400000) / 3600000);
    document.getElementById('cd-min').textContent = Math.floor((diff % 3600000) / 60000);
    document.getElementById('cd-sec').textContent = Math.floor((diff % 60000) / 1000);
}
updateCountdown(); setInterval(updateCountdown, 1000);

// ── Language ──
function setLang(lang) {
    document.body.setAttribute('data-lang', lang);
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.lang-btn').forEach(b => { if (b.textContent.trim() === { en: 'English', ur: 'اردو', hi: 'हिंदी' }[lang]) b.classList.add('active') });
    // re-animate cards
    document.querySelectorAll('.card .content').forEach(c => {
        c.style.animation = 'none';
        requestAnimationFrame(() => { c.style.animation = ''; });
    });
}

const totalPages = 6;
let currentPage = 1;

function updatePageNav() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => dot.classList.toggle('active', index + 1 === currentPage));
    const progress = document.getElementById('progress');
    if (progress) progress.style.width = (currentPage / totalPages * 100) + '%';
    const prev = document.getElementById('prev-page');
    const next = document.getElementById('next-page');
    if (prev) prev.disabled = currentPage === 1;
    if (next) next.disabled = currentPage === totalPages;
}

function showPage(n) {
    const nextPage = Math.max(1, Math.min(totalPages, n));
    const movingBack = nextPage < currentPage;
    currentPage = nextPage;
    document.querySelectorAll('.page').forEach((page, index) => {
        page.classList.toggle('flip-back', movingBack);
        page.classList.toggle('visible', index + 1 === currentPage);
    });
    updatePageNav();
}

function changePage(delta) {
    showPage(currentPage + delta);
}

// ── Envelope open ──
let opened = false;
function openEnvelope() {
    if (opened) return; opened = true;
    const ew = document.getElementById('env-wrap');
    ew.classList.add('opening');
    document.getElementById('click-hint').style.opacity = '0';
    document.getElementById('env-flap').style.transform = 'rotateX(-180deg)';
    setTimeout(() => document.getElementById('seal').classList.add('gone'), 300);
    setTimeout(() => document.getElementById('letter-peek').classList.add('up'), 700);
    setTimeout(() => ew.classList.add('leaving'), 1550);
    setTimeout(() => {
        document.getElementById('env-wrap').style.display = 'none';
        const iw = document.getElementById('inv-wrap'); iw.style.display = 'block';
        document.getElementById('nav-dots').style.display = 'flex';
        document.getElementById('page-controls').style.display = 'flex';
        document.getElementById('progress').style.display = 'block';
        document.getElementById('lang-bar').classList.add('visible');
        showPage(1);
        spawnPetals(); spawnParticles();
    }, 2200);
}

function scrollToPage(n) { showPage(n) }

function sendMessage(event) {
    event.preventDefault();
    const name = document.getElementById('guest-name').value.trim();
    const message = document.getElementById('guest-message').value.trim();
    const status = document.getElementById('message-status');
    if (!name || !message) return;
    const text = `Wedding blessing from ${name}:%0A${encodeURIComponent(message)}`;
    window.open(`https://wa.me/?text=${text}`, '_blank');
    status.textContent = 'Your message is ready to send in WhatsApp.';
}

// ── Petals ──
function spawnPetals() {
    const em = ['🌹', '✿', '❀', '🌸', '🌼', '⭐']; let c = 0;
    const iv = setInterval(() => {
        if (c++ > 40) { clearInterval(iv); return; }
        const el = document.createElement('div'); el.className = 'particle';
        el.textContent = em[Math.floor(Math.random() * em.length)];
        el.style.cssText = `left:${Math.random() * 100}vw;bottom:-30px;font-size:${.7 + Math.random() * .9}rem;animation-duration:${4 + Math.random() * 5}s;animation-delay:${Math.random() * 3}s`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 10000);
    }, 200);
}

// ── Gold dust particles ──
function spawnParticles() {
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const el = document.createElement('div');
            el.style.cssText = `position:fixed;width:4px;height:4px;border-radius:50%;background:#c9a84c;left:${Math.random() * 100}vw;bottom:-10px;opacity:.7;animation:floatUp ${3 + Math.random() * 4}s linear forwards;pointer-events:none;z-index:1`;
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 8000);
        }, i * 300);
    }
}
// ── Mobile Swipe Navigation ──
let touchStartX = 0;
let touchEndX = 0;


document.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].clientX;
});


document.addEventListener("touchend", function (e) {

    touchEndX = e.changedTouches[0].clientX;

    let swipeDistance = touchStartX - touchEndX;


    // Swipe left = next page
    if (swipeDistance > 50) {
        changePage(1);
    }


    // Swipe right = previous page
    if (swipeDistance < -50) {
        changePage(-1);
    }

});
