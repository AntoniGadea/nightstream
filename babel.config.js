module.exports = function (api) {
    var env = api.cache(false);
    var isProd = api.cache(false);

    return {
        plugins: ['macros'],
    }
}