import React from 'react';

export const name = (name) => {

    const parts = String(name).split(' ');

    return parts.length > 1 ? abbreviatedName(parts) : parts[0];
};

function abbreviatedName(names = []) {
    let initials = '';
    let numberOfNames = names.length;

    for (let i = 0; i < numberOfNames - 1; i++) {
        initials += String(names[i]).substr(0, 1).toUpperCase() + '.';
    }

    return initials + names[numberOfNames-1];
}
