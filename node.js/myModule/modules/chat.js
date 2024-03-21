exports.hi = "Hola!";

exports.bye = function() {
    return "Bien D&iacute;a!";
}

exports.conversation = {
    give(number) {
        return `Here is ${number * 10} dollars`;
    },

    greet(name) {
        return `&iquest;C&oacute;mo est&aacute;s, ${name}?`;
    }
};