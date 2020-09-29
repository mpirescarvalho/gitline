import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function useRouting() {
  const [isRouting, setIsRouting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsRouting(false);

    const handleRouteChange = () => {
      setIsRouting(true);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return isRouting;
}

export function useRouteEffect(onRoutingStart, onRoutingEnd) {
  const router = useRouter();

  useEffect(() => {
    onRoutingEnd();

    router.events.on('routeChangeStart', onRoutingStart);
    return () => {
      router.events.off('routeChangeStart', onRoutingStart);
    };
  }, [router]);
}
