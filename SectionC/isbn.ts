function isValidISBN10(isbn: string): boolean {
    if (!/^\d{9}[\dX]$/.test(isbn)) {
        return false;
    }

    let sum = 0;
    for (let i = 0; i < 10; i++) {
        const digit = isbn[i] === "X" ? 10 : parseInt(isbn[i]);
        sum += digit * (10 - i);
    }

    return sum % 11 === 0;
}

function isValidISBN13(isbn: string): boolean {
    if (!/^\d{13}$/.test(isbn)) {
        return false;
    }

    let sum = 0;
    for (let i = 0; i < 13; i++) {
        const factor = i % 2 === 0 ? 1 : 3;
        sum += parseInt(isbn[i]) * factor;
    }

    return sum % 10 === 0;
}

function convertISBN10ToISBN13(isbn10: string): string {
    const isbn13 = "978" + isbn10.slice(0, 9);
    let sum = 0;
    for (let i = 0; i < 12; i++) {
        const factor = i % 2 === 0 ? 1 : 3;
        sum += parseInt(isbn13[i]) * factor;
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    return isbn13 + checkDigit;
}

function validateAndConvertISBN(isbn: string): string {
    const cleanedIsbn = isbn.replace(/[^0-9X]/g, "");

    if (isValidISBN10(cleanedIsbn)) {
        const convertedIsbn13 = convertISBN10ToISBN13(cleanedIsbn);
        return convertedIsbn13;
    } else if (isValidISBN13(cleanedIsbn)) {
        return "Valid";
    } else {
        return "Invalid";
    }
}

export { validateAndConvertISBN };
