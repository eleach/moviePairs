import { json } from '@remix-run/node';

export async function loader() {
  await new Promise((resolve) => setTimeout(resolve, 5));
  return json({ message: 'hellooooo' });
}
