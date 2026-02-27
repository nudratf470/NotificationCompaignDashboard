import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Chelsford from "../../assets/icons/Chelsford.svg";
import "./MobileTopBar.css";

const MoonIcon = () => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
    <path d="M23.3408 16.5898C22.8773 17.6882 22.2613 18.706 21.5176 19.6152C20.565 19.9665 19.5355 20.1591 18.4609 20.1592C16.5542 20.1592 14.7896 19.5533 13.3457 18.5264C13.8918 17.943 14.3658 17.2922 14.7588 16.5898H23.3408ZM18.4609 2.48438C19.1048 2.48441 19.7322 2.55478 20.3369 2.68555C21.6415 3.89193 22.6857 5.37717 23.376 7.04688H14.8018C14.2822 6.09779 13.614 5.2419 12.8242 4.51465C14.354 3.24659 16.3187 2.48438 18.4609 2.48438Z" fill="url(#moon_grad)" />
    <path d="M18.2994 3.14976C19.011 3.14976 19.7022 3.23813 20.3628 3.40459C17.615 0.731709 13.6425 -0.579336 9.60899 0.24411C8.27425 0.516596 7.03671 1.00161 5.92426 1.65683C6.119 1.63395 6.32263 1.61658 6.53161 1.60412C7.4656 1.54845 8.53245 1.58941 9.44367 1.68876C10.2557 1.77731 11.4646 1.98079 12.5518 2.32212C13.0951 2.4927 13.6178 2.7007 14.0481 2.95165C14.448 3.18492 14.796 3.47131 14.9903 3.82507C16.007 3.39027 17.1253 3.14976 18.2994 3.14976Z" fill="#FFE24D" />
    <path d="M14.481 4.06337C14.3527 3.85087 14.1129 3.63931 13.7667 3.43735C13.3858 3.21521 12.9061 3.02204 12.3845 2.85828C11.3419 2.53096 10.171 2.33318 9.38316 2.24728C8.49764 2.15072 7.46255 2.11143 6.56482 2.16494C6.11575 2.1917 5.70755 2.24133 5.37265 2.31623C5.03015 2.39284 4.79517 2.48938 4.66625 2.59057L4.62735 2.54069C2.89343 3.89758 1.56517 5.70912 0.785569 7.75855C1.12536 7.66275 1.52964 7.60047 1.97517 7.56615C2.86908 7.49728 3.95775 7.53888 5.08547 7.66812C6.21431 7.7975 7.37336 8.02123 8.33663 8.33257C8.81819 8.48822 9.25735 8.66783 9.6216 8.8723C9.82611 8.9871 10.0131 9.11309 10.1721 9.25167C10.8423 6.98503 12.4203 5.11277 14.481 4.06337Z" fill="#FFD705" />
    <path d="M10.0091 9.89321C9.88096 9.71815 9.6612 9.53829 9.34818 9.36258C9.02635 9.18192 8.6242 9.01575 8.16492 8.86731C7.24651 8.57047 6.1257 8.3528 5.02192 8.2263C3.91702 8.09966 2.86583 8.06099 2.01804 8.1263C1.59395 8.15897 1.22791 8.21715 0.93469 8.30007C0.779361 8.344 0.651067 8.39305 0.547854 8.44498C-0.0401288 10.3241 -0.175833 12.3748 0.243311 14.4414C0.322451 14.8316 0.419577 15.2135 0.533646 15.5865C0.556814 15.5952 0.582749 15.6046 0.611509 15.6146C0.779039 15.6725 1.04274 15.7492 1.41402 15.8169C2.15645 15.9524 3.33065 16.0523 5.02776 15.8939C6.74438 15.7337 7.96165 15.5449 8.81412 15.2922C9.59644 15.0603 10.033 14.7856 10.275 14.4668C9.98001 13.5982 9.81992 12.6665 9.81992 11.6972C9.81992 11.0783 9.88517 10.4748 10.0091 9.89321Z" fill="#F5BF00" />
    <path d="M10.4985 15.0532C10.1477 15.3832 9.64498 15.6317 8.97278 15.831C8.06536 16.1 6.80279 16.2924 5.07963 16.4533C3.33696 16.6159 2.11131 16.5151 1.31385 16.3697C1.09664 16.3301 0.911311 16.2871 0.756074 16.2454C1.70626 18.8132 3.47768 20.9087 5.69793 22.2846C7.17179 22.4251 8.40206 21.9641 9.89373 21.2567C11.4788 20.5051 12.6228 19.6411 13.1825 18.5135C12.014 17.6208 11.0822 16.4299 10.4985 15.0532Z" fill="#CB9200" />
    <path d="M13.6439 18.8422C12.9876 20.0997 11.7218 21.0112 10.133 21.7646C8.96338 22.3193 7.89576 22.7535 6.71929 22.851C9.01688 23.9831 11.6918 24.3895 14.3942 23.8378C17.1916 23.2667 19.5621 21.7621 21.2488 19.7133C20.3302 20.0569 19.3365 20.2446 18.2994 20.2446C16.58 20.2446 14.9802 19.7288 13.6439 18.8422Z" fill="#9C5E00" />
    <defs>
      <linearGradient id="moon_grad" x1="18.1001" y1="2.48437" x2="18.1001" y2="20.1592" gradientUnits="userSpaceOnUse">
        <stop stopColor="#916800" />
        <stop offset="0.295918" stopColor="#FFE871" />
        <stop offset="0.766766" stopColor="#FFD600" />
        <stop offset="1" stopColor="#B37600" />
      </linearGradient>
    </defs>
  </svg>
);

