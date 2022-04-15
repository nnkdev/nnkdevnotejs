
const isJsonString = (string) => {
    return /^[\],:{}\s]*$/.test(string.replace(/\\["\\\/bfnrtu]/g, '@')
        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''));
};
const getCookieAsJSON = () => {
    const cookieAsJSON = {};
    const cookie = decodeURIComponent(document.cookie);
    if (cookie == '') {
        return cookieAsJSON;
    }
    cookie.split(';').forEach(item => {
        const seperatedKeyValue = item.split('=');
        const value = seperatedKeyValue[1];
        cookieAsJSON[seperatedKeyValue[0].trim()] = isJsonString(value) ? JSON.parse(value) : value;
    });
    return cookieAsJSON;
};
$(window).on('load', function() {
    const userInfo = getCookieAsJSON().user || {};
    $('#dropdownMenuButton1').html(userInfo.fullName);
});