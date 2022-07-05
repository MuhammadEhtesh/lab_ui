import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import Campaigns from "./components/Campaigns"
import NewCampaigns from "./components/NewCampaigns"

const campaignBreadCrumbs: Array<PageLink> = [
  {
    title: 'Campaign',
    path: '/apps/campaign/campaigns',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const CampaignPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='new-campaign'
          element={
            <>
              <PageTitle breadcrumbs={campaignBreadCrumbs}>New Campaign</PageTitle>
              <NewCampaigns />
            </>
          }
        />
        <Route
          path='campaigns'
          element={
            <>
              <PageTitle breadcrumbs={campaignBreadCrumbs}>Campaigns</PageTitle>
              <Campaigns />
            </>
          }
        />
       
        <Route index element={<Navigate to='/apps/campaign/campaigns' />} />
      </Route>
    </Routes>
  )
}

export default CampaignPage
