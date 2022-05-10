export const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined)

export let required = (value) => {
    if (value) {
        return undefined;
    }
    else {
        return 'Поле не заполнено!';
    }
}

export const maxLengthCreator = size => value => {
    if (value.length > size) {
        return 'Превышена максимальная длина!'
    }
    else {
        return undefined;
    }
}