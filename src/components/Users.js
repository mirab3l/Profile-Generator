import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaMapMarked } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";



import axios from "axios";
import "./Users.css";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [currentpage, setCurrentPage] = useState(1)

// page numbers
  const pageNumbers = [1, 2, 3, 4, 5]

  useEffect(() => {
    ////function
    setLoading(true);
    axios
      .get(`https://randomuser.me/api/?page=${currentpage}&results=10`)
      .then((res) => {
        console.log(res.data.results);
        setUserData(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        setActiveUser(true);
      });
  }, [currentpage]);

  return (
    <div>
      <div className="nav">
        <div className="top">

        <Link to="/" className="back-arrow">
          <FaArrowLeft />
        </Link>
        <h1>List of users</h1>
        </div>
        <div className="profile">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div className="users">
              {userData.map((user) => {
                return (
                  <div key={user.email} className="info">
                    <img src={user.picture.medium} alt="users face" />
                    <div>
                    <h4 className="details"> <FaUser className="icons"/>{ ` ${user.name.title} ${user.name.first} ${user.name.last}`}</h4>
                    <h4 className="details"><FaEnvelope  className="icons"/>{`${user.email}`}</h4>
                    <h4 className="details"><FaCalendar className="icons" />{` ${user.dob.date.slice(0,10)}`}</h4>
                    <h4 className="details"><FaMapMarked  className="icons"/>{`${user.location.street.number} ${user.location.street.name}`}</h4>
                    <h4 className="details"><FaPhone  className="icons"/>{`${user.phone}`}</h4>
                    <hr />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
<div className="pages">

        <button onClick={()=>{setCurrentPage(currentpage-1)}} disabled={currentpage === 1} className="pagination">Previous</button>
        {
pageNumbers.map((number) => (
<button value={number} onClick={(e) => {setCurrentPage(e.target.value)}} disabled={currentpage === number} className="pagination">{number}</button>
))
}
        <button onClick={()=>{setCurrentPage(currentpage+1)}} className="pagination">Next</button>
</div>


      </div>
    </div>
  );
};

export default Users;
