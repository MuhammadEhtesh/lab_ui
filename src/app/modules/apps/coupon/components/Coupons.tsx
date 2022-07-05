/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios'
import { Component } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../../../_metronic/helpers'

export class Coupons extends Component {

  state = {
    coupons: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/allCoupons').then((res) => {
      this.setState({ coupons: res.data })
    }).catch(err => console.log(err));
  }

  handleMarkInActive = (id: any) => {
    axios.put('http://localhost:8080/coupons/' + id).then((res) => {
      this.setState({ coupons: res.data })
    }).catch(err => console.log(err));
  }

  handleEdit = (id: any) => {
    axios.put('http://localhost:8080/coupons/' + id).then((res) => {
      this.setState({ coupons: res.data })
    }).catch(err => console.log(err));
  }

  handleDelete = (id: any) => {
    axios.delete('http://localhost:8080/coupons/' + id).then((res) => {
      this.setState({ coupons: res.data })
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className={`card mb-5 mb-xl-8`}>

        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bolder fs-3 mb-1'>Coupons</span>
            <span className='text-muted mt-1 fw-bold fs-7'>All active Coupons</span>
          </h3>
        </div>
        <div className='card-body py-3'>
          <div className='table-responsive'>
            <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
              <thead>
                <tr className='fw-bolder text-muted'>
                  <th className='min-w-150px'>Recipient</th>
                  <th className='min-w-150px'>Amount</th>
                  <th className='min-w-150px'>Date</th>
                  <th className='min-w-120px'>Image</th>
                  <th className='min-w-100px text-end'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.coupons.map((object: any, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                          {object.recipient}
                        </a>
                      </td>
                      <td>
                        <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                          {object.amount}
                        </a>
                      </td>
                      <td>
                        <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                          {object.date}
                        </a>
                      </td>
                      <td className='text-dark fw-bolder text-hover-primary'>
                        <img style={{ width: '40px' }} src={toAbsoluteUrl(object.photo)} alt='Metronic' />
                      </td>
                      <td className='text-end'>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                          onClick={this.handleMarkInActive.bind(this, object.id)}
                        >
                          <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                        </a>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        >
                          <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                        </a>
                        <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                          onClick={this.handleDelete.bind(this, object.id)}
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
}
