import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SettingOption = () => {
  const [isOpen, setIsOpen] = useState(false);
  const settingRef = useRef(null);

  const toggleSettingOption = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingRef.current && !settingRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="w-4/5 h-16 grid place-items-center rounded-2xl hover:bg-shadow-item-color"
      onClick={toggleSettingOption}
    >
      {/* Button to toggle the Setting Option */}
      <button className="w-4/5 h-16 grid place-items-center rounded-2xl hover:bg-shadow-item-color">
        <FontAwesomeIcon icon={faBars} size="xl" className="text-item-color" />
      </button>

      {/* Setting Option Menu */}
      <div
        ref={settingRef}
        style={{ transformOrigin: "bottom left" }}
        className={`fixed bottom-4 left-2 bg-bg-bd-color text-white p-6 w-60 rounded-xl border-2 transition ease-in-out duration-100 ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      >
        <ul className="text-lg">
          <li className="mb-4">
            <a href="/settings/account">Báo cáo sự cố</a>
          </li>
          <li className="mb-4">
            <a href="/settings/privacy">Cài đặt</a>
          </li>
          <li className="mb-4">
            <a href="/settings/notifications" style={{ color: "red" }}>
              Đăng xuất
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SettingOption;
