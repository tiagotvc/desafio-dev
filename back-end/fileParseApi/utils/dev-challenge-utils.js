let MAPPED_OBJECT_ARRAY = [];

const mapLine = (text) => {
    text.forEach(function(line) {
        let CNAB = new Object();
        CNAB['type'] = line.substring(0,1);
        CNAB['date'] = line.substring(1,9);
        CNAB['value'] = Number(line.substring(10,19));
        CNAB['cpf'] = line.substring(20,30);
        CNAB['card'] = line.substring(31,42);
        CNAB['time'] = line.substring(43,48);
        CNAB['shop_owner'] = line.substring(48,61);
        CNAB['shop_name'] = line.substring(62,80);
        MAPPED_OBJECT_ARRAY.push(CNAB);
    });

    return MAPPED_OBJECT_ARRAY;
}


module.exports = {
    mapLine
}