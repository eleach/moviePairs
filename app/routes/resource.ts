import { json } from '@remix-run/node';

export async function loader({ request }) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  // await new Promise((resolve) => setTimeout(resolve, 5));

  let actList = [
    { name: 'actor1 last', id: 1 },
    { name: 'actor2 last', id: 2 },
    { name: 'actor3 last ', id: 3 },
    { name: 'actor4 last', id: 4 },
    { name: 'actor5 lasttt', id: 5 },
  ];

  // return json({ message: `Hello ${id}` });
  return json({ message: actList });
}
