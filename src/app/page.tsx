import { redirect } from 'next/navigation';

export default function Home() {
  // The polished static portfolio lives in /public/portfolio/.
  // Redirect the root route there so the live preview shows the polished site,
  // and the user can download the /portfolio folder as a standalone static site.
  redirect('/portfolio/index.html');
}
