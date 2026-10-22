/* Друзья Друзей: часы и подсказка про завтраки (по будням 7:30-12:00, по выходным с открытия в 10:00 до 12:00) */
(function () {
  var c = document.querySelector('[data-dclock]'), s = document.querySelector('[data-dsay]');
  if (!c) return;
  function tick() {
    var d = new Date(Date.now() + 5 * 3600e3), h = d.getUTCHours(), m = d.getUTCMinutes(), we = d.getUTCDay() === 0 || d.getUTCDay() === 6;
    var t = h + m / 60, o = we ? 10 : 7.5;
    c.textContent = (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
    s.textContent = t >= o && t < 12 ? 'Сейчас завтракают. До 12:00 ещё успеете.' : t < o ? (we ? 'Сегодня открываемся в 10:00.' : 'Откроемся в 7:30, раньше всех.') : 'Завтраки закончились, но кофе до 22:00.';
  }
  tick(); setInterval(tick, 30000);
  var cn = document.querySelector('[data-chatnow]');
  if (cn) { var st = document.querySelector('.st'); setTimeout(function () { if (st) cn.textContent = st.classList.contains('on') ? 'Да, ' + st.textContent : 'Сейчас закрыто, по будням с 7:30, раньше всех'; }, 300); }
})();
