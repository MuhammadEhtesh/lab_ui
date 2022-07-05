import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import Retailers from './components/Retailers'
import NewRetailer from './components/NewRetailer'


const retailerBreadCrumbs: Array<PageLink> = [
  {
    title: 'Retailer',
    path: '/apps/retailer/retailers',
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

const RetailerPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='new-retailer'
          element={
            <>
              <PageTitle breadcrumbs={retailerBreadCrumbs}>New Retailer</PageTitle>
              <NewRetailer />
            </>
          }
        />
        <Route
          path='retailers'
          element={
            <>
              <PageTitle breadcrumbs={retailerBreadCrumbs}>Retailers</PageTitle>
              <Retailers />
            </>
          }
        />
       
        <Route index element={<Navigate to='/apps/retailer/retailers' />} />
      </Route>
    </Routes>
  )
}

export default RetailerPage;
