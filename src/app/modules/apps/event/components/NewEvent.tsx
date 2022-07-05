/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { Component, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewEvent = () => {

  // state = {
  //   selectedFile: null,
  //   previewImage: null,
  //   showImage: false
  // }
  const [file, setFile] = useState();
  const [previewImage, setPreviewImage] = useState('');
  const [showImage, setShowImage] = useState(false)

  const handleFileUpload = (event: any) => {
   setFile(event.target.files[0]);
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
  }

  const notify = () => toast("Event saved successfully.");
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { name, description, startdate, enddate } = e.target;

    const event = {
      name: name.value,
      description: description.value,
      startDate: startdate.value,
      endDate: enddate.value,
      eventImage: ''
    }

    axios.post('http://localhost:8080/addevent', event).then(res => {
      notify();
      e.target.reset();
      setPreviewImage('');
    }).catch(err => console.log(err));
  }

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
            <h3 className='fw-bolder m-0'>New Event</h3>
          </div>
        </div>

        <div id='kt_account_profile_details' className='collapse show'>
          <form onSubmit={handleSubmit} noValidate className='form'>
            <div className='card-body border-top p-9'>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Event Name</label>

                <div className='col-lg-8'>
                  <div className='row'>
                    <div className='col-lg-12 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Event name'
                        name='name'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Description</label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Event Description'
                    name='description'
                  />
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Start Date</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='date'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Start Date'
                    name='startdate'
                  />
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>End Date</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='date'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Company website'
                    name='enddate'
                  />
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Event Image</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input type="file" name="image"
                    className='form-control form-control-lg form-control-solid'
                    onChange={handleFileUpload} />
                </div>
                <div className='text-center mt-3'>
                  {previewImage !== null ? <img style={{ width: '300px' }} src={previewImage} alt="" /> : <div></div>}
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
export default NewEvent;