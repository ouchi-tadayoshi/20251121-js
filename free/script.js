notButton.addEventListener('click', () => {
    if (notButton.classList.contains('noted')) {
        notButton.classList.remove('noted');
        notButton.textContent = '☆ お気に入り';
    } else  {
        notButton.classList.add('noted');
        notButton.textContent = '☆ お気に入り済み';
    }
});