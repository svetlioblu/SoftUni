function validate() {
    const userName = document.getElementById('username')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const confirmPass = document.querySelector('#confirm-password')
    const isCompanyCheck = document.getElementById('company')
    const submit = document.getElementById('submit')
    const companyInfo = document.getElementById('companyInfo')
    const companyInfoNumber = document.getElementById('companyNumber')
    const valid = document.getElementById('valid')
    const allInputs = Array.from(document.querySelectorAll('input'))

    const validator = {
        userName: (name) => {
            const reg = /^[a-zA-Z0-9]{3,20}$/gm
            return reg.test(name)
        },
        email: (email) => {
            const reg = /.+?@.+?\..+?$/gm
            return reg.test(email)
        },
        password: (pass) => {
            const reg = /^[\w]{5,15}$/gm
            return reg.test(pass)
        },
        passConfirm: (confirmPass) => {
            return confirmPass === password.value
        },
        isCompanyCheck: () => {
            return isCompanyCheck.checked
        },
        companyInfoNumber: (number) => {
            let reg = /^[1-9][0-9][0-9][0-9]$/gm
            return reg.test(number)
        }
    }
    isCompanyCheck.addEventListener('change', onChange)
    submit.addEventListener('click', onClick)

    function onClick(e) {
        e.preventDefault()
        !validator.userName(userName.value) ? userName.style.borderColor = 'red' : userName.style.borderColor = ''
        !validator.email(email.value) ? email.style.borderColor = 'red' : email.style.borderColor = ''
        !validator.password(password.value) ? password.style.borderColor = 'red' : password.style.borderColor = ''
        if (!validator.password(confirmPass.value)) {
            confirmPass.style.borderColor = 'red'
        } else if (!validator.passConfirm(confirmPass.value)) {
            confirmPass.style.borderColor = 'red'
        } else {
            confirmPass.style.borderColor = ''
        }
        if (validator.isCompanyCheck()) {
            !validator.companyInfoNumber(companyInfoNumber.value) ? companyInfoNumber.style.borderColor = 'red' : companyInfoNumber.style.borderColor = ''
        } else {
            companyInfoNumber.style.borderColor = ''
        }
        let isValid = true
        allInputs.forEach(element => {
            if (element.style.borderColor === 'red') {
                isValid = false
            }
        })
        if (isValid) {
            valid.style.display = 'block'
        } else {
            valid.style.display = 'none'
        }

    }

    function onChange(e) {
        if (validator.isCompanyCheck()) {
            companyInfo.style.display = 'block'
        } else {
            companyInfo.style.display = 'none'
        }
    }
}
