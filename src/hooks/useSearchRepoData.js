import axios from 'axios'
import { useQuery } from 'react-query'

const fetchSearchRepo = async (username) =>
  (await axios.get(`https://api.github.com/users/${username}/repos`)).data

export const useFetchSearchRepo = (username) => {
  return useQuery(['repos-', username], () => fetchSearchRepo(username), {
    enabled: false,
    refetchOnWindowFocus: false,
  })
}
