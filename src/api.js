import data from "./data.json";

export function fetch(fake_url) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data }), 200);
  });
}
