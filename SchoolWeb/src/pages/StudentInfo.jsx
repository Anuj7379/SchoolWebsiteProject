import React from 'react'
import Navbar from '../component/Navbar'
import InfoService from '../component/InfoServices'
import Home from '../component/HomepageFooter'
import Chart from '../component/Chart'


function StudentInfo() {
  return (
    <>
      <Navbar/>
      <InfoService/>
      <Chart/>
    
      <Home/>
    </>
  )
}

export default StudentInfo
