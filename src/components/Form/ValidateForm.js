/**
 * Validate form inputs for name, email, password, and confirm password
 * @param {string} name - User's name
 * @param {string} email - User's email address
 * @param {string} password - User's password
 * @param {string} confirmPass - User's password confirmation
 * @returns {string|null} - Error message if validation fails, null otherwise
 */
export default function validateForm({ name, email, password, confirmPass }) {
    // Validate name
    if (!name.trim()) {
        return 'Username required';
    }

    // Validate email
    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email) {
        return 'Email required';
    } else if (!regex.test(email.toLowerCase())) {
        return 'Email address is invalid';
    }

    // Validate password
    if (!password) {
        return 'Password is required';
    } else if (password.length < 6) {
        return 'Password needs to be 6 characters or more';
    }

    // Validate confirm password
    if (!confirmPass) {
        return 'Enter Confirm password is required';
    } else if (confirmPass !== password) {
        return 'Passwords do not match';
    }

    // Return null if no validation errors
    return null;
}
