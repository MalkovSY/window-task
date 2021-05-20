const popupImg = () => {
    const popupImg = document.createElement('div'),
          section = document.querySelector('.works'),
          bigImg = document.createElement('img');

    popupImg.classList.add('popup');
    section.appendChild(popupImg);
    
    popupImg.style.justifyContent = 'center';
    popupImg.style.alignItems = 'center';
    popupImg.style.display = 'none';
    bigImg.classList.add('porkster');

    popupImg.appendChild(bigImg);

    section.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if(target && target.classList.contains('preview')) {
            popupImg.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            document.body.classList.add('modal-open');
            
        }

        if(target && target.matches('div.popup')){
            popupImg.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
};

export default popupImg;