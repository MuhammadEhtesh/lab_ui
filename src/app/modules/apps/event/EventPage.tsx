import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import Events from './components/Events'
import NewEvent from './components/NewEvent'


const eventBreadCrumbs: Array<PageLink> = [
  {
    title: 'Event',
    path: '/apps/event/events',
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

const EventPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='new-event'
          element={
            <>
              <PageTitle breadcrumbs={eventBreadCrumbs}>New Event</PageTitle>
              <NewEvent />
            </>
          }
        />
        <Route
          path='events'
          element={
            <>
              <PageTitle breadcrumbs={eventBreadCrumbs}>Events</PageTitle>
              <Events />
            </>
          }
        />
       
        <Route index element={<Navigate to='/apps/event/events' />} />
      </Route>
    </Routes>
  )
}

export default EventPage;
