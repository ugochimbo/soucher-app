import React from 'react';

export const name = (name) => {

    if (name.length <= 14) {
        return name;
    }

    const parts = String(name).split(' ');

    if (parts.length > 1) {
        return abbreviatedName(parts);
    }

    return parts[0];
};

function abbreviatedName(names = []) {
    let initials = '';
    let numberOfNames = names.length;

    for (let i = 0; i < numberOfNames - 1; i++) {
        initials += String(names[i]).substr(0, 1).toUpperCase() + '.';
    }

    return initials + names[numberOfNames-1];
}

export const message = (message) => {
    if (message.length > 40) {
        return message.substr(0, 40);
    }

    return message;
};