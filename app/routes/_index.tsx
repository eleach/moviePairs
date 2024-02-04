
import { PrismaClient } from "@prisma/client";
const prisma =  new PrismaClient();
import { db } from "~/db.server";
import { json } from "@remix-run/node";

import { LoaderFunction } from "@remix-run/node";
import {  useLoaderData } from "@remix-run/react";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export let loader: LoaderFunction = async () => {


  // const movies = await prisma.$queryRaw`SELECT * FROM assoc WHERE actor = 53`
  // const movies = await prisma.$queryRaw`SELECT * FROM "assoc" where assoc.actor = 27`
  // const movies = await prisma.$queryRaw`SELECT * FROM "assoc" where "assoc"."actor" = 27`

  // WORKS
  // const movies = await prisma.$queryRaw`SELECT * FROM "assoc" JOIN "movies" ON "assoc"."movie" = "movies"."myId" WHERE "assoc"."actor" = 27`

  const actors = await prisma.$queryRaw`SELECT * FROM actors`
  const movies = await prisma.$queryRaw`SELECT * FROM movies`
  const assoc = await prisma.$queryRaw`SELECT * FROM assoc`

  // use variable example
  // const result = await prisma.$queryRaw`SELECT * FROM User WHERE email = ${email}`

  return json({ movies, actors, assoc } );

} 


export default function Index() {


  console.log("")

  console.log(">>>>>")
  console.log(">>>>>")
  console.log(">>>>>")


  // let movies = useLoaderData();
  let { movies, actors, assoc } = useLoaderData();

  // console.log("m: ", movies.length)
  // console.log("ac: ", actors.length)
  // console.log("as: ", assoc.length)

  let stewartMovies = assoc.filter((ass) => ass.actor === 27)
  let stewartMovieNumsOnly = stewartMovies.map((r) => r.movie)

  let hepburnMovies = assoc.filter((ass) => ass.actor === 110)
  let hepburnMoviesNumsOnly = hepburnMovies.map((movie) => movie.movie)

  let intersection = hepburnMoviesNumsOnly.filter((num) => stewartMovieNumsOnly.includes(num)) 

  let results = movies.filter((m) => intersection.includes(m.myId))


  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <pre>
      {

        // JSON.stringify(movies, null, 2)
        // JSON.stringify(intersection, null, 2)
        JSON.stringify(results, null, 2)
}
</pre>


      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
