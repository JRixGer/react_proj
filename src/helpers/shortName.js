/**
 * @param {string} fullname
 */
export default function shortName(fullname) {
  const [first, ...rest] = fullname.split(" ");
  const last = rest.pop();
  return [first.charAt(0), ...rest.map(n => n.charAt(0)), last.charAt(0)].join("");
}
