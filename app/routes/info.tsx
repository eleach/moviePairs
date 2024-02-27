import { NavLink } from '@remix-run/react';

export default function info() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Info</h1>
      This is good stuff
      <div>
        <NavLink to="/?a=27&b=110">
          <p className="  border-red-600 border-4  text-3xl font bold m-3  ">go back to actors</p>
        </NavLink>
      </div>
    </div>
  );
}
