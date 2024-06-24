import React from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Discover = React.lazy(() => import('@/views/discover'))
const Download = React.lazy(() => import('@/views/download'))
const Focus = React.lazy(() => import('@/views/focus'))
const Mine = React.lazy(() => import('@/views/mine'))
const Album = React.lazy(() => import('@/views/discover/c-views/album'))
const Artists = React.lazy(() => import('@/views/discover/c-views/artists'))
const Djradio = React.lazy(() => import('@/views/discover/c-views/djradio'))
const Ranking = React.lazy(() => import('@/views/discover/c-views/ranking'))
const Recommend = React.lazy(() => import('@/views/discover/c-views/recommend'))
const Songs = React.lazy(() => import('@/views/discover/c-views/songs'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/discover'} />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to={'/discover/recommend'}/>
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artists',
        element: <Artists />
      },
      {
        path: '/discover/album',
        element: <Album />
      },
    ]
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
