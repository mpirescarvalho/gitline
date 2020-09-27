import { useEffect } from 'react';
import { analytics } from 'firebase/app';
import { useRouter } from 'next/router';
import '../firebase/initFirebase';

export function useLogPageView(page_title: string, condition?: () => boolean) {
  const router = useRouter();

  useEffect(() => {
    if (typeof condition === 'undefined' || condition()) {
      analytics().logEvent('page_view', {
        page_title,
      });
    }
  }, [router, page_title, condition]);
}
