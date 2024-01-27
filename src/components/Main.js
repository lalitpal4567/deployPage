import React from 'react'
import Registration from './Registration'
import ServiceList from './ServiceList'
import AddService from './AddService'
import { IoAddCircle } from "react-icons/io5";

const Main = () => {
  return (
    <div className=''>
      <div className='p-4 pb-0 pt-md-5' style={{ backgroundColor: "#F7F5F9" }}>
        <div className='container'>
          <Registration />
        </div>
      </div>
      <div className='py-5 m-auto' style={{ padding: "0px 24px", maxWidth: 840 }}>
        <div className='d-flex column-gap-3 justify-content-center align-items-center d-none d-md-flex d-lg-none'>
          <IoAddCircle className='' style={{fontSize: 40, color: "#0096C8"}}/>
          <p className=''>Add your Listing</p>
        </div>
        <ServiceList />
      </div>
      <div style={{ backgroundColor: "#F7FDFF" }}>
        <div className=' px-5 py-5 d-md-none d-lg-block'>
          <AddService />
        </div>
      </div>
    </div>
  )
}

export default Main