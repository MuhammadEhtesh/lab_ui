import ReactDOM from 'react-dom'
// Axios
import axios from 'axios'
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'

// Apps
import {MetronicI18nProvider} from './_metronic/i18n/Metronici18n'
import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/style.react.scss'
import {AppRoutes} from './app/routing/AppRoutes'
import {AuthProvider, setupAxios} from './app/modules/auth'
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./app/Utilities/authConfig";

export const msalInstance = new PublicClientApplication(msalConfig);

setupAxios(axios)

Chart.register(...registerables)

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <MetronicI18nProvider>
      <AuthProvider>
        <AppRoutes />
        <div></div>
      </AuthProvider>
    </MetronicI18nProvider>
  </QueryClientProvider>,
  document.getElementById('root')
)
