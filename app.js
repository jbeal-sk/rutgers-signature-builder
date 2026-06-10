const LIGHT_LOGO_PNG_DATA_URI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAA+CAYAAACBff3hAAAOaElEQVR4nO1caZRURZb+brx4L1++yioo0AJZSnBaFlu6RVFaxBEEl4Oy67TQNgrKqG2roKg4rge6QRtau0XRIyAKLXa7NcpwdHRaR38w2tLgArIJsspqUUtW5suXEXHnR1ZCZXVtmQll4ZnvnDgUme9F3PzevTdu3LjxiJmRxrUTrn94w6YtQ5NCaGZDaKVwbSdWEA6XtW/XfkdhxDvc5ZSOW88566y1paVdv+vdu3eVFyk48qO01gAAy7KOydiy9n+279x17v7d3w7spAkCADdw0/cJBhAQ4yCAXQQkCYiDEacXAMB0Lumw9ryf/vS1y4cMfnPIxYM3d+x0igYAYwwAQAiR1/hUW8MuGHLZq1UbtoxZrNpFHaVcDaC1qRmDoYmMBqDACMBiv6TgWyi5lYxYh8DZZhmUEaMg7B4Ye+mlMyZPmvhi33P6RoGUxuWjbRmEDRhy6etVX20Z80LQxreVaZWEAUdlEjV/SxAkA0xkEgJmv+RgjdTmvzgeWSsNAja4Ztiwu++eNnVej549EsYYEBGIsv919eont/Kma1oSQACgGoxyYlTAiMAY2SFgb3S1FXnSL1TPJIuiQ0woePXtt+cMvmLE7kULnu8rhAARobay5EVYawfVaQKAVdMIKRLLieGzkT+JI/JYzJOPB4WxdvFk26kzZqy54/YpNyWVyom0E5KwpkA4Sl41MaIw4kJfeAvjEXMpu5WL/rr82YnX3zDD930AyIq0HyRhtSFqWgUxPA1nZtSNjEOkbPmHHz546y23TwdSM2hzSWvQh5k6/x4LpPvLpqX9Vb4yWAACMBJsxF2Vsu1oFJS/8t/vzn5s9u8usyzrSNjRFDLiMAIZSwgVJkvZBKUBkGGpiJFE/jNmCAQBMiA0SzoCYDEEmIVPjABH/VYuEEiR78OIaVWyaFehE3306fnvDB48qLj/+f3LmxNyZIQV5184+O3d27ZffroWR6bsaksEYwNHXJmQMkqcsw0TgN+FffUttLAB0RyNCTPQDXbQQ9hBn6SQnZLkJGBEgPx8iQZQAMKWEGKT7QrvzDN6v/zu2yvGC8tqMtTI0LBupaWr/bhfvN+CNgxhgoS3+dDBn/SHMBIyb7P4nJJyh0PR0g4d1jXVFxum6ni83fvlh08XJJz2gjA4FIpN8B3ZKUlOFTFyDT8tpEKRM3zyRko3tmzDhnHvv//BnZdcesm+prQsQ8O01mBjwIZhWRa+WPtZ4cBRYypvTYbVZD8ky/MQUloiuCFU5UTO6rX0byvemmCYG3+azKiKVtE327YXfPb5F6e9tmLFTR98+umvTtaER5KRYEBgOZV5yGMAuCDsCInojU6FN/SSIQ8sWbxgtjGm0eVTxjeWZUHaNixbQkgLQkpzLJ2+AWBIGJJWrTEaaLZEm+JiPuucvtHrJ133xX/+9bVbl817sjsXFeyZFqpyPgmZIMLNdIb1QABIgHFqwG5vJfDRP1ZPqKyoICFEozNmBmHMDGY+Ms0ac5wyFrXGaKppraGUgtYaI0eP3L78paW9nYKC/XPduKmwoCRyf6AGQMiw7As7OFBW1uvrLV9HADQ6Y2YQll5f1W7HBfWM01CzLAtSSliWhSAI0Lff2VWPTJ0y/GtW7keu9gvy0DIgRVo3cgIbhI2bNncGGg9kT6jAVUoJYwxGjhyxpsANHfqYE54WpHJ9rARAE9BFQzog7Ny9p0tT95xQhAkhIIRASccSfWrnTp/sJSOUgMkn1GEAtmEhAARBEDr6TQMy5DjW94a0ubBB3g6jruERUZPu8IQiTGsNZsauHTvtrTt3/mtXtpTUkPn4MMFAhRSBAqNtUdHh1Kc/AB+WnjGFEFj0/OLhSa0jFyHkC+ZmrRrq7ROpyH0HKeGDcUavntsANDrZyQa/+Z5RN7yQUsJxHLz5xvJuv3/+hdf7wfEH+MLLZ7kGAJrIfMFJNyRlZc+ePcqA1khYDQmNoW5YU1FeTs89u2DojHlPvduZZHBfLCxtAxGn3MyEATgADksEa6ykc/aP+7ze5dTSJDM3Gum3KGEEQAqhQQTRhMtOxOPYt3e//fXWre3e++B/Br2xcuUDe8rKzuwDJ3go5opSTTKWh3ZpAG2YsNJRag8Z976xY/4ApPyklA3T0mKEacMywQafbdx45dArRjyvG7iOmYUxbH13uKzbrr37+mmj3TAEumnCdSiIDvNtN2RYxpA7Wel15EGb/CVW3C09+aS1Y68a8yUzN5neaTkNYxadWUBHEyVla9ZNbOxSAeBkJpxtLHS33FgfY5seSXIKFEeiZBBH7rNV2hGEQOaxcCLYTdpdfN/0qwuLCrk5+bAWI4wBzPILACIjBKnGrk3n5G0NKZi9JAEJGJTT0ZRzLjA1fbeFMAuLuOxNjp/0i2FXTL3q367a2tz9ypZ3+szCaHaaukwDiAMAZe4M5QqNlJMPQZgFRVz2DFecdFHfsxY+8cScPzSV0qmNVhtWAPkRlEY6qG3DhMM2+Y+GE8FbiJ90cb+zn31x8aJfhT0P6Y3d5uCECVyzQXqzlwFEmOCRUO8XoPJ6p9xdgXjRdcNH3PbnZX+6pbi4mLPRLqCVa1iukADCTAgsUqtDiC0R1e7HIllUUly8+bnp94wc94txG4FU3ivb4pQWJay5a7581J4BVFik3pPKrBC+87nURcISsX+/+prJU6fevqxT504qbYK5VPK0KGFhUJNkMAA/hxwqI+Xz4gLmTq9arSclO7dvv+6GoZfMuXHSda/0OqO3D+RfvdOihG2yOUgIKFvIoL7vGQAZ5ZyWgJdt3wRAASjWJIZrV22you6wCy6cP3fuo0uAFFHpDG4+aDHCCMAMJyq2QHlhIbz6dEgAqGaDhxEJxvi2k+0uFQGIEeOqmPQ+jtj+4reWPzV67KjXBl086CCQfzEd0JIaRmQshuzSsWTtjePH36W5nkSpYbFwyUtPL6is7H6+toO2Ck42m7aEtJ9kcVvCwxduJabd/+CrH773zmA37DI3tbXXDLQYYZYgBSKntGvXv0+7+84PGrqux+k/uuyXd0zdttBNRO+vCjmJppOgGRBIbdKeHpA72fGic3btumj2rEev/s2sma8opRpdWDe3/xZFoJSrlUIymYRSKqMFQYDRY0d/c+XAgY+9SX5klcfRIiY0tFBvCBaASmKMqZbeADixeS8u+csn//tJWynlkSLhXNHihBGRsaSEbKAxM2b/duZDrhMqe8qOyUqLst57TG9uWAxxRyIMj4SZes/0l+OxGIDs6sHqolVF+kIIaK3R/V+6B/dPuW34Blbun8M6VpjD3qNAqpiuZwLejSYS/Xz7N5fPnfv4cMuy8tKyVkUYkCpX0Frj5ltuWtWvZ883llJV0ToXsYLm1kjV7gtAFTGujlneeXBijy9Y9Maa1WsK8zHNVkdYehazbRtzZ82c5BPM004chrLfsE3PmrZheUciDIchptwzfUkikQCQm2m2OsKAlJYppXBu//Mqbh4/fsIqBN4Kz8RymQDSpnmmD2+iiUT/sWXzqD8+MW9orqbZKgkDUqQZY/Af99+77NSTS9YuEFFvtwPfRfbFJxaAKDGuiVteX9ixR+fPX/nl5196uZhmqyUsXRLepk0bnv3wA6P2w8jn3IRyIEwuc5wC4OqUaQptnDvvvneBSqYSvz+YKuq02YwYNWLn6MGDHlkJP/JR2MQKc4zNosTo65N3LXvRVRu+Gv/M/GcuyKYgGGjlhAFHNW3Wb2bMioTDB+ZZMadSIrCRvWkKpEj7Zdxxz2Tpz3zij+9s2rDRzcaf1VtQV7sdF2QxRjo263pqafLBqVOGf03KWRpOBrnUhaUzGhHNckrgGZVUkbvuue/JdM1GQy1DnowOa3ab02dxhMi5bKEJyY+O0ZzFcHoFcNPNk/8+sE+fpcsQi3zpciySR2zWzydvPLzoB5+tnbzwuUXnpsdoqqgwgzCtNVQyCZ1UMErDKCXS5efHAgKAYBasNEzNGEmlGvUhKZkUVJAEG8bsGQ//Wth25dN2XBgilUt2SyCVBpoYt52eLP1H5vz+nY3rvwrDMFSQrPntNVzUMdWMpfu1EybN3Lhp8yWBpKQxLE2Q8KrJIGAW+ZKmtXGq2eCr9evH/njAwJ4MwJYyIZVyx//85/dOu2vKh0ppSGmhdhrmuok3PrT+q43D0jJJacUNa/k3JN0lIRlMijuoyrJkgJA6CVeo4NyeCAe/5op2g0aN/aZdcdtv0iYlBClHsd2rZ4/3Xn7pxQfT99Y5kbuz36G9+/r/qNbBhmJyzClsQSF/TetjpGmX0BFn54GfEQg+GNtsxqGD33Vs6J4du/f0Ldu7r/9pNTIxgBIQNDlmg6VxSLApYIhcTDNKjJ8lhHOzVeCvqkp08KoOdEhv9hoAWy2DHeHwd7XvyyBMOE60PYSap9r6ttKuYhYCEAqM6jzLihjAg74nBAAmUiEQ9jgUG0cVnnTqT1kDAIWcaEdYar5q45PSrgEAZkmAMGAngeZvrtRF2jRviDvuJDiGiEx6b0BJy7/WKnfJsWO178kgjMFCGyPjrKViI9PWm8/5ntpIgFOhALPUIMQY0hgjGzuQz2yENkbGWEvBRqY1gI+RXAQgBgYhdabpCGEMqY2RDM7Qk3rTj3UPcB4rpPtjHD1+nO29x0OuupbTWP+tPnBtbfh/wrJEg4Qd73dWtMZ3YqTRmGz1b6GkZscjjvV4QNSM0+wbamLBY+2/6oMAoBuQ7Z9O5ILICNuOESlzPIUjEEiST0QOUcNLMCLRYjIdlQ0QUvogkgTKiFoyCdMqfJhY3CTKisjO4ulnifQsqSxLABBaKbvBi4Okt4+MmHycZfonGYmcMmJRpFS49ud1TuR2/TQe99skWuBlRcwsHMtOdNIqXFJS8i1Qf318t9LS1dFoVceEsJIt+QIlIsEdjLG6lXb9tPbn/wf+YkoZQEbE+gAAAABJRU5ErkJggg==";
const DARK_LOGO_PNG_DATA_URI = "data:image/png;base64,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";
const MAIN_TAG_PNG_DATA_URI = "data:image/png;base64,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";
const DARK_TAG_PNG_DATA_URI = "data:image/png;base64,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";
const BRAND_FONT = "Arial, Helvetica, sans-serif";
const FIXED_ADDRESS_HEADING = "Address";
const LOGO_MAX_WIDTH = 76;
const LOGO_MAX_HEIGHT = 62;
const TAG_WIDTH = 206;

