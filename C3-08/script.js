const button = document.querySelector(".btn-circle");

button.addEventListener('click', () => {
    button.classList.add('fast-spin');

    // 一定時間後に高速回転のクラスを削除
    setTimeout(() => {
        button.classList.remove('fast-spin');
    }, 400);
});