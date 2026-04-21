/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/about`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/Button`; params?: Router.UnknownInputParams; } | { pathname: `/components/FormInput`; params?: Router.UnknownInputParams; } | { pathname: `/components/Screen`; params?: Router.UnknownInputParams; } | { pathname: `/components/Typography`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/about`; params?: Router.UnknownOutputParams; } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/components/Button`; params?: Router.UnknownOutputParams; } | { pathname: `/components/FormInput`; params?: Router.UnknownOutputParams; } | { pathname: `/components/Screen`; params?: Router.UnknownOutputParams; } | { pathname: `/components/Typography`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/about${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/components/Button${`?${string}` | `#${string}` | ''}` | `/components/FormInput${`?${string}` | `#${string}` | ''}` | `/components/Screen${`?${string}` | `#${string}` | ''}` | `/components/Typography${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/about`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/Button`; params?: Router.UnknownInputParams; } | { pathname: `/components/FormInput`; params?: Router.UnknownInputParams; } | { pathname: `/components/Screen`; params?: Router.UnknownInputParams; } | { pathname: `/components/Typography`; params?: Router.UnknownInputParams; };
    }
  }
}
