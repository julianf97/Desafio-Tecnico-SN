import { useEffect, useState } from 'react';

export default function LoupeIcon() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const iconSize = windowWidth > 640 ? 70 : 60;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 284.429 284.429"
      width="40"
      height="40"
      style={{ marginTop: '12px' }}
    >
      <path
        fill="#FFFFFF"
        d="M224.877,192.114l-50.864-44.219c-2.139-1.857-5.413-1.626-7.271,0.512l-4.236,4.81
        c0,0-15.55-13.297-15.423-13.459c10.955-13.974,17.505-31.564,17.505-50.697c0-45.427-36.823-82.251-82.244-82.251
        c-45.428,0-82.251,36.824-82.251,82.251c0,45.426,36.823,82.246,82.251,82.246c21.726,0,41.469-8.439,56.169-22.199
        c0.244-0.229,15.507,13.764,15.507,13.764l-3.478,4.168c-1.859,2.142-1.634,5.418,0.51,7.277l51.058,44.387
        c2.137,1.859,5.411,1.626,7.273-0.514l16.195-18.632C227.246,197.248,227.015,193.976,224.877,192.114z M81.988,158.705
        c-38.549,0-69.911-31.361-69.911-69.904c0-38.546,31.362-69.908,69.911-69.908c38.542,0,69.902,31.362,69.902,69.908
        C151.89,127.344,120.53,158.705,81.988,158.705z M205.516,205.884l-41.839-36.867l7.021-8.194l41.84,37.16L205.516,205.884z"
      />
    </svg>
  );
}
