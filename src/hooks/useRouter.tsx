import { type ParamListBase } from '@react-navigation/native';
import { navigationRef } from '../navigator/RootNavigation';
import useLinkTo from './useLinkTo';

type Keyof<T extends {}> = Extract<keyof T, string>;

type Href<
  RouteName extends string,
  Params extends object | undefined = object | undefined
> =
  | {
      pathname: RouteName;
      params?: Params;
    }
  | RouteName;

type Router<ParamList extends ParamListBase> = {
  /** Navigate to the provided href. */
  push: <RouteName extends keyof ParamList = Keyof<ParamList>>(
    href: Href<Extract<RouteName, string>, ParamList[RouteName]>
  ) => void;
  /** Navigate to route without appending to the history. */
  replace: <RouteName extends keyof ParamList = Keyof<ParamList>>(
    href: Href<Extract<RouteName, string>, ParamList[RouteName]>
  ) => void;
  /** Go back in the history. */
  back: () => void;
  /** Update the current route query params. */
  setParams: (params: Record<string, string>) => void;
};
export const resolveHref = <
  RouteName extends keyof ParamListBase = Keyof<ParamListBase>
>(
  href: Href<Extract<RouteName, string>, ParamListBase[RouteName]>
): string => {
  if (typeof href === 'string') {
    return resolveHref({ pathname: href });
  }
  const path = href.pathname ?? '';
  if (!href?.params) {
    return path;
  }
  const { pathname, params } = createQualifiedPathname(path, {
    ...href.params,
  });
  return (
    pathname +
    (Object.keys(params).length ? `?${createQueryParams(params)}` : '')
  );
};

function createQualifiedPathname(
  pathname: string,
  params: Record<string, any>
): Omit<
  Required<{
    pathname: string;
    params?: Record<string, any>;
  }>,
  'query'
> {
  for (const [key, value = ''] of Object.entries(params)) {
    const dynamicKey = `[${key}]`;
    const deepDynamicKey = `[...${key}]`;
    if (pathname.includes(dynamicKey)) {
      pathname = pathname.replace(
        dynamicKey,
        Array.isArray(value) ? value.join('/') : value
      );
    } else if (pathname.includes(deepDynamicKey)) {
      pathname = pathname.replace(
        deepDynamicKey,
        Array.isArray(value) ? value.join('/') : value
      );
    } else {
      continue;
    }

    delete params[key];
  }
  return { pathname, params };
}

function createQueryParams(params: Record<string, any>): string {
  return Object.entries(params)
    .map((props) => props.join('='))
    .join('&');
}

const useRouter = <T extends ParamListBase>(): Router<T> => {
  const linkTo = useLinkTo();

  return {
    push: (href) => {
      let resolvedHref = resolveHref(href);
      linkTo(resolvedHref, 'PUSH');
    },
    replace: (href) => {
      let resolvedHref = resolveHref(href);
      linkTo(resolvedHref, 'REPLACE');
    },
    back: () => {
      navigationRef.goBack();
    },
    setParams: (params: Record<string, string>) => {
      navigationRef.setParams(params);
    },
  };
};

export default useRouter;
