import React, { Component } from 'react';
import Geocode from "react-geocode";

export const getUserData = (token) => {
    return fetch("#", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      }
    }).then((response) => {
      if (response.status !== 200) {
        return Promise.reject({ message: "Unable to get user data" });
      } else { return response.json(); }
    }).catch(error => {
      return error;
    });
  }

export const getAddressInfo = (address) =>{
  let addressInfo;
  Geocode.setApiKey("AIzaSyB1M5WKyFLsjE2dL1tanz1eZ_wb2Cmnvy4");
  addressInfo = Geocode.fromAddress(address).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
      return response;
    },
    error => {
      console.error(error);
    }
  );
  return addressInfo;
}


export const fetchCategories = () => fetch('/category', {
  method: 'GET',
}).then((response) => {
  if (response.status !== 200) {
    return Promise.reject({ message: 'Unable to fetch schools' });
  } return response.json();
}).catch(error => error);
