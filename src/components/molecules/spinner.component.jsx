import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import './criteria.css';

const LoadingSpinerComponent = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <div>
      {promiseInProgress === true ? (
        <div>
          <div className="overlay">
            <div className="loader">
              <img src="data:image/gif;base64,R0lGODlhWQBkAPABAP27L////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFFAABACwAAAAAWQBkAAAC/4yPqcvtD6OctNqLG9gc5A9O3RiWJjKm5/qlLgtXrhrX0EzaOoN3+5/ocYDEgHBTBB49yd2y6TxCdc9prWqFYbOrLdfk/YbCYpCwzDqjT+ppDtxjv3mvUttcX8TH+1Y/+IdxdyGlsMQkGCgTdohoMSjSaNjoGIlDSDmZuXjJKQlIWXmj6BA6BGpK0SlheooaqkoT0eqq1/pDK0qXenXr+dnlmwgLR8wHfHyopWyHHFOYTNo7I7eaRF0sazXX7LP2DR4uPk5ebn6Onq6+zt7u/p7FHS2G3a1dJI1pHZX/CD0NKYOzbP/wDBy2yd5BS8YILiwlLA0tVhOpVNwVcVQtjXgZDeT6hSRWx4sU85Rs6BHlSXmzVKpc6c3fwIctTYJUxExgPYSkCuq793Nfyp1+bOokisLoUaBLY2LUVZRpU6hK+r0LCG8o0qxalXLFmhUsPLFXrboje9ZsO7Rr1a4jM9ZnWLlx2aqDW3crVyN69/Jl6Tew4MEHCgAAIfkEBRQAAAAsOQAXAB0AFQAAAjeEj5nBrQ9BmyFaiu3DWSPOeRIYaiRonuWmomy7HjCpzLFsT29e7faVS81EQ5FBZfy4kkodE1EAACH5BAUUAAAALDoAOAAcABUAAAI3RH6gy+2GYniUyVvp3bnt3ynf2I1mZp5aSq4s97ytI8N0HaH4pNchHhK9gsIUcaE6FiVKD1NRAAAh+QQFFAAAACwmAEIADQAfAAACMYQRmcfqjNw7cpqqGg4a9/pJoRV517aU24myq2qiqczBoC3iE+169A8MCnWZHgl3KAAAIfkEBRQAAAAsAwA4ABwAFQAAAjeEj6kQ3QuVmyFGSq3EWRvOeSB4jeNimlsaJuyJvPAht249QfhT1povenloqSGRZIzZkkce01AAACH5BAUUAAAALAMAFwAcABUAAAI3hINoy+2X4pss2kDptdnt3S0fGI5fZ55aSj7sOL2qK3NrnWR4ru9YXwsBgkKIqViBIZOXpUdSAAAh+QQFFAAAACwmAAIADQAgAAACJ4SDGcbq7V6ctNqLs968+w8C12GRlUmhkxqxj1jCp5zSq926COMyBQAh+QQFFAABACw5ABcAHQAVAAACN4yPmcCtD0ObIFqK7cNZI855EhhqJGie5aaibLseMKnMsWxPb17t9pVLzURDkUFl/LiSSh0TUQAAIfkEBRQAAQAsOgA4ABwAFQAAAjcMfqHL7YYieJTJW+ndue3fKd/YjWZmnlpKriz3vK0jw3Qdofik1yEeEr2CwhRxoToWJUoPU1EAACH5BAUUAAEALCYAQgANAB8AAAIxjAOZx+qM3DtymqoaBhr3+kmhFXnXtpTbibKraqKpzMGgLeIT7Xr0DwwKdZkeCXcoAAAh+QQJFAABACwDACoAHAAjAAACQYyPqcvtD6OctNqLs968+w8ywDhm5AlYKEqtq+S6UBw39L3ceKLTSu9DAIOHoexnPImSKVvyYYwMJ70W0frCsC4FACH5BAUUAAEALAMAFwAcADYAAAJsjIFoy+2X4pssWkDptdnt3S0fGI5fZ55aSj7sOL2qK3NrnWR4ru9YXwsFgkKIqViBIZO2ZaPpjEqn1Kr1is1qt9yuFuqcIY/jVFFWItJ2a/bT92P63vC4ce6Bx9x7dZ8lhHZmViZWCLaEWFQAADs=" alt="LOADING...." />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LoadingSpinerComponent;
