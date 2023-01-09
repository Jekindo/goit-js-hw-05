class StringBuilder {
    constructor(string) {
        this._value = string;
    }

    get value() {
        return this._value;
    }

    append(str) {
        //         const characters = this._value.split('');
        //
        //         characters.push(str);
        //
        //         this._value = characters.join('');

        this._value += str;
    }

    prepend(str) {
        //         const characters = this._value.split('');
        //
        //         characters.unshift(str);
        //
        //         this._value = characters.join('');

        this._value = str + this._value;
    }

    pad(str) {
        //         const characters = this._value.split('');
        //
        //         characters.unshift(str);
        //         characters.push(str);
        //
        //         this._value = characters.join('');

        this._value = str + this._value + str;
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'
//
builder.pad('=');
console.log(builder.value); // '=^.^='
