export default function languageSwitcher() {
    const languageSwitcher = document.querySelectorAll('.language-selector .wpml-ls-link span');
    languageSwitcher.forEach(item => {
        item.style.textTransform = 'uppercase';
        item.textContent = item.textContent.slice(0, 2);
    });
}
