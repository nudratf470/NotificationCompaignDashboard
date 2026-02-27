import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import TopBar from '../../Components/TopBar/TopBar';
import SideBar from '../../Components/SideBar/SideBar';
import DashboardStatus from '../../Components/DashboardStatus/DashboardStatus';
import femaleicon from "../../assets/icons/female-icon.svg";
import human from "../../assets/icons/human.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import cube from "../../assets/icons/cube.svg";
import cartyellow from "../../assets/icons/cartyellow.svg";
import docyellow from "../../assets/icons/docyellow.svg";
import envelop from "../../assets/icons/envelop.svg";
import femaleiconwhite from "../../assets/icons/female-iconwhite.svg";
import humanwhite from "../../assets/icons/humanwhite.svg";
import dashboardwhite from "../../assets/icons/dashboardwhite.svg";
import cubewhite from "../../assets/icons/cubewhite.svg";
import cart from "../../assets/icons/cart.svg";
import docwhite from "../../assets/icons/docwhite.svg";
import envelopwhite from "../../assets/icons/envelopwhite.svg";
import { InputGroup, FormControl } from "react-bootstrap";
import Pagination from '../../Components/Pagination/Pagination';
import './ManageStaff.css';

const ManageStaff = () => {
  const campaignIcons = [
    { src: dashboard, activeSrc: dashboardwhite, alt: "dashboard" },
    { src: cube, activeSrc: cubewhite, alt: "cube" },
    { src: cartyellow, activeSrc: cart, alt: "cart" },
    { src: human, activeSrc: humanwhite, alt: "humanwhite" },
    { src: femaleicon, activeSrc: femaleiconwhite, alt: "femaleicon" },
    { src: envelop, activeSrc: envelopwhite, alt: "envelop" },
    { src: docyellow, activeSrc: docwhite, alt: "docwhite" },
  ];

  const navigate = useNavigate();

  // State for selected template ID
  const [selectedId, setSelectedId] = useState(null);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // EXAMPLE DATA - Replace with your actual data
  const allTemplates = [
    { id: 1, name: "Slot Updated Notification", trigger: "Slot Update" },
    { id: 2, name: "Appointment Reminder", trigger: "Time Based" },
    { id: 3, name: "Slot Unavailable Alert", trigger: "Slot Unavailable" },
    { id: 4, name: "Booking Confirmation", trigger: "Appointment Booking" },
    { id: 5, name: "Slot Updated Notification", trigger: "Slot Update" },
    { id: 6, name: "Appointment Reminder", trigger: "Time Based" },
    { id: 7, name: "Slot Unavailable Alert", trigger: "Slot Unavailable" },
    { id: 8, name: "Booking Confirmation", trigger: "Slot Unavailable" },
    { id: 9, name: "Booking Confirmation", trigger: "Appointment Booking" },
    { id: 10, name: "Booking Confirmation", trigger: "Slot Unavailable" },
  ];

  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(allTemplates.length / ITEMS_PER_PAGE);

  // Get current page data
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return allTemplates.slice(startIndex, endIndex);
  };

  const currentTemplates = getCurrentPageData();

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedId(null); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset to page 1 when searching
  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
    setSelectedId(null); 
  };

  return (
    <div className='manageStaff'>
      <Header />
      <TopBar
        icons={campaignIcons}
        heading="Template list"
        headingWeight="400"
        headingSize="16px"
        showSearch={true}
        showAddButton={true}
        showSettingsIcon={true}
      />

      <div className="manageStaff-bodyContainer">
        <div className="manageStaff-sidebar">
          <SideBar icons={campaignIcons} defaultActive={2} />
        </div>

        <div className="search-container">
          <InputGroup className="mobile-search-bar d-flex align-items-center">
            <InputGroup.Text className="search-icon">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.41667 11.0833C8.994 11.0833 11.0833 8.994 11.0833 6.41667C11.0833 3.83934 8.994 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667C1.75 8.994 3.83934 11.0833 6.41667 11.0833Z" stroke="#939393" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.2505 12.25L9.74219 9.7417" stroke="#939393" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </InputGroup.Text>
            <FormControl
              placeholder="Search"
              className="search-input"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </InputGroup>
          <button className="filter">Filter</button>
        </div>

        <div className="manageStaff-dashboard">
          <DashboardStatus
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </div>

        {/* Pagination - ONLY show when NO item is selected */}
        {!selectedId && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>

      {/* Next Button - ONLY show when an item IS selected */}
      {selectedId && (
        <div className="yellow-next-button">
          <button
            className="next-button"
            onClick={() => navigate("/update-appointment")}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageStaff;