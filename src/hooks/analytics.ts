import { useEffect } from 'react';
import { analytics } from 'firebase/app';

export function useLogPageView(page_title: string) {
  useEffect(() => {
    analytics().logEvent('page_view', {
      page_title,
    });
  }, [page_title]);
}
