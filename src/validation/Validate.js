export default {
    emailIsNotValide(email, users) {
        let errors = [];
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email === null || email.length === 0) {
            errors.push("Email is required.");
        } else if (regexEmail.test(email) === false) {
            errors.push("Please enter a valid email.");
        } else if (users.some(user => user.email === email)) {
            errors.push("The email is already exists.");
        }
        return errors;
    },
    userNameIsNotValide(userName) {
        let errors = [];
        let regexUserName = new RegExp("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$", "g");
        if (userName === null || userName.length === 0) {
            errors.push("UserName is required.");
        } else if (regexUserName.test(userName) === false) {
            errors.push("Username consists of alphanumeric characters (a-zA-Z0-9), lowercase, or uppercase."
                , "Username allowed of the dot (.), underscore (_), and hyphen (-)."
                , "The dot (.), underscore (_), or hyphen (-) must not be the first or last character."
                , "The number of characters must be between 5 to 20.");
        }
        return errors;
    },
    passwordIsNotValide(password) {
        let errors = [];
        let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (password === null || password.length === 0) {
            errors.push("password is required.");
        } else if (regexPassword.test(password) === false) {
            errors.push("Minimum eight characters."
                , "At least one letter and one number."
            );
        }
        return errors;
    },
    fieldIsEmpty(field, name) {
        let errors = [];
        if (field === null || field.length === 0) {
            errors.push(name + ' is required.')
        }
        return errors;
    }


}