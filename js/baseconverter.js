/**
* Convert From/To Binary/Decimal/Hexadecimal in JavaScript
* https://gist.github.com/faisalman
*
* Copyright 2012, Faisalman <fyzlman@gmail.com>
* Licensed under The MIT License
* http://www.opensource.org/licenses/mit-license
*/
 
(function(){
 
    var convertBase = function (num) {
        this.from = function (baseFrom) {
            this.to = function (baseTo) {
                return parseInt(num, baseFrom).toString(baseTo);
            };
            return this;
        };
        return this;
    };
        
    // binary to decimal
    this.bin2dec = function (num) {
        return convertBase(num).from(2).to(10);
    };
    
    // binary to hexadecimal
    this.bin2hex = function (num) {
        return convertBase(num).from(2).to(16);
    };
    
    // decimal to binary
    this.dec2bin = function (num) {
        return convertBase(num).from(10).to(2);
    };
    
    // decimal to hexadecimal
    this.dec2hex = function (num) {
        return convertBase(num).from(10).to(16);
    };
    
    // hexadecimal to binary
    this.hex2bin = function (num) {
        return convertBase(num).from(16).to(2);
    };
    
    // hexadecimal to decimal
    this.hex2dec = function (num) {
        return convertBase(num).from(16).to(10);
    };
    
    return this;        
})();
 
/*
* Usage example:
* bin2dec('111'); // '7'
* dec2hex('42'); // '2a'
* hex2bin('f8'); // '11111000'
* dec2bin('22'); // '10110'
*/