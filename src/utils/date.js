const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export function getCountdownParts(targetTime) {
  const distance = Math.max(targetTime - Date.now(), 0);

  return [
    {
      label: 'Days',
      value: Math.floor(distance / DAY),
    },
    {
      label: 'Hours',
      value: Math.floor((distance % DAY) / HOUR),
    },
    {
      label: 'Minutes',
      value: Math.floor((distance % HOUR) / MINUTE),
    },
    {
      label: 'Seconds',
      value: Math.floor((distance % MINUTE) / SECOND),
    },
  ];
}

export function formatCountdownValue(value) {
  return String(value).padStart(2, '0');
}
