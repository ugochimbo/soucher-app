
export const buyer = (name) => {
    const parts = String(name).split(' ');

    if (parts.length === 1) {
        return name;
    }

    return parts[0];
};

export const recipient = (name) => {
    const parts = String(name).split(' ');

    if (name.length > 20) {
        return parts[0];
    }

    return name;
};
