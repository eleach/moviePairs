import React, { useState } from 'react';
import { Link } from '@remix-run/react';
import { PrefetchPageLinks, useFetcher } from '@remix-run/react';

export function MovieInfo({ myId, myName }) {
  // console.log('myId: ', myId);
  // console.log('myName: ', myName);

  const [actorsArr, setActorsArr] = useState([]);

  const fetcher = useFetcher();

  const [show, setShow] = useState(false);

  function handleClick() {
    if (fetcher.data) {
      console.log('clearing');
      fetcher.data = null;
      setShow(() => false);
      console.log('show: ', show);
    } else {
      fetcher.load('/resource?id=22');
      setShow(() => true);
      console.log('show: ', show);
    }
  }

  return (
    <div>
      <h1>Info</h1>
      myId: {myId}
      <br />
      <PrefetchPageLinks page="/resource" />
      <button type="button" onClick={() => handleClick(22)}>
        Load Data
      </button>
      {fetcher.data && <DisplayData data={fetcher.data.message} />}
      <br />
    </div>
  );
}

//

function DisplayData({ data }) {
  console.log('data: ', data);

  return (
    <div className=" ml-4 mr-0  bg-blue-300 rounded-l-lg  ">
      {data.map((actor) => (
        <Link to="/">
          <div key={actor.id}>{actor.name}</div>
        </Link>
      ))}
    </div>
  );
}
