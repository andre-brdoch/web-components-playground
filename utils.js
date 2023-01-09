export function escapeHtml(html) {
  const symbols = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
  };
  return html
    .split('')
    .map((char) => symbols[char] ?? char)
    .join('');
}
