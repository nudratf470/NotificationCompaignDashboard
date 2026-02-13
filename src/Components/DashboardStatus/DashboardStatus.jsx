import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import "./DashboardStatus.css";

const DashboardStatus = ({ selectedId, setSelectedId }) => {
 
  const notifications = [
    {
      id: 1,
      name: "Slot Updated Notification",
      triggerType: "Slot Update",
      channels: "Push Notification, In App",
      createdBy: "Admin",
      createdDate: "24, June 2026",
      status: "active",
    },
    {
      id: 2,
      name: "Appointment Reminder",
      triggerType: "Time Based",
      channels: "Push Notification, In App",
      createdBy: "Marketing Team",
      createdDate: "24, June 2026",
      status: "inactive",
    },
    {
      id: 3,
      name: "Slot Unavailable Alert",
      triggerType: "Slot Unavailable",
      channels: "Push Notification, In App",
      createdBy: "Admin",
      createdDate: "24, June 2026",
      status: "active",
    },
    {
      id: 4,
      name: "Booking Confirmation",
      triggerType: "Appointment Booking",
      channels: "Push Notification",
      createdBy: "Marketing Team",
      createdDate: "24, June 2026",
      status: "active",
    },
    {
      id: 5,
      name: "Slot Updated Notification",
      triggerType: "Slot Update",
      channels: "Push Notification",
      createdBy: "Admin",
      createdDate: "24, June 2026",
      status: "active",
    },
    {
      id: 6,
      name: "Appointment Reminder",
      triggerType: "Time Based",
      channels: "Push Notification, In App",
      createdBy: "Marketing Team",
      createdDate: "24, June 2026",
      status: "active",
    },
    {
      id: 7,
      name: "Slot Unavailable Alert",
      triggerType: "Slot Unavailable",
      channels: "Push Notification, In App",
      createdBy: "Marketing Team",
      createdDate: "24, June 2026",
      status: "inactive",
    },
    {
      id: 8,
      name: "Booking Confirmation",
      triggerType: "Appointment Booking",
      channels: "Push Notification",
      createdBy: "Marketing Team",
      createdDate: "24, June 2026",
      status: "inactive",
    },
  ];

  return (
    <div className="notifications-table-container">
      <Table className="notifications-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Trigger Type</th>
            <th>Channels</th>
            <th>Created By</th>
            <th>Created Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => (
            <tr key={notification.id}>
              <td className="checkbox-cell"
                onClick={() => setSelectedId(notification.id)}
                style={{ cursor: "pointer" }}
              >
                {selectedId === notification.id ? (
                  // Selected state: yellow outline + yellow center
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="14" height="14" rx="7" fill="#EBECF7" />
                    <rect x="0.5" y="0.5" width="13" height="13" rx="6.5" fill="white" stroke="#FFD705" />
                    <rect x="4" y="4" width="6" height="6" rx="3" fill="#FFD705" />
                  </svg>
                ) : (
                  // Default state: grey circle
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    <rect
                      width="14"
                      height="14"
                      rx="7"
                      fill="#EBECF7"
                      stroke="none"
                    />
                  </svg>
                )}
              </td>
              <td className="name-cell">{notification.name}</td>
              <td className="trigger-type-cell">{notification.triggerType}</td>
              <td className="channels-cell">{notification.channels}</td>
              <td className="created-by-cell">{notification.createdBy}</td>
              <td className="created-date-cell">{notification.createdDate}</td>
              <td className="status-cell">
                <span className={`status-badge ${notification.status}`}>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="4"
                      cy="4"
                      r="4"
                      fill={notification.status === "active" ? "#38F238" : "#F2383B"}
                    />
                  </svg>
                  {notification.status === "active" ? "Active" : "In Active"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DashboardStatus;