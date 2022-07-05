/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Coupon } from '../models/CouponModel';
import Select from 'react-select';

export class NewCoupon extends Component {

  constructor(props: any) {
    super(props)
  }

  state = {
    selectedFile: null,
    previewImage: null,
    showImage: false,
    selectedOption: null,
    photoUrl: "",
    recipientError: false,
    amountError: false,
    dateError: false,
    photoError: false,
    recipientSelected: ''
  }

  handleFileUpload = (event: any) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ previewImage: URL.createObjectURL(event.target.files[0]) });
  }

  handleSelectChange = (e: any) => {
    this.setState({ recipientSelected: e.target.value })
  }

  notify = () => toast("Coupon saved successfully.");
  handleSubmit = (e: any) => {
    e.preventDefault();
    debugger;
    this.setState({ recipientError: this.state.recipientSelected === '' ? true : false }, () => {
      this.setState({ amountError: e.target.amount.value === '' ? true : false }, () => {
        this.setState({ dateError: e.target.date.value === '' ? true : false }, () => {
          this.setState({ photoError: e.target.image.value === '' ? true : false }, () => {
            debugger;
            if (this.state.amountError || this.state.recipientError || this.state.dateError || this.state.photoError) {
              return;
            }

            const coupon: Coupon = {
              id: '',
              from: this.state.recipientSelected,
              amount: e.target.amount.value,
              date: e.target.date.value,
              photo: this.state.photoUrl
            }

            axios.post('http://localhost:8080/addCampaign', coupon).then(res => {

              console.log('success')
              this.notify();
              e.target.reset();
              this.setState({ previewImage: null });
            }).catch(err => console.log(err));
          });
        });
      });
    });
  }

  handleChange = (selectedOption: any) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  logChange(val: any) {
    this.setState({selectedOption: val.value})
  }

  render() {

    const options = [
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' }
    ];

    return (
      <div>
        <ToastContainer autoClose={5000}></ToastContainer>
        <div className='card mb-5 mb-xl-10'>
          <div
            className='card-header border-0 cursor-pointer'
            role='button'
            data-bs-target='#kt_account_profile_details'
            aria-expanded='true'
            aria-controls='kt_account_profile_details'
          >
            <div className='card-title m-0'>
              <h3 className='fw-bolder m-0'>Add Recipient</h3>
            </div>
          </div>

          <div id='kt_account_profile_details' className='collapse show'>
            <form onSubmit={this.handleSubmit} noValidate className='form'>
              <div className='card-body border-top p-9'>
                <div className='row mb-6'>
                  <label className='col-lg-4 col-form-label required fw-bold fs-6'>Recipient from</label>

                  <div className='col-lg-8'>
                    <div className='row'>
                      <div className='col-lg-12 fv-row'>
                        {/* <select
                          className='form-select form-select-solid'
                          data-kt-select2='true'
                          data-placeholder='Select option'
                          data-allow-clear='true'
                          name='recipient'
                          onChange={this.handleSelectChange}
                        >
                          <option>Select recipient</option>
                          <option value='1'>McDonald</option>
                          <option value='2'>KFC</option>
                          <option value='3'>PizzaHut</option>
                          <option value='4'>Sweets</option>
                        </select> */}
                        <Select
                          name='recipient'
                          options={options}
                          onChange={this.logChange}
                        />
                      </div>
                    </div>
                    <small hidden={!this.state.recipientError} className="text-danger">Recipient is required.</small>
                  </div>
                </div>

                <div className='row mb-6'>
                  <label className='col-lg-4 col-form-label required fw-bold fs-6'>Recipient Amount</label>

                  <div className='col-lg-8 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid'
                      placeholder='0.00$'
                      name='amount'
                    />
                    <small hidden={!this.state.amountError} className="text-danger">Amount is required.</small>
                  </div>
                </div>

                <div className='row mb-6'>
                  <label className='col-lg-4 col-form-label fw-bold fs-6'>
                    <span className='required'>Date of Receipt</span>
                  </label>

                  <div className='col-lg-8 fv-row'>
                    <input
                      type='date'
                      className='form-control form-control-lg form-control-solid'
                      placeholder='DD/MM/YY'
                      name='date'
                    />
                    <small hidden={!this.state.dateError} className="text-danger">Date is required.</small>
                  </div>
                </div>

                <div className='row mb-6'>
                  <label className='col-lg-4 col-form-label fw-bold fs-6'>
                    <span className='required'>Recipient Photo</span>
                  </label>
                  <div className='col-lg-8 fv-row'>
                    <input type="file" name="image"
                      className='form-control form-control-lg form-control-solid'
                      onChange={this.handleFileUpload} />
                    <small hidden={!this.state.photoError} className="text-danger">Please upload photo.</small>
                  </div>
                  <div className='text-center mt-3'>
                    {this.state.previewImage !== null ? <img style={{ width: '300px' }} src={this.state.previewImage} alt="" /> : <div></div>}
                  </div>
                </div>

              </div>
              <div className='card-footer d-flex justify-content-end py-6 px-9'>
                <button type='submit' className='btn btn-primary'>Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}