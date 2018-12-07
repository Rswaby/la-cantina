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
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
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

export const fetchCategories = () =>
  fetch('/category', {
    method: 'GET',
  })
    .then(response => {
      if (response.status !== 200) {
        return Promise.reject({message: 'Unable to fetch categories'})
      }
      return response.json()
    })
    .catch(error => error)

// fetch all neighborhoods
export const fetchNeighborhoods = () =>
  fetch('/neighborhood', { method: 'GET' })
    .then((response) => {
      if (response.status !== 200) {
        return Promise.reject({ message: 'Unable to fetch neighborhoods' });
      }
      return response.json();
    })
    .catch(error => error);

export const fetchEventByEntityId = (entity, entityId) =>
  fetch(`/${entity}/${entityId}/event`, {
    method: 'GET',
  })
    .then(response => {
      if (response.status !== 200) {
        return Promise.reject({message: 'Unable to fetch events'})
      }
      return response.json()
    })
    .catch(error => error)

export const fetchAllEvents = () =>
  fetch('/event', {
    method: 'GET',
  })
    .then(response => {
      if (response.status !== 200) {
        return Promise.reject({message: 'Unable to fetch events'})
      }
      return response.json()
    })
    .catch(error => error)

export const fetchNeighborhoodByName = name =>
  fetch(`/neighborhood/${name}`, {
    method: 'GET',
  })
    .then(response => {
      if (response.status !== 200) {
        return Promise.reject({message: 'Unable to fetch neighborhood by name'})
      }
      return response.json()
    })
    .catch(error => error)

export const createEvent = event =>
  fetch('/event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
    credentials: 'include',
  }).then(response => {
    if (response.status === 200) {
      return response.json()
    }
    if (response.status === 400) {
      return Promise.reject({message: 'wrong format for creating event'})
    }
    return Promise.reject({message: 'Unable to create event'})
  })
