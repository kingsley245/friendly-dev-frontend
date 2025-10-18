import { Outlet } from 'react-router';

const AboutLayout = () => {
  return (
    <>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default AboutLayout;
