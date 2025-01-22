import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import router from './Routes/MainRoutes'
import { RouterProvider } from 'react-router/dom'
import { PageMetricsProvider } from './Provider/PageMetricsProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageMetricsProvider>
      <RouterProvider router={router} />
    </PageMetricsProvider>
  </React.StrictMode>,
)