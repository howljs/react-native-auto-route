import React from 'react';
import { Screen } from '../navigator/primitives';

interface UseFilterScreenChildrenProps {
  contextKey?: string;
}

export function useFilterScreenChildren(
  children: React.ReactNode,
  { contextKey }: UseFilterScreenChildrenProps = {}
) {
  return React.useMemo(() => {
    const screens = React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child && child.type === Screen) {
        if (!child.props.name) {
          throw new Error(
            `<Screen /> component in \`default export\` at \`app${contextKey}/_layout\` must have a \`name\` prop when used as a child of a Layout Route.`
          );
        }
        if (__DEV__) {
          if (
            ['children', 'component', 'getComponent'].some(
              (key) => key in child.props
            )
          ) {
            throw new Error(
              `<Screen /> component in \`default export\` at \`app${contextKey}/_layout\` must not have a \`children\`, \`component\`, or \`getComponent\` prop when used as a child of a Layout Route`
            );
          }
        }
        return child.props;
      } else {
        console.warn(
          `Layout children must be of type Screen, all other children are ignored. To use custom children, create a custom <Layout />. Update Layout Route at: "app${contextKey}/_layout"`
        );
      }
    });

    // Add an assertion for development
    if (__DEV__) {
      // Assert if names are not unique
      const names = screens?.map((screen) => screen.name);
      if (names && new Set(names).size !== names.length) {
        throw new Error('Screen names must be unique: ' + names);
      }
    }

    return { screens };
  }, [children, contextKey]);
}
