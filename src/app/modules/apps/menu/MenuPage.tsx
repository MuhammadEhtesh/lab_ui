import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import NewMenu from './components/NewMenu'
import Menu from './components/Menu'


const menuBreadCrumbs: Array<PageLink> = [
  {
    title: 'Menu',
    path: '/apps/menu/menus',
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

const MenuPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='new-menu'
          element={
            <>
              <PageTitle breadcrumbs={menuBreadCrumbs}>New Menu</PageTitle>
              <NewMenu />
            </>
          }
        />
        <Route
          path='menus'
          element={
            <>
              <PageTitle breadcrumbs={menuBreadCrumbs}>Menu</PageTitle>
              <Menu />
            </>
          }
        />
       
        <Route index element={<Navigate to='/apps/menu/menus' />} />
      </Route>
    </Routes>
  )
}

export default MenuPage;
