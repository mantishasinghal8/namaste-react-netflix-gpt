const validate = (email, password, name) => {

    if (name !== undefined) {
        const isNameValid = /^\p{L}+(?:[ .'-]\p{L}+)*$/u.test(name);

        if (!isNameValid) {
            return "Name is not valid.";
        }
    }

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const isPasswordValid =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(password);

    if (!isEmailValid) return "Enter a valid email address.";

    if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    }

    if (!isPasswordValid) {
        return "Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }

    return null;
};

export default validate;