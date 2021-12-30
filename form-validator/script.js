
const mainMod = () => {

    const form = document.getElementById('register-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        formsubmit();
    })

    const formsubmit = () => {
        console.debug('Form submit triggered');

        try {

            const elements = Array.from(form.elements);
            let validateResult = elements.map(element => validateControl(element));
            console.table(validateResult);
            if (validateResult.every(val => val))
            {
                const submitButton = form.querySelector('button[type=submit]');
                showSucceess(submitButton);
            }
            
        } catch (error) {
            console.error(error);
        }
    }

    const validateControl = (element) => {
        const inputType = element.getAttribute('type');
        let val = element.value;
        let hasValidValue = true;
        switch (inputType)
        {
            case 'text':
                if (!validateText(val))
                {
                    hasValidValue = false;
                    showError(element);
                }
                else {
                    clearError(element);
                }
                break;
            case 'email':
                if (!validateEmail(val))
                {
                    hasValidValue = false;
                    showError(element);
                }
                else {
                    clearError(element);
                }
                break;
            case 'tel':
                if (!validatePhone(val))
                {
                    hasValidValue = false;
                    showError(element);
                }
                else {
                    clearError(element);
                }
                break;
        }
        return hasValidValue;
    }

    const validateText = (value) => {
        
        return isNaN(value) && value.length > 3;
    }

    const validateEmail = (value) => {
        return true;
    }

    const validatePhone = (value) => {
        return !isNaN(value) && value.length === 10;
    }

    const showError = (element) => {
        const formControl = element.parentElement;
        formControl.classList.add('error');
    }

    const clearError = (element) => {
        const formControl = element.parentElement;
        formControl.classList.remove('error');
    }

    const showSucceess = (button) => {
        const formControl = button.parentElement;
        formControl.classList.add('success');
        console.log('Proceed to submit form to server');
    }

}

(() => mainMod())()
