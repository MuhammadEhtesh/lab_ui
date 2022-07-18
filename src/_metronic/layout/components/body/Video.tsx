import './css/Video.scss'

export const Video = () => {
  return (
    <div className='col-md-12 col-lg-12 mt-4'>
      <div className='mb-md-4 mb-lg-0 head-tite' id='video'>
        <h2 className='text-center'>Mold Problems?</h2>
        <p style={{color: '#e75820'}} className='text-center'>
          <strong>
            Think you have mold? Have a water leak? Wondering what you should do next? Watch the
            following video to learn more!
          </strong>
        </p>
      </div>
      <div className='text-center'>
        <iframe
          width='80%'
          height='500'
          src='https://www.youtube.com/embed/quU9s7I1NLI'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