// ─── Mobile Nav Drawer 
const MobileNavDrawer = ({ icons = [], open, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="mobile-nav-backdrop" onClick={onClose} />

      {/* Drawer */}
      <div className="mobile-nav-drawer">
        <nav className="mobile-nav-list">
          {icons.map((item, index) => {
            if (item.type === "divider") {
              return (
                <div key={index} className="mobile-nav-divider">
                  <svg width="100%" height="2" viewBox="0 0 160 2" fill="none">
                    <path d="M0 1H160" stroke="#BFBFBF" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              );
            }

            if (item.group) {
              return (
                <div key={index} className="mobile-nav-group">
                  {item.group.map((icon, subIndex) => (
                    <button key={subIndex} className="mobile-nav-item" onClick={onClose}>
                      <div className="mobile-nav-icon-wrap">
                        <img src={icon.src} alt={icon.alt || ""} />
                      </div>
                      <span>{icon.label || icon.alt}</span>
                    </button>
                  ))}
                </div>
              );
            }

            const isActive = activeIndex === index;
            return (
              <button
                key={index}
                className={`mobile-nav-item ${isActive ? "active" : ""}`}
                onClick={() => {
                  setActiveIndex(index);
                  if (item.path) navigate(item.path);
                  onClose();
                }}
              >
                <div className="mobile-nav-icon-wrap">
                  <img
                    src={isActive && item.activeSrc ? item.activeSrc : item.src}
                    alt={item.alt || ""}
                  />
                </div>
                <span>{item.label || item.alt}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

// ─── Dashboard Bar 
const MobileDashboardBar = ({ icons, navOpen, setNavOpen }) => {
const today = new Date();

const day = today.toLocaleDateString("en-GB", { day: "2-digit" });
const month = today.toLocaleDateString("en-GB", { month: "short" });
const year = today.toLocaleDateString("en-GB", { year: "numeric" });

const monthYear = `${month}, ${year}`;

  return (
    <>
      <div className="mobile-topbar">
        <button className="moonicon" onClick={() => setNavOpen(prev => !prev)}>
          <MoonIcon />
        </button>

        <span className="mobile-date">
          <span style={{ fontWeight: 700 }}>{day}</span> {monthYear}
        </span>

        <div className="mobile-right-group">
          <div className="mobile-bell-wrapper">
            <svg width="19" height="22" viewBox="0 0 19 22" fill="none">
              <path d="M13.0941 17.9788C12.6057 20.0356 10.8919 20.9526 9.48033 20.9594C8.04531 20.9668 6.31922 20.0467 5.82094 17.9788C5.7457 17.9788 5.66307 17.9788 5.58043 17.9788C4.27245 17.9788 2.96447 17.98 1.65649 17.9782C1.03549 17.9776 0.575443 17.6923 0.307186 17.136C0.0426299 16.5878 0.122182 16.0619 0.47554 15.5662C0.931885 14.9258 1.37898 14.2786 1.82361 13.6295C2.01231 13.3535 2.07213 13.0373 2.07151 12.7051C2.06966 10.9496 2.06596 9.19418 2.07213 7.43874C2.08261 4.55529 3.94746 1.80055 6.61029 0.721423C9.52226 -0.459182 12.7087 0.216511 14.8436 2.49666C16.1504 3.8926 16.8262 5.56636 16.8435 7.48824C16.8589 9.21274 16.8503 10.9372 16.8447 12.6617C16.8435 13.0794 16.9533 13.4476 17.1975 13.7873C17.6341 14.3949 18.0596 15.01 18.4833 15.6269C18.8169 16.1126 18.8631 16.6361 18.5992 17.1614C18.3309 17.6948 17.8826 17.9763 17.2807 17.9782C15.9728 17.9825 14.6648 17.9794 13.3568 17.9794C13.2729 17.9788 13.1891 17.9788 13.0941 17.9788ZM17.2517 16.4826C16.8016 15.8298 16.3748 15.2067 15.9425 14.5873C15.5559 14.0329 15.3629 13.4253 15.3666 12.7434C15.3758 11.0808 15.3746 9.41817 15.3659 7.75555C15.3641 7.38614 15.3363 7.01365 15.2821 6.64796C14.6981 2.72065 10.372 0.458447 6.84401 2.26895C4.68933 3.37469 3.59965 5.20562 3.55402 7.63303C3.52195 9.34887 3.54847 11.0666 3.54662 12.783C3.54662 12.9371 3.53983 13.0924 3.51948 13.2446C3.45226 13.7446 3.25308 14.1901 2.9657 14.6016C2.53464 15.2185 2.10975 15.8397 1.66697 16.482C6.87176 16.4826 12.0439 16.4826 17.2517 16.4826ZM11.5055 17.9912C10.1402 17.9912 8.77669 17.9912 7.40951 17.9912C7.62782 18.8129 8.55839 19.4725 9.47354 19.4632C10.3905 19.4545 11.3187 18.7844 11.5055 17.9912Z" fill="#232323" stroke="#232323" strokeWidth="0.3" />
            </svg>
            <span className="mobile-bell-badge">6</span>
          </div>
          <div className="mobile-avatar">
            <img src={Chelsford} alt="Avatar" />
          </div>
        </div>
      </div>

      <MobileNavDrawer icons={icons} open={navOpen} onClose={() => setNavOpen(false)} />
    </>
  );
};

// ─── List Bar ────────────────────────────────────────────────────────────────
const MobileListBar = ({ MobileHeading = "Template list", icons, navOpen, setNavOpen }) => {
  return (
    <>
      <div className="mobile-topbar">
        <div className="mobile-left-group">
          <button className="moonicon" onClick={() => setNavOpen(prev => !prev)}>
            <MoonIcon />
          </button>
          <h3 className="mobile-title">{MobileHeading}</h3>
        </div>
        <div className="mobile-settings-icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8.14276 1.33398H7.84943C7.49581 1.33398 7.15667 1.47446 6.90662 1.72451C6.65657 1.97456 6.51609 2.3137 6.51609 2.66732V2.78732C6.51586 3.02113 6.45413 3.25078 6.33712 3.45321C6.22011 3.65564 6.05192 3.82374 5.84943 3.94065L5.56276 4.10732C5.36007 4.22434 5.13014 4.28595 4.8961 4.28595C4.66205 4.28595 4.43212 4.22434 4.22943 4.10732L4.12943 4.05398C3.82347 3.87749 3.45999 3.82961 3.11876 3.92086C2.77754 4.0121 2.48646 4.23501 2.30943 4.54065L2.16276 4.79398C1.98627 5.09994 1.93839 5.46343 2.02963 5.80465C2.12088 6.14587 2.34379 6.43695 2.64943 6.61398L2.74943 6.68065C2.95095 6.79699 3.11851 6.96404 3.23546 7.1652C3.35242 7.36637 3.41469 7.59463 3.4161 7.82732V8.16732C3.41703 8.40226 3.35586 8.63329 3.23879 8.83699C3.12172 9.04069 2.9529 9.20984 2.74943 9.32732L2.64943 9.38732C2.34379 9.56435 2.12088 9.85543 2.02963 10.1967C1.93839 10.5379 1.98627 10.9014 2.16276 11.2073L2.30943 11.4607C2.48646 11.7663 2.77754 11.9892 3.11876 12.0804C3.45999 12.1717 3.82347 12.1238 4.12943 11.9473L4.22943 11.894C4.43212 11.777 4.66205 11.7154 4.8961 11.7154C5.13014 11.7154 5.36007 11.777 5.56276 11.894L5.84943 12.0607C6.05192 12.1776 6.22011 12.3457 6.33712 12.5481C6.45413 12.7505 6.51586 12.9802 6.51609 13.214V13.334C6.51609 13.6876 6.65657 14.0267 6.90662 14.2768C7.15667 14.5268 7.49581 14.6673 7.84943 14.6673H8.14276C8.49638 14.6673 8.83552 14.5268 9.08557 14.2768C9.33562 14.0267 9.4761 13.6876 9.4761 13.334V13.214C9.47634 12.9802 9.53806 12.7505 9.65507 12.5481C9.77208 12.3457 9.94027 12.1776 10.1428 12.0607L10.4294 11.894C10.6321 11.777 10.862 11.7154 11.0961 11.7154C11.3301 11.7154 11.5601 11.777 11.7628 11.894L11.8628 11.9473C12.1687 12.1238 12.5322 12.1717 12.8734 12.0804C13.2147 11.9892 13.5057 11.7663 13.6828 11.4607L13.8294 11.2006C14.0059 10.8947 14.0538 10.5312 13.9626 10.19C13.8713 9.84876 13.6484 9.55768 13.3428 9.38065L13.2428 9.32732C13.0393 9.20984 12.8705 9.04069 12.7534 8.83699C12.6363 8.63329 12.5752 8.40226 12.5761 8.16732V7.83398C12.5752 7.59904 12.6363 7.36802 12.7534 7.16431C12.8705 6.96061 13.0393 6.79146 13.2428 6.67398L13.3428 6.61398C13.6484 6.43695 13.8713 6.14587 13.9626 5.80465C14.0538 5.46343 14.0059 5.09994 13.8294 4.79398L13.6828 4.54065C13.5057 4.23501 13.2147 4.0121 12.8734 3.92086C12.5322 3.82961 12.1687 3.87749 11.8628 4.05398L11.7628 4.10732C11.5601 4.22434 11.3301 4.28595 11.0961 4.28595C10.862 4.28595 10.6321 4.22434 10.4294 4.10732L10.1428 3.94065C9.94027 3.82374 9.77208 3.65564 9.65507 3.45321C9.53806 3.25078 9.47634 3.02113 9.4761 2.78732V2.66732C9.4761 2.3137 9.33562 1.97456 9.08557 1.72451C8.83552 1.47446 8.49638 1.33398 8.14276 1.33398Z" stroke="#404145" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#404145" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <MobileNavDrawer icons={icons} open={navOpen} onClose={() => setNavOpen(false)} />
    </>
  );
};

// ─── Editor Bar (no nav drawer needed) ──────────────────────────────────────
const MobileEditorBar = ({ title, backPath }) => {
  const navigate = useNavigate();
  return (
    <div className="mobile-topbar">
      <div className="mobile-left-group icon-heading">
        <button
          className="mobile-back-btn"
          onClick={() => backPath ? navigate(backPath) : navigate(-1)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11.25 13.5L6.75 9L11.25 4.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h3 className="mobile-title">{title}</h3>
      </div>
    </div>
  );
};

// ─── Main Export ─────────────────────────────────────────────────────────────
const MobileTopBar = ({ icons = [] }) => {
  const path = window.location.pathname;
  const [navOpen, setNavOpen] = useState(false);

  if (path === "/onboarding")
    return <MobileDashboardBar icons={icons} navOpen={navOpen} setNavOpen={setNavOpen} />;

  if (path === "/manage-staff")
    return <MobileListBar heading="Manage Staff" icons={icons} navOpen={navOpen} setNavOpen={setNavOpen} />;

  if (path === "/update-appointment")
    return <MobileEditorBar title="Update Appointment" backPath="/manage-staff" />;

  if (path === "/slot-notification")
    return <MobileEditorBar title="Slot Notification" backPath="/manage-staff" />;

  if (path === "/slot-updated")
    return <MobileEditorBar title="Slot Updated Appointment" backPath="/manage-staff" />;

  return null;
};

export default MobileTopBar;