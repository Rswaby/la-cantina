/** @format */
import Geocode from 'react-geocode'

export const getUserData = token => {
  return fetch('#', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
    .then(response => {
      if (response.status !== 200) {
        return Promise.reject({message: 'Unable to get user data'})
      } else {
        return response.json()
      }
    })
    .catch(error => {
      return error
    })
}

export const getAddressInfo = address => {
  let addressInfo
  Geocode.setApiKey('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  addressInfo = Geocode.fromAddress(address).then(
    response => {
      const {lat, lng} = response.results[0].geometry.location
      console.log(lat, lng)
      return response
    },
    error => {
      console.error(error)
    },
  )
  return addressInfo
}

export const getEvents = eventId => {
  return fetch(`/event/${eventId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (response.status !== 200) {
        return Promise.reject({message: 'Unable to get user data'})
      } else {
        return response.json()
      }
    })
    .then(error => {
      return error
    })
}
