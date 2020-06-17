import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useParams,
  browserHistory,
  useHistory
} from "react-router-dom";
export const useTracking = (trackingId) => {
  const { listen } = useHistory();

  useEffect(() => {
    const unlisten = listen((location) => {
      // if you pasted the google snippet on your index.html
      // you've declared this function in the global
      if (!window.gtag) return

      window.gtag('config', trackingId, { page_path: location.pathname })
    })

    // remember, hooks that add listeners
    // should have cleanup to remove them
    return unlisten
  }, [trackingId, listen])
}
