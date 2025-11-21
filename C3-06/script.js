const btnChange = document.querySelector('.btn-change');

btnChange.addEventListener('click', () => {
    // .done クラスを追加
    btnChange.classList.add('done');
    // テキストを変更
    btnChange.textContent = '完了！';
})