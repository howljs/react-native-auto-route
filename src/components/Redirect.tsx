import { useFocusEffect, type ParamListBase } from '@react-navigation/native';
import { useCallback } from 'react';
import useRouter, { type To } from '../hooks/useRouter';

const Redirect = ({ to }: { to: To<ParamListBase> }) => {
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      router.replace(to);
    }, [router, to])
  );
  return null;
};

export default Redirect;
