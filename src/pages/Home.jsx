import { useState } from 'react'
import { useFetchSearchRepo } from '../hooks/useSearchRepoData'

export default function Home() {
  const [username, setUsername] = useState('')
  const [repoData, setRepoData] = useState('')
  console.log('repoData: ', repoData)
  console.log('username: ', username)

  const { isFetching, data, isError, error } = useFetchSearchRepo('breeds')
  const handleSubmit = (e) => {
    e.preventDefault()
    setRepoData(data)
    // fetchRepoData()
    setUsername('')
  }
  // console.log('data: ', data);
  // useEffect(() => {

  // }, [])

  // const fetchRepoData = () => {
  //     setRepoData(data)
  // }

  

  return (
    <div className='bg-cyan-900 text-white h-screen flex flex-col pl-2 '>
      {/* <div className="h-fufll"> */}

      <header className='text-4xl py-16 font-mono '>
        <h2>Github repo searcher</h2>
      </header>
      <main className='self-center'>
        <section>
          <form className='space-x-5 ' onSubmit={handleSubmit}>
            <input
              className='px-2 py-2 rounded-full bg-neutral-700  shadow-lg'
              placeholder='username'
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />

            <button
              className='font-bold font-mono px-8 py-2 rounded-full bg-red-400 shadow-lg'
              type='submit'
            >
              Search
            </button>
          </form>
        </section>

        <section className='flex flex-row grow justify-around absolute bottom-0 left-0 right-0'>
          <div className=''>one</div>
          <div className=''>two</div>
          <div className=''>three</div>
        </section>
      </main>
      {/* </div> */}
      {/* {JSON.stringify(data.message, null, 2)} */}
      {/* <div className="">hello</div>
    //   {
        //       <ul>
        
        //       repoData.map((li, idx) => (
            //           <li className="" key={idx}>{li}</li>
            //       ))
            //       </ul>
        //   } */}
    </div>
    // </div>
  )
}
