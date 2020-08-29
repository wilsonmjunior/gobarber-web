/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import queryString from 'query-string';

interface IRouterData {
  push: any;
  replace: any;
  pathname: any;
  query: any;
  match: any;
  location: any;
  history: any;
}

function useRouter(): IRouterData {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params,
      },
      match,
      location,
      history,
    };
  }, [params, match, location, history]);
}

export { useRouter };
