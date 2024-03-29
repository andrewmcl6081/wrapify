import axios from 'axios'

const getTopArtists = async (time_range) => {
  const jwt = localStorage.getItem('jwt')
  
  if(!jwt) {
    throw new Error('JWT not found in local storage')
  }

  const config = {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  }

  try {
    const response = await axios.get(`/api/query/top-artists/${time_range}`, config)
    console.log(response)
    return response.data
  }
  catch (error) {
    console.log(error)
    throw error
  }
}

export default { getTopArtists }