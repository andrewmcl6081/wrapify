import axios from 'axios'

const getTopArtists = async (time_range) => {
  const url = `http://localhost:3000/api/query/top-artists/${time_range}`
  const jwt = localStorage.getItem('jwt')
  console.log("Here")
  if(!jwt) {
    throw new Error('JWT not found in local storage')
  }

  const config = {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  }

  try {
    const response = await axios.get(url, config)
    console.log(response)
    return response.data
  }
  catch (error) {
    console.log(error)
    throw error
  }
}

export default { getTopArtists }