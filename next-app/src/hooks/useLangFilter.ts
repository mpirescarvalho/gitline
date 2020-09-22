import { useMemo } from 'react';
import { useRouter } from 'next/router';

export default function useLangFilter() {
  const router = useRouter();

  const filter = useMemo(() => router.query.lang as string, [router]);

  return filter || 'All';
}
