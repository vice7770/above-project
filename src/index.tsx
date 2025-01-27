import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { FETCH_ALL_EPISODES } from './api/episodes'
import { MOCK_EPISODES } from './api/mock'
import { useQuery } from '@apollo/client'
import Table from './components/Table'
function Home () {
  
    // const { data } = useQuery(FETCH_ALL_EPISODES, {
    //   variables: { search: "" }, // Pass an empty string or a search term
    // });
  
    useEffect(() => {
      console.log(MOCK_EPISODES);
    }, []);
  
    return (
      <>
        <Table data={MOCK_EPISODES} />
        
      </>
    )
}

export default Home 