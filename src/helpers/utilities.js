export const isAddress = function (address) {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        // check if it has the basic requirements of an address
        return false;
    } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
        // If it's all small caps or all all caps, return true
        return true;
    }
}

export const convertedDate = (date) => {
    date = (date * 1000);
    let convertedDate = new Date(date);
    return convertedDate.toString();
}

export const convertedValue = (value) => {
    let convertedValue = (value);
    if (convertedValue === undefined) {
        convertedValue = 0;
    }
    else {
        convertedValue = convertedValue / 1000000000000000000;//this is the Wei value for ethereum
    }
    return convertedValue;
}
export const transactionStatus = (txreceipt_status) => {
    if (Number(txreceipt_status))
        return 'succeeded'
    return 'failed'
}
