import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');
    
    function bindActionToElems (event, element, property) {
        element.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        state[property] = i;
                        break;
                    case 'INPUT' :
                        if(item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[property] = 'cold' : state[property] = 'warm';
                            element.forEach((box, j) => {
                                box.checked = false;
                                if(i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            if(item.value){
                                item.style.border = 'none';
                                state[property] = item.value;
                            } else {
                                item.style.border = '1px solid red';
                            }
                        }
                        break;
                    case 'SELECT' :
                        if(item.value){
                            item.style.border = 'none';
                            state[property] = item.value;
                        } else {
                            item.style.border = '1px solid red';
                        }
                        break;
                }
                console.log(state);
            });
        });
      }

    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');

};

export default changeModalState;