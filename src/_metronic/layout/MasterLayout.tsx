import {useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import {AsideDefault} from './components/aside/AsideDefault'
import {HeaderWrapper} from './components/header/HeaderWrapper'
import {HeaderSecondWrapper} from './components/header/HeaderSecondWrapper'
import {Carousal} from './components/body/Carousal'
import {Cards} from './components/body/Cards'
import {Video} from './components/body/Video'
import {Promo} from './components/body/Promo'
import {FooterComponent} from './components/body/FooterComponent'
import {FooterCopyRight} from './components/body/FooterCopyRight'
import {Toolbar} from './components/toolbar/Toolbar'
import {ScrollTop} from './components/ScrollTop'
import {Content} from './components/Content'
import {PageDataProvider} from './core'
import {useLocation} from 'react-router-dom'
import {DrawerMessenger, ActivityDrawer, Main, InviteUsers, UpgradePlan} from '../partials'
import {MenuComponent} from '../assets/ts/components'

const MasterLayout = () => {
  const location = useLocation()
  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])

  return (
    <PageDataProvider>
      {/* <div className='page d-flex flex-row flex-column-fluid'>
        <AsideDefault />
        <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
          <HeaderWrapper />

          <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
            <Toolbar />
            <div className='post d-flex flex-column-fluid' id='kt_post'>
              <Content>
                <Outlet />
              </Content>
            </div>
          </div>
        </div>
      </div>

      <ActivityDrawer />
      <DrawerMessenger />
      <Main />
      <InviteUsers />
      <UpgradePlan />
      <ScrollTop /> */}
      <HeaderWrapper />
      <HeaderSecondWrapper />
      <Carousal />
      <Cards />
      <Video />
      <Promo />
      <FooterComponent />
      <FooterCopyRight />
    </PageDataProvider>
  )
}

export {MasterLayout}
