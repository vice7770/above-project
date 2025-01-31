import './App.css'
import { FETCH_ALL_EPISODES } from './api/episodes'
import { useQuery } from '@apollo/client'
import Table from './components/Table'
import { ListEpisodesQuery, ListEpisodesQueryVariables } from './types/graphql'
function Home () {
  const { data, loading, error } = useQuery<ListEpisodesQuery, ListEpisodesQueryVariables>(FETCH_ALL_EPISODES, {
    variables: { search: '' },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
    return (
      <>
        <Table data={data} />
        
      </>
    )
}

export default Home 