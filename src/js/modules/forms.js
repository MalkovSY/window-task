import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');
    
    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка',
        failure: 'ОШИБКА ОШИБКА ОШИБКА',
        success: 'Спасибо, свяжемся'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status'); //украшение блока
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if(item.getAttribute('data-calc') === "end"){
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            if(Object.keys(state).length >= 5){
            postData('/assets/server.php', formData)
                    .then(res => {
                        console.log(res);
                        statusMessage.textContent = message.success;
                    })
                    .catch(() => {
                        statusMessage.textContent = message.failure;
                    })
                    .finally(() => {
                        clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 5000);
                        for (let key in state){
                            delete state[key];
                        }
                    });
                } else{
                    alert('Введите все данные!');
                }
        });
    });

};

export default forms;