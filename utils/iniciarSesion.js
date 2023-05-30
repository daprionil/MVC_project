const form = document.querySelector('#form_log_in');
const boxErrors = document.querySelector('#box_errors');

let errors = [];

//When document as a finished loaded
document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', validateForm);
});

//Function Submit for form
function validateForm(evt){
    evt.preventDefault();
    //Clear Errors
    errors = [];

    //Destructuring elements
    const {target} = evt;
    const email = target['email'].value;
    const password = target['password'].value;

    //Validate values
    if(email === '' || password === ''){
        errors.push({type:'error',message:'Debes de completar todos los campos'});
    };

    //Validate password
    if(password.length >= 0 && password.length <= 6){
        errors.push({type:'error',message:'La contraseña debe tener más de 6 carácteres'});
    };

    //Validate email
    const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
    if(!validateEmail){
        errors.push({type:'error', message:'El email no es válido'});
    };

    if(!errors.length){
        //!Validate
        target.submit();
    };

    renderMessages(boxErrors, errors);
};


function renderMessages(parent, arrayErrors){
    clearChilds(parent);
    const fragment = document.createDocumentFragment();

    for(const error of arrayErrors){
        const valueBg = typeMessages[error.type] || 'bg-stone-300';
        
        const p = document.createElement('P');
        p.className = `p-2 mx-auto text-sm font-bold text-center text-white ${valueBg} rounded-sm w-fit`;
        p.textContent = error.message;
        
        fragment.appendChild(p);
    };

    parent.appendChild(fragment);
    setTimeout(() => {
        clearChilds(parent);
    },5000);
};

function clearChilds(element){
    while(element.firstElementChild){
        element.firstElementChild.remove();
    };
};

const typeMessages = {
    error: 'bg-red-500',
    success:'bg-green-400'
}