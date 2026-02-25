import React from 'react'
import Layout from './layout/Layout'
import { Route, Routes,Navigate } from 'react-router-dom'
import { lazy } from 'react'


const Home = lazy(() => import('../src/pages/Home'))
const Approach = lazy(() => import('../src/pages/Approach'))
const Instructor = lazy(() => import('../src/pages/Instructor'))
const Curriculum = lazy(() => import('../src/pages/Curriculum'))
const Pricing = lazy(() => import('../src/pages/Pricing'))
const ErrorPage = lazy(() => import('../src/pages/ErrorPage'))

const App = () => {
  return (
    <Layout>
      <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/approach" element={<Approach/>}/>
              <Route path="/instructor" element={<Instructor/>}/>
              <Route path="/curriculum" element={<Curriculum/>}/>
              <Route path="/pricing" element={<Pricing/>}/>
              <Route path="/notfound" element={<ErrorPage/>}/>
              <Route path="*" element={<Navigate to={"/notfound"}/>}/>
    </Routes>
  </Layout>
  )
}

export default App