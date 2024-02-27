import type { LoaderFunctionArgs } from '@remix-run/node'; // or cloudflare/deno
import { json } from '@remix-run/node'; // or cloudflare/deno

export async function loader({ params }: LoaderFunctionArgs) {
  let arr = ['one', 'two', 'three'];

  return json({ arr }, 200);
}
