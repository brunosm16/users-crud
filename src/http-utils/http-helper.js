export default async (url, method, options = {}) => {
  let httpRequest;

  const upperCaseMethod = method.toUpperCase();

  if (upperCaseMethod === 'GET') {
    httpRequest = await fetch(url, { cache: 'reload', ...options });
  } else {
    httpRequest = await fetch(url, { method: upperCaseMethod, cache: 'reload', ...options });
  }

  return (type) => {
    const typeLowerCase = type.toLowerCase();

    switch (typeLowerCase) {
      case 'json':
        return httpRequest.json();
      case 'blob':
        return httpRequest.blob();
      case 'text':
        return httpRequest.text();
      case 'formdata':
        return httpRequest.formData();
      default:
        return httpRequest.arrayBuffer();
    }
  };
};
