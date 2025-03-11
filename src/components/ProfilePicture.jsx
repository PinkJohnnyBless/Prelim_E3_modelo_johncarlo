import React from "react";

function ProfilePicture() {
  return (
    <div className="d-flex justify-content-center">
      <img 
        src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t51.75761-15/482371664_18088271878564223_2773740590264526092_n.jpg?stp=dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFNhCfiMOKtdwFIr7j_Z-IinyJn856nSo6fImfznqdKjlMmjx0Pq7ZJJYjUVGkDGCVgN82dUUYT-nHJBfMexYO1&_nc_ohc=hBk3lDS3OMkQ7kNvgFM9CA3&_nc_oc=AdiHcZy45Odqq6UpFkAYMIHF0OVl60UFJT0i1lDLxCbEo8iAm--VU7__tiq5T0e2Tp0&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=AobhIW6LpzoAFTTGqnIgmbH&oh=00_AYFOWl1Zfa_MruXEJ35i0aYAuDUg8QHKy8XTWIZ980j-6Q&oe=67D63C53" 
        alt="Profile" 
        className="rounded-circle border border-primary"
        style={{ width: 100, height: 100, objectFit: "cover" }} 
      />
    </div>
  );
}

export default ProfilePicture;