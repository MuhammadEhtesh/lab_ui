/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../../../_metronic/helpers'

const Campaigns = () => {

  const [campaigns, setCampaigns] = useState([])

  // state = {
  //   campaigns: []
  // }

  // componentDidMount() {
  //   axios.get('http://localhost:8080/allCampaigns').then((res) => {
  //     this.setState({ campaigns: res.data })
  //   }).catch(err => console.log(err));
  // }

  useEffect(() => {
    axios.get('http://localhost:8080/allCampaigns').then((res) => {
      setCampaigns(res.data);
    }).catch(err => console.log(err));
  }, [])

  const handleMarkInActive = (id: any) => {
    axios.put('http://localhost:8080/campaigns/' + id).then((res) => {
      setCampaigns(res.data);
    }).catch(err => console.log(err));
  }

  const handleEdit = (id: any) => {
    axios.put('http://localhost:8080/campaigns/' + id).then((res) => {
      setCampaigns(res.data);
    }).catch(err => console.log(err));
  }

  const handleDelete = (id: any) => {
    axios.delete('http://localhost:8080/campaigns/' + id).then((res) => {
      setCampaigns(res.data);
    }).catch(err => console.log(err));
  }


  return (
    <div className={`card mb-5 mb-xl-8`}>

      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Campaigns</span>
          <span className='text-muted mt-1 fw-bold fs-7'>All active campaigns</span>
        </h3>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='min-w-150px'>Title</th>
                <th className='min-w-140px'>Description</th>
                <th className='min-w-120px'>Start Date</th>
                <th className='min-w-120px'>End Date</th>
                <th className='min-w-120px'>Tenant</th>
                <th className='min-w-120px'>Type</th>
                <th className='min-w-120px'>Tags</th>
                <th className='min-w-120px'>Coupon</th>
                <th className='min-w-120px'>Status</th>
                <th className='min-w-120px'>Image</th>
                <th className='min-w-100px text-end'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((object: any, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                        {object.title}
                      </a>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        {object.description}
                      </a>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        {object.startDate}
                      </a>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        {object.endDate}
                      </a>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        {object.tenant}
                      </a>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        {object.campaigntype}
                      </a>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        {object.campaigntags}
                      </a>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        {object.coupon}
                      </a>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                        {object.status}
                      </a>
                    </td>
                    <td className='text-dark fw-bolder text-hover-primary'>
                      <img style={{ width: '40px' }} src={toAbsoluteUrl(object.dealImage)} alt='Metronic' />
                    </td>
                    <td className='text-end'>
                      <a
                        href='#'
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        onClick={handleMarkInActive.bind(this, object.id)}
                      >
                        <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                      </a>
                      <a
                        href='#'
                        onClick={handleEdit.bind(this, object)}
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                      >
                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                      </a>
                      <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                        onClick={handleDelete.bind(this, object.id)}
                      >
                        <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                      </a>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


export default Campaigns;