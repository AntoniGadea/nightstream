module.exports = function (api) {
    var env = api.cache(true);
    var isProd = api.cache(true);

    return {
        plugins: ['macros'],
    }
}