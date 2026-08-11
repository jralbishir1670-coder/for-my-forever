import { useEffect, useMemo, useState } from 'react';
import { getCountdownParts } from '../utils/date';

function useCountdown(targetDate) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [parts, setParts] = useState(() => getCountdownParts(target));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setParts(getCountdownParts(target));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [target]);

  return parts;
}

export default useCountdown;
