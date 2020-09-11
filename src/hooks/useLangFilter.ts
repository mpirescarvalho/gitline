import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export default function useLangFilter() {
  const location = useLocation();

  const filter = useMemo(() => new URLSearchParams(location.search), [
    location,
  ]);

  return filter.get('lang') || 'All';
}