const fieldIds = [
  "fullName", "titleOne", "titleTwo",
  "addressOne", "addressTwo", "phone", "email",
  "sectionGap", "previewDarkMode"
];
const defaults = {};

function $(id) { return document.getElementById(id); }
function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function getFieldValue(id) {
  const el = $(id);
  return el.type === 'checkbox' ? el.checked : el.value.trim();
}
function setFieldValue(id, value) {
  const el = $(id);
  if (el.type === 'checkbox') el.checked = Boolean(value);
  else el.value = value;
}
function getData() {
  return Object.fromEntries(fieldIds.map(id => [id, getFieldValue(id)]));
}
function sizeSet() {
  return { logoW: LOGO_MAX_WIDTH, logoH: LOGO_MAX_HEIGHT, name: 18, title: 13, head: 14, body: 13, tagW: TAG_WIDTH };
}
function buildPlainText(data) {
  return [
    data.fullName,
    data.titleOne,
    data.titleTwo,
    "",
    FIXED_ADDRESS_HEADING,
    data.addressOne,
    data.addressTwo,
    "",
    data.phone ? `O: ${data.phone}` : "",
    data.email ? `E: ${data.email}` : "",
    "",
    "SCARLETKNIGHTS.COM"
  ].filter(Boolean).join("\n");
}
// Logo blocks. For preview we render a single chosen variant. For export we
// stack light + dark and let a prefers-color-scheme @media query swap them
// (works in Apple Mail / iOS Mail). Outlook strips the <style> on paste and
// can't swap, so mso-hide:all keeps it showing only the light image.
function buildRBlock(s, variant) {
  const shared = `width:${s.logoW}px; max-width:${s.logoW}px; height:auto; max-height:${s.logoH}px; border:0; outline:none; text-decoration:none;`;
  if (variant === 'light') return `<img src="${LIGHT_LOGO_PNG_DATA_URI}" width="${s.logoW}" alt="Rutgers R" style="${shared} display:block;">`;
  if (variant === 'dark')  return `<img src="${DARK_LOGO_PNG_DATA_URI}" width="${s.logoW}" alt="Rutgers R" style="${shared} display:block;">`;
  return `<img class="ru-logo-light" src="${LIGHT_LOGO_PNG_DATA_URI}" width="${s.logoW}" alt="Rutgers R" style="${shared} display:block;">` +
         `<img class="ru-logo-dark" src="${DARK_LOGO_PNG_DATA_URI}" width="${s.logoW}" alt="Rutgers R" style="${shared} display:none; mso-hide:all;">`;
}
function buildTagBlock(s, variant) {
  const shared = `width:${s.tagW}px; max-width:100%; height:auto; border:0; outline:none; text-decoration:none;`;
  if (variant === 'light') return `<img src="${MAIN_TAG_PNG_DATA_URI}" width="${s.tagW}" alt="ScarletKnights.com" style="${shared} display:block;">`;
  if (variant === 'dark')  return `<img src="${DARK_TAG_PNG_DATA_URI}" width="${s.tagW}" alt="ScarletKnights.com" style="${shared} display:block;">`;
  return `<img class="sk-tag-light" src="${MAIN_TAG_PNG_DATA_URI}" width="${s.tagW}" alt="ScarletKnights.com" style="${shared} display:block;">` +
         `<img class="sk-tag-dark" src="${DARK_TAG_PNG_DATA_URI}" width="${s.tagW}" alt="ScarletKnights.com" style="${shared} display:none; mso-hide:all;">`;
}
function line(value, style) {
  return value ? `<div style="${style}">${escapeHtml(value)}</div>` : "";
}
function buildSignatureHtml(data, mode="export") {
  const s = sizeSet();
  const gapAdjust = parseInt(data.sectionGap, 10) || 0;

  const gapLogo = Math.max(46, 58 + gapAdjust);
  const gapInfo = Math.max(58, 78 + gapAdjust);
  const gapAddress = Math.max(52, 72 + gapAdjust);
  const dividerPadLeft = Math.max(24, 34 + Math.floor(gapAdjust / 2));
  const dividerPadRight = Math.max(22, 32 + Math.floor(gapAdjust / 2));

  // No background: let each inbox show through. Outlook auto-inverts the text
  // (black on light, white on dark) on its own. For clients that honor
  // prefers-color-scheme (Apple Mail, iOS Mail) the <style> block below swaps
  // the logo images and recolors text. Outlook strips that <style> on paste,
  // so its logos won't swap, but the red R still reads on a dark background.
  const isDarkPreview = mode === 'preview' && data.previewDarkMode;
  const textColor = isDarkPreview ? '#ffffff' : '#000000';
  const mutedText = isDarkPreview ? '#ffffff' : '#000000';
  const dividerColor = isDarkPreview ? '#6b6b6b' : '#7a7a7a';

  const bodyStyle = `font-family:${BRAND_FONT}; color:${textColor}; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; background:transparent; min-width:1180px;`;
  const nameStyle = `font-size:22px; line-height:1.08; font-weight:700; color:${textColor}; white-space:nowrap;`;
  const textStyle = `font-size:16px; line-height:1.22; font-weight:400; color:${mutedText}; white-space:nowrap;`;
  const headingStyle = `font-size:22px; line-height:1.08; font-weight:700; color:${textColor}; white-space:nowrap;`;
  const metaStyle = `font-size:16px; line-height:1.25; font-weight:400; color:${mutedText}; white-space:nowrap;`;
  const labelStyle = `font-weight:700; font-size:22px; line-height:1; color:${textColor};`;
  const dividerStyle = `width:1px; height:88px; background:${dividerColor}; display:block;`;
  const tagWrapStyle = `padding:8px 0 0 0;`;

  const email = escapeHtml(data.email || '');
  const phone = escapeHtml(data.phone || '');
  const tel = escapeHtml(String(data.phone || '').replace(/[^+\d]/g, ''));
  const previewVariant = mode === 'preview' ? (isDarkPreview ? 'dark' : 'light') : undefined;
  const rLogoHtml = buildRBlock(s, previewVariant);
  const tagHtml = buildTagBlock(s, previewVariant);

  const darkSwapCss = mode === 'export' ? `<style type="text/css">
@media (prefers-color-scheme: dark) {
  .ru-logo-light, .sk-tag-light { display:none !important; }
  .ru-logo-dark, .sk-tag-dark { display:block !important; }
  .sk-signature .sk-text, .sk-signature .sk-text * { color:#ffffff !important; }
  .sk-signature .sk-divider { background-color:#6b6b6b !important; }
}
</style>
` : '';

  return `${darkSwapCss}<table class="sk-signature" role="presentation" cellpadding="0" cellspacing="0" border="0" style="${bodyStyle}">
  <tr>
    <td class="sk-logo-cell" style="vertical-align:middle; padding:0 ${gapLogo}px 0 0;">
      ${rLogoHtml}
    </td>

    <td class="sk-text sk-info-cell" style="vertical-align:middle; padding:0 ${gapInfo}px 0 0;">
      ${line(data.fullName, nameStyle)}
      ${line(data.titleOne, textStyle)}
      ${line(data.titleTwo, textStyle)}
    </td>

    <td class="sk-text sk-address-cell" style="vertical-align:middle; padding:0 ${gapAddress}px 0 0;">
      ${line(FIXED_ADDRESS_HEADING, headingStyle)}
      ${line(data.addressOne, metaStyle)}
      ${line(data.addressTwo, metaStyle)}
    </td>

    <td class="sk-divider-cell" style="vertical-align:middle; padding:0 ${dividerPadRight}px 0 ${dividerPadLeft}px;">
      <span class="sk-divider" style="${dividerStyle}"></span>
    </td>

    <td class="sk-text sk-contact-cell" style="vertical-align:middle; padding:0;">
      ${data.phone ? `<div style="${metaStyle}"><span style="${labelStyle}">O:</span>&nbsp; <a href="tel:${tel}" style="color:${mutedText}; text-decoration:none;">${phone}</a></div>` : ''}
      ${data.email ? `<div style="${metaStyle}"><span style="${labelStyle}">E:</span>&nbsp; <a href="mailto:${email}" style="color:${mutedText}; text-decoration:none;">${email}</a></div>` : ''}
      <div style="${tagWrapStyle}">${tagHtml}</div>
    </td>
  </tr>
</table>`;
}
function render() {
  const data = getData();
  $("signaturePreview").innerHTML = buildSignatureHtml(data, "preview");
  $("htmlOutput").value = buildSignatureHtml(data, "export");
  $("plainOutput").value = buildPlainText(data);
  const dark = Boolean(data.previewDarkMode);
  $("signatureStage").classList.toggle('dark-preview', dark);
  $("logoThumb").src = dark ? 'skcom-dark.png' : 'skcom-normal.png';
}
async function copyText(text, message) {
  await navigator.clipboard.writeText(text);
  $("status").textContent = message;
  setTimeout(() => $("status").textContent = "", 2500);
}
async function copyRendered() {
  const data = getData();
  const html = buildSignatureHtml(data, "export");
  const text = buildPlainText(data);
  if (navigator.clipboard && window.ClipboardItem) {
    const item = new ClipboardItem({
      "text/html": new Blob([html], { type: "text/html" }),
      "text/plain": new Blob([text], { type: "text/plain" })
    });
    await navigator.clipboard.write([item]);
    $("status").textContent = "Rendered signature copied.";
    setTimeout(() => $("status").textContent = "", 2500);
  } else {
    await copyText(html, "HTML copied.");
  }
}
function downloadHtml() {
  const blob = new Blob([$("htmlOutput").value], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${$("fullName").value.trim().replace(/\s+/g, "-").toLowerCase() || "signature"}.html`;
  a.click();
  URL.revokeObjectURL(url);
}
for (const id of fieldIds) defaults[id] = getFieldValue(id);
for (const id of fieldIds) {
  const eventName = $(id).type === 'checkbox' ? 'change' : 'input';
  $(id).addEventListener(eventName, render);
}
$("copyHtmlBtn").addEventListener("click", () => copyText($("htmlOutput").value, 'HTML copied.'));
$("copyTextBtn").addEventListener("click", () => copyText($("plainOutput").value, 'Plain text copied.'));
$("copyRenderedBtn").addEventListener("click", copyRendered);
$("downloadBtn").addEventListener("click", downloadHtml);
$("resetBtn").addEventListener("click", () => {
  for (const [id, value] of Object.entries(defaults)) setFieldValue(id, value);
  render();
});
render();
