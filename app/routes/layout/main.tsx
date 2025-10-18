import { Outlet } from 'react-router';
import type { Route } from '../about/+types';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The friendly dev project' },
    {
      name: 'description',
      content: 'Welcome to React Router! for a custom website development',
    },
  ];
}
const MainLayout = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6  my-8">
        <Outlet />
      </section>
    </>
  );
};

export default MainLayout;
