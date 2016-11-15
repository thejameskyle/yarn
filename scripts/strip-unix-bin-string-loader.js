module.exports = function (source) {
    let unixBinRegExp = /^\#\!.*$/gm
    let newSource = source.replace(unixBinRegExp, "");

    return newSource;
};