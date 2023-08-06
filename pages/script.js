// pages/index.js
import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch'; // หรือใช้ import axios from 'axios'; ถ้าติดตั้ง Axios แทน

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-line-lists');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>รายงานสถานการณ์ COVID-19 ประจำสัปดาห์ แยกตามรายจังหวัด</h1>
      <table>
        <thead>
          <tr>
            <th>ปี</th>
            <th>จำนวนสัปดาห์</th>
            <th>เพศ</th>
            <th>อายุ</th>
            <th>อายุระหว่าง</th>
            <th>อาชีพ</th>
            <th>เสี่ยง</th>
            <th>ประเภทผู้ป่วย</th>
            <th>จังหวัด</th>
            <th>กลุ่มรายงาน</th>
            <th>เขต</th>
            <th>ภูมิภาค</th>
            <th>วันที่และเวลา</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{item.weeknum}</td>
              <td>{item.gender}</td>
              <td>{item.age_number}</td>
              <td>{item.age_range}</td>
                <td>{item.job}</td>
                <td>{item.risk}</td>
                <td>{item.patient_type}</td>
                <td>{item.province}</td>
                <td>{item.reporting_group}</td>
                <td>{item.region_odpc}</td>
                <td>{item.region}</td>
                <td>{item.update_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
