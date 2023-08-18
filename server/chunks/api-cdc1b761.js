import { e as error } from './index-a4865dbd.js';

const base = "http://localhost:3000";
async function send({
  method,
  path,
  data,
  token
}) {
  const requestHeaders = new Headers();
  let bodyData;
  if (data) {
    if (!(data instanceof FormData)) {
      requestHeaders.set("Content-Type", "application/json");
      bodyData = JSON.stringify(data);
    } else {
      bodyData = data;
    }
  }
  if (token) {
    requestHeaders.set("Authorization", "Bearer " + token);
  }
  const res = await fetch(`${base}/${path}`, {
    method,
    headers: requestHeaders,
    body: bodyData
  });
  if (res.ok || res.status === 422) {
    const text = await res.text();
    return text ? JSON.parse(text) : {};
  }
  throw error(res.status, res.statusText);
}
function post(path, data, token) {
  return send({ method: "POST", path, data, token });
}
function get(path, token) {
  const data = null;
  return send({ method: "GET", path, data, token });
}

export { get as g, post as p };
//# sourceMappingURL=api-cdc1b761.js.map
