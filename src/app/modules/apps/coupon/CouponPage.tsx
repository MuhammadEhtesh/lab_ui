import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {NewCoupon} from "./components/NewCoupon";
import {Coupons} from "./components/Coupons";

const couponBreadCrumbs: Array<PageLink> = [
  {
    title: 'Coupon',
    path: '/apps/coupon/coupons',
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

const CouponPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='new-coupon'
          element={
            <>
              <PageTitle breadcrumbs={couponBreadCrumbs}>New Coupon</PageTitle>
              <NewCoupon />
            </>
          }
        />
        <Route
          path='coupons'
          element={
            <>
              <PageTitle breadcrumbs={couponBreadCrumbs}>Coupons</PageTitle>
              <Coupons />
            </>
          }
        />
       
        <Route index element={<Navigate to='/apps/coupon/coupons' />} />
      </Route>
    </Routes>
  )
}

export default CouponPage;
