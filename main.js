const videos = document.querySelectorAll('video');
const rasm = document.querySelector('.rasm');

        videos.forEach(video => {
            video.addEventListener('play', () => {
                videos.forEach(otherVideo => {
                    if (otherVideo !== video) {
                        otherVideo.pause();
                    }
                });
            });
        });


const btn = document.querySelector('.btn');
const img1 = document.querySelector('.img1');
const rasm1 = document.querySelector('.rasm1');

btn.addEventListener('click' , () => {
    if (img1.classList.contains('transfer2')){
        img1.classList.remove('transfer2')
        rasm1.classList.remove('transfer1')
    }
    else{
        img1.classList.add('transfer2')
        rasm1.classList.add('transfer1')
    }
})