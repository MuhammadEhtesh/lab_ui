import axios from 'axios';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewCampaign = () => {

  const [file, setFile] = useState();
  const [previewImage, setPreviewImage] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [tags, setTags] = useState([]);

  const handleFileUpload = (event: any) => {
    setFile(event.target.files[0]);
    setPreviewImage(URL.createObjectURL(event.target.files[0]))
  }

  const notify = () => toast("Campaign saved successfully.");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { title, description, startdate, enddate, tenantid, campaigntype, tags, coupon } = e.target;
      const campaign = {
      name: title.value,
      description: description.value,
      startDate: startdate.value,
      endDate: enddate.value,
      dealImage: '',
      tenant: tenantid.value,
      tags: tags.value,
      campaignType: campaigntype.value,
      campaignStatus: 'Pending',
      coupon: coupon.value
    }

      axios.post('http://localhost:8080/addCampaign', campaign).then(res => {
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
            <h3 className='fw-bolder m-0'>New Campaign</h3>
          </div>
        </div>

        <div id='kt_account_profile_details' className='collapse show'>
          <form onSubmit={handleSubmit} noValidate className='form'>
            <div className='card-body border-top p-9'>
              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Title</label>

                <div className='col-lg-8'>
                  <div className='row'>
                    <div className='col-lg-12 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Campaign title'
                        name='title'
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
                    placeholder='Campaign Description'
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
                  <span className='required'>Tenant</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <select name='tenantid'
                    className='form-select form-select-solid form-select-lg fw-bold'
                  >
                    <option value=''>Select a Tenant...</option>
                    <option value='AF'>Tenant 1</option>
                    <option value='AX'>Tenant 2</option>
                    <option value='AX'>Tenant 3</option>
                  </select>
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Campaign Type</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <select name='campaigntype'
                    className='form-select form-select-solid form-select-lg fw-bold'
                  >
                    <option value=''>Select a campaign type...</option>
                    <option value='AF'>Campaign 1</option>
                    <option value='AX'>Campaign 2</option>
                    <option value='AX'>Campaign 3</option>
                  </select>
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Add Tags</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input type="text" name='tags' className='form-control form-control-lg form-control-solid' data-role="taginput" data-tag-trigger="Space,Enter" placeholder='Tags' />
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Coupon</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input type="text" name='coupon' className='form-control form-control-lg form-control-solid' placeholder='Coupon' />
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Campaign Image</span>
                </label>
                <div className='col-lg-8 fv-row'>
                  <input type="file" name="image"
                    className='form-control form-control-lg form-control-solid'
                    onChange={handleFileUpload} 
                    />
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

export default NewCampaign;