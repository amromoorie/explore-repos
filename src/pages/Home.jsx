import { useState } from 'react'
import { useEffect } from 'react'
import { useFetchSearchRepo } from '../hooks/useSearchRepoData'
import { useForm } from "react-hook-form";

export default function Home() {
    const { handleSubmit, register, formState, reset } = useForm();
    console.log('formState: ', formState);



  const [repoUsername, setRepoUsername] = useState('')
//   const [input, setInput] = useState('')
  const [repoData, setRepoData] = useState('')
  console.log('repoUsername: ', repoUsername);
  console.log('repoData: ', repoData);


  const { isFetching, data, isError, error, refetch } = useFetchSearchRepo(repoUsername)
  console.log('error: ', error);
  console.log('isError: ', isError);
console.log('data: ', data);

// if (!isFetching) return <h3>Loading...</h3>



// const onSubmit = (e) => {
//     e.preventDefault()
//     fetchRepoData()
//     setInput('')
// }



const onSubmit = ({username}) => {
   console.log("values::", username)
   setRepoUsername(username)
   //    fetchRepoData(username)
   reset()
   refetch()
}




const fetchRepoData = (username) => {
    setRepoUsername(username)
  }

  

  return (
    <div className='bg-cyan-900 text-white h-screen flex flex-col pl-2 '>
      {/* <div className="h-fufll"> */}

      <header className='text-4xl py-16 font-mono '>
        <h2>Github repo searcher</h2>
      </header>
      <main className='self-center'>
        <section>
          <form className='space-x-5 ' onSubmit={handleSubmit(onSubmit)}>
            {/* <input
              className='px-2 py-2 rounded-full bg-neutral-700  shadow-lg'
              placeholder='username'
              onChange={(e) => setInput(e.target.value)}
              value={input}
            /> */}

<input
              className='px-2 py-2 rounded-full bg-neutral-700  shadow-lg'
              placeholder='username'
              type='text'
              {...register('username', {
                  pattern: {
                      value: /[a-z0-9\W|_]/ig,
                      message: "username cannot be submitted empty"
                  }
              })}
            />

            <button
              className='font-bold font-mono px-8 py-2 rounded-full bg-red-400 shadow-lg'
              type='submit'
            >
              Search
            </button>
          </form>
        </section>

        <section>
        {Array.isArray(repoData) &&
              repoData.map((repo, idx) => (
                <>
                  <li key={idx} className='text-primary pt-3'>
                    <h2 className='text-secondary'>{repo.name}</h2>
                  </li>
                
                </>
              ))}
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
