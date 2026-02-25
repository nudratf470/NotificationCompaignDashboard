import { useNavigate } from "react-router-dom";
import PerformanceChart from '../Graph/PerformanceChart';
import Cards from '../Cards/Cards';
import './BodyContent.css';
import NotificationPreview from '../NotificationPreview/NotificationPreview';
import AppointmentUpdatedSchedule from '../AppointmentUpdatedSchedule/AppointmentUpdatedSchedule';


const BodyContent = () => {
  const navigate = useNavigate();
  return (
    <>
      <Cards />
      <PerformanceChart />
      <button
        className="floating-plus-btn mobile-only"
        onClick={() => navigate('/manage-staff')}
        aria-label="Create new"
      >
        <svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_474_696)">
            <circle cx="47.5" cy="29.5" r="26.5" fill="url(#paint0_radial_474_696)" />
          </g>
          <path d="M59 29C59 29.9468 58.2325 30.7143 57.2857 30.7143H50.7143C49.6097 30.7143 48.7143 31.6097 48.7143 32.7143V39.2857C48.7143 40.2325 47.9468 41 47 41C46.0532 41 45.2857 40.2325 45.2857 39.2857V32.7143C45.2857 31.6097 44.3903 30.7143 43.2857 30.7143H36.7143C35.7675 30.7143 35 29.9468 35 29C35 28.0532 35.7675 27.2857 36.7143 27.2857H43.2857C44.3903 27.2857 45.2857 26.3903 45.2857 25.2857V18.7143C45.2857 17.7675 46.0532 17 47 17C47.9468 17 48.7143 17.7675 48.7143 18.7143V25.2857C48.7143 26.3903 49.6097 27.2857 50.7143 27.2857H57.2857C58.2325 27.2857 59 28.0532 59 29Z" fill="white" />
          <defs>
            <filter id="filter0_d_474_696" x="0" y="0" width="89" height="89" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-3" dy="15" />
              <feGaussianBlur stdDeviation="9" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_474_696" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_474_696" result="shape" />
            </filter>
            <radialGradient id="paint0_radial_474_696" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(47.5 29.5) rotate(90) scale(26.5)">
              <stop offset="0.895833" stop-color="#FFD705" />
              <stop offset="0.932292" stop-color="white" />
            </radialGradient>
          </defs>
        </svg>

      </button>
      <div className='preview-cards'>
        <div className='NotificationPreview'>
          <h4>Push Notification Preview</h4>
          <NotificationPreview />
        </div>

        <div className='NotificationPreview'>
          <h4>In-App Message Preview</h4>
          <AppointmentUpdatedSchedule />
        </div>
      </div>
    </>
  )
}

export default BodyContent
