export const formValidation = (fields) => {

    for (let e in fields) {
        fields[e].value = fields[e].value.trim();
    }

    let validation = {
        isValid: true,
        errorfields: []
    };

    const falseValid = field => {
        validation.isValid = false;
        validation.errorfields.push(field);
    }

    const isEmptyOrSpaces = str => {
        return str === null || str.match(/^ *$/) !== null;
    }

    if (isEmptyOrSpaces(fields.name.value)) {
        falseValid(fields.name);
    } else {
        fields.name.classList.remove('error');
    }

    if (isEmptyOrSpaces(fields.price.value) && !parseFloat(fields.price.value)) {
        falseValid(fields.price);
    } else {
        fields.price.classList.remove('error');
    }

    if (isEmptyOrSpaces(fields.tip.value) && !parseFloat(fields.tip.value)) {
        falseValid(fields.tip);
    } else {
        fields.tip.classList.remove('error');
    }

    return validation;
}