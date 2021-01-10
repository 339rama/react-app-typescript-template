export const getCookie = (name: string, cookie?: string) => {
  if (!cookie) {
    return '';
  }
  const matches = cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : '';
};

type CookieOption = {
  expires?: Date | number | string;
  path?: string;
} & { [key: string]: any };

export const setCookie = (
  name: string,
  value: string,
  options = {} as CookieOption,
  _document: Document
) => {
  options = {
    path: '/',
    ...options,
  };

  if (options.expires && options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + '=' + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += '; ' + optionKey;
    let optionValue = options[optionKey as keyof CookieOption];
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }

  if (_document) {
    _document.cookie = updatedCookie;
  }
};

export const removeCookie = (name: string, document: Document) => {
  setCookie(name, '', { 'max-age': -1 }, document);
};
