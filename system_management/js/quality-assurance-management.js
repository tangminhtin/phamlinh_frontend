var counter = 0,
    christmas = ['none', 'block'],
    el_rec = document.getElementById('custom-dot'),
    interval = setInterval(() => {
        counter++ % (2016 / (12 * 24)) === 0 &&
            christmas.unshift(christmas.pop()) &&
            (el_rec.style.display = christmas[0]);
    }, 128);
