function validateExtension(extension) {
    // Check if extension is a string of 4 digits
    const regex = /^\d{4}$/;
    return regex.test(extension);
}

module.exports = validateExtension;