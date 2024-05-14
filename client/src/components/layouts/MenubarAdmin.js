// MenubarAdmin.js
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // Import CSS file

const MenubarAdmin = () => {
  return (
    <nav className="nav">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/admin/index" className="custom-link">แดชบอร์ด</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/manage-admin" className="custom-link">จัดการผู้ใช้งาน</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/create-category" className="custom-link">เพิ่มหมวดหมู่</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/create-product" className="custom-link">เพิ่มสินค้า</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenubarAdmin;
