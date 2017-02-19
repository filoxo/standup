const closeBtn = document.querySelector('#closeBtn');
closeBtn.addEventListener('click', () => {
    const c = confirm("Are you sure you want to quit?")
    if (c) { window.close() }
})