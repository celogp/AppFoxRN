function cleanMask (value) { 
    return value.replace(/\D/g, '');
};

function cube(x) {
    return x * x * x;
};

export { cleanMask, cube};