"use client";
import React from "react";
import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="Accept Cookies 🍪"
        cookieName="yourCookieName"
        style={{
          background: "#1E2A33", // Darker background
          color: "#F1F1F1", // Lighter text color for contrast
          fontSize: "16px", // Slightly larger font for better readability
          padding: "15px 30px", // More padding for a larger banner
          position: "fixed",
          left: "0",
          right: "0",
          bottom: "0",
          zIndex: "9999",
          textAlign: "center", // Center the content
        }}
        buttonStyle={{
          background: "#FF7F50", // Button with a new color
          color: "#fff",
          fontSize: "16px",
          padding: "12px 25px",
          borderRadius: "8px", // Rounder button edges
          border: "none",
          cursor: "pointer",
        }}
        expires={150}
      >
        We use cookies to ensure you get the best experience on our website.
      </CookieConsent>

      <style jsx>{`
        /* Media Queries for Small Screens */
        @media (max-width: 600px) {
          .cookieConsent {
            font-size: 14px !important;
            padding: 12px 20px !important;
          }

          .cookieConsent button {
            font-size: 14px !important;
            padding: 10px 20px !important;
          }
        }

        @media (max-width: 400px) {
          .cookieConsent {
            font-size: 13px !important;
            padding: 10px 18px !important;
          }

          .cookieConsent button {
            font-size: 13px !important;
            padding: 8px 18px !important;
          }
        }
      `}</style>
    </div>
  );
}
