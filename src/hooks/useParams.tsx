import { NavigationRouteContext } from '@react-navigation/native';
import { useContext } from 'react';

const useParams = <
  T extends Record<string, any> = Record<string, any>
>(): Readonly<T> => {
  const route = useContext(NavigationRouteContext);
  if (route === undefined) {
    throw new Error(
      "Couldn't find a route object. Is your component inside a screen in a navigator?"
    );
  }
  return (route.params || {}) as T;
};

export default useParams;
