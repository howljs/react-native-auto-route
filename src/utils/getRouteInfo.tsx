import type { NavigationState } from '@react-navigation/native';
import getPathFromState, {
  getPathDataFromState,
  type State,
} from './getPathFromState';

type SearchParams = Record<string, string | string[]>;

export type UrlObject = {
  unstable_globalHref: string;
  pathname: string;
  readonly params: SearchParams;
  segments: string[];
  isIndex: boolean;
};

export const getRouteInfo = (navState: NavigationState, config: any) => {
  return getRouteInfoFromState(
    (state: Parameters<typeof getPathFromState>[0], asPath: boolean) => {
      return getPathDataFromState(state, {
        screens: [],
        ...config,
        preserveDynamicRoutes: asPath,
        preserveGroups: asPath,
      });
    },
    navState
  );
};

const getRouteInfoFromState = (
  callback: (state: State, asPath: boolean) => { path: string; params: any },
  state: State
): any => {
  const { path } = callback(state, false);
  const qualified = callback(state, true);
  return {
    // TODO: This may have a predefined origin attached in the future.
    unstable_globalHref: path,
    isIndex: isIndexPath(state),
    pathname: path.split('?')['0'],
    ...getNormalizedStatePath(qualified),
  };
};

function isIndexPath(state: State): boolean {
  const route = state.routes[state.index ?? state.routes.length - 1];
  if (route?.state) {
    return isIndexPath(route.state);
  }
  // router.params is typed as 'object', so this usual syntax is to please TypeScript
  if (route?.params && 'screen' in route.params) {
    return route.params.screen === 'index';
  }
  return false;
}

// TODO: Split up getPathFromState to return all this info at once.
function getNormalizedStatePath({
  path: statePath,
  params,
}: {
  path: string;
  params: any;
}): Pick<UrlObject, 'segments' | 'params'> {
  const [pathname] = statePath.split('?');
  return {
    // Strip empty path at the start
    segments:
      pathname?.split('/').filter(Boolean).map(decodeURIComponent) ?? [],
    // TODO: This is not efficient, we should generate based on the state instead
    // of converting to string then back to object
    params: Object.entries(params).reduce((prev, [key, value]) => {
      if (Array.isArray(value)) {
        prev[key] = value.map(decodeURIComponent);
      } else {
        prev[key] = decodeURIComponent(value as string);
      }
      return prev;
    }, {} as SearchParams),
  };
}
