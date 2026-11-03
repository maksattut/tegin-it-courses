/* Runs before first paint: applies the saved theme and language (values are whitelisted). */
(function () {
  var d = document.documentElement, t = null, s = null, p = null;
  try { t = localStorage.getItem('itk-theme'); s = localStorage.getItem('itk-lang'); } catch (e) { /* storage blocked */ }
  if (t === 'dark' || t === 'light') d.setAttribute('data-theme', t);
  try { p = new URLSearchParams(location.search).get('lang'); } catch (e) { /* old browser */ }
  d.lang = (p === 'ru' || p === 'kk') ? p : (s === 'ru' ? 'ru' : 'kk');
})();
