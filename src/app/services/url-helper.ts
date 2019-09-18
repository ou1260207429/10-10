export class UrlHelper {

    // 获取url指定名称参数
    public static getUrlParam(url, name) {
        const index = url.indexOf("?");
        if (index >= 0 && (index + 1) < url.length) {
            url = url.substring(index + 1);
        }

        const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        const r = url.match(reg);
        if (r != null) {
            return unescape(r[2]);
        } else {
            return null;
        }
    }

    public static addUrlParam(url: string, name, value) {

        const index = url.indexOf("?");
        if (index < 0) {
            url += '?';
            url += name + "=" + value;
        } else {
            const oldValue = UrlHelper.getUrlParam(url, name);
            if (oldValue == null) {
                url += '&';
                url += name + "=" + value;
            } else {
                url = url.replace(name + "=" + oldValue, name + "=" + value);
            }

        }

        return url;
    }

    public static deleteParam(url: string, name) {
        const oldValue = UrlHelper.getUrlParam(url, name);
        if (oldValue != null) {
            url = url.replace(name + "=" + oldValue, "");
        }

        if (url[url.length - 1] == '?' || url[url.length - 1] == '&') {
            url = url.substring(0, url.length - 1);
        }

        return url;
    }

}