import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { db } from '~/db.server';
import { json } from '@remix-run/node';

import { LoaderFunction, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { MovieInfo } from '~/components/MovieInfo';

import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';

export const meta: MetaFunction = () => {
  return [{ title: 'MoviePairs' }, { name: 'description', content: 'MoviePairs' }];
};

export let loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);

  if (url.searchParams.get('a') && url.searchParams.get('b')) {
    let a = parseInt(url.searchParams.get('a'));
    // console.log('a: ', a);
    const b = parseInt(url.searchParams.get('b'));
    // console.log('b: ', b);

    let aName = await prisma.$queryRaw`SELECT name FROM "actors" WHERE "actors"."myId" = ${a}`;
    aName = aName[0].name;

    let bName = await prisma.$queryRaw`SELECT name FROM "actors" WHERE "actors"."myId" = ${b}`;
    bName = bName[0].name;

    const aActorMovies = await prisma.$queryRaw`SELECT movie FROM "assoc" WHERE "assoc"."actor" = ${a}`;
    // console.log("aActorMovies: ", aActorMovies)
    const aActorMoviesNumArray = aActorMovies.map((r) => r.movie);

    const bActorMovies = await prisma.$queryRaw`SELECT movie FROM "assoc" WHERE "assoc"."actor" = ${b}`;
    // console.log("bActorMovies: ", bActorMovies)
    const bActorMoviesNumArray = bActorMovies.map((r) => r.movie);

    let inter = aActorMoviesNumArray.filter((num) => bActorMoviesNumArray.includes(num));

    ////////////////////
    // BEGIN GET LIST OF ACTORS FROM MOVIEID
    const actors = await prisma.$queryRaw`SELECT actor FROM "assoc" WHERE "assoc"."movie" =  112`;
    // console.log('actors: ', actors);

    const actorIdArray = actors.map((r) => r.actor);
    // console.log('actorIdArray: ', actorIdArray);

    const myNames = await prisma.$queryRaw`SELECT name FROM "actors" WHERE "actors"."myId" =  ANY(${actorIdArray})`;
    // console.log('myNames: ', myNames);

    // END GET LIST OF ACTORS FROM MOVIEID
    ////////////////////

    const aMovies = await prisma.$queryRaw`SELECT * FROM "movies" WHERE "movies"."myId" =  ANY(${aActorMoviesNumArray})`;
    const bMovies = await prisma.$queryRaw`SELECT * FROM "movies" WHERE "movies"."myId" =  ANY(${bActorMoviesNumArray})`;

    return json({ aName, bName, aMovies, bMovies, inter });
  } else {
    return redirect('/info');
  }
};

export default function Index() {
  let { aName, bName, aMovies, bMovies, inter } = useLoaderData<typeof loader>();

  let commonMovies = inter.map((num) => aMovies.find((movie) => movie.myId === num));

  let commonMoviesIds = commonMovies.map((movie) => movie.myId);

  // console.log('commonMoviesIds: ', commonMoviesIds);

  let aMoviesFiltered = aMovies.filter((movie) => !commonMoviesIds.includes(movie.myId));
  let bMoviesFiltered = bMovies.filter((movie) => !commonMoviesIds.includes(movie.myId));

  // console.log('commonMovies: ', commonMovies);

  const [expandNum, setExpandNum] = useState(0);

  function expandMe(id) {
    setExpandNum(() => id);
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Welcome to Remix</h1>

      {/* {window.location.pathname} */}

      {/* 
      <h2>Common Movies</h2>
      {commonMovies.map((movie) => (
        <div key={movie.myId}>{movie.name}</div>
      ))}

 */}
      <div className="flex flex-row m-4 gap-x-5 ">
        {/* ALIST BEGIN */}
        <div>
          <h2>{aName}</h2>
          <ul className=" flex flex-col gap-y-4  ">
            {aMovies.map((movie) => (
              // <div className="rounded-lg  p-2  bg-slate-400 w-18  h-fit" key={movie.myId}>
              <div className={`rounded-lg  p-2 w-18  h-fit  ${commonMoviesIds.includes(movie.myId) ? 'bg-green-200' : 'bg-slate-300'} `} key={movie.myId}>
                <button onClick={() => expandMe(movie.myId)}>
                  <li key={movie.myId}>{movie.name}</li>
                </button>

                <MovieInfo myId={movie.myId} myName={movie.name} />

                {parseInt(expandNum) == parseInt(movie.myId) && (
                  <div>
                    Hit
                    <br />
                    <p>{movie.myId}</p>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>
        {/* ALIST END */}

        {/* BLIST BEGIN */}
        <div>
          <h2> {bName}</h2>
          <ul className=" flex flex-col gap-y-4">
            {bMovies.map((movie) => (
              <div className={`rounded-lg  p-2 w-18  h-fit  ${commonMoviesIds.includes(movie.myId) ? 'bg-green-200' : 'bg-slate-300'} `} key={movie.myId}>
                <button onClick={() => expandMe(movie.myId)}>
                  <li key={movie.myId}>{movie.name}</li>
                </button>

                {parseInt(expandNum) == parseInt(movie.myId) && (
                  <div>
                    Hit
                    <br />
                    <p>{movie.myId}</p>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>

        {/* BLIST END */}
      </div>
    </div>
  );
}
