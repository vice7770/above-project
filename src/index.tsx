import './App.css'
import { FETCH_ALL_EPISODES } from './graphQL/episodes'
import { useQuery, useSubscription } from '@apollo/client'
import Table from './components/Table'
import { ListEpisodesQuery, ListEpisodesQueryVariables } from './types/graphql'
import SearchComponent from './components/Search'
import { useCallback, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { ON_CREATE_EPISODE } from './graphQL/subscriptions'
function Home () {
  const [variableSearch, setVariableSearch] = useState('');
  const [debouncedSearch] = useDebounce(variableSearch, 500);
  const { data, loading, error } = useQuery<ListEpisodesQuery, ListEpisodesQueryVariables>(FETCH_ALL_EPISODES, {
    variables: { search: debouncedSearch},
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setVariableSearch(value); // this crashes the app, why?
  }, [setVariableSearch]);


  // const { data: dataSubscriptionCreate, variables } = useSubscription(
  //   ON_CREATE_EPISODE,
  // );

  if (error) return <p>Error: {error.message}</p>;
    return (
      <div className="flex flex-col w-full h-full overflow-auto rounded-3xl border-4 bg-gray-800">
        <div className="flex justify-end p-4">
          <SearchComponent handleInputChange={handleInputChange} />
        </div>
        <Table data={data?.listEpisodes || []} loading={loading}/>
      </div>
    )
}

export default Home 