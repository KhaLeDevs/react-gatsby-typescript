interface sidebarItem {
  route: string;
  title: string;
}

export const sidebarItems: sidebarItem[] = [
  {
    route: '/welcome',
    title: 'WELCOME',
  },
  {
    route: './future-patient-journey/index.html',
    title: 'FUTURE PATIENT JOURNEY',
  },
  {
    route: './systems-enablers/index.html',
    title: 'SYSTEMS ENABLERS',
  },
  {
    route: './abbrevation.html',
    title: 'ABBREVIATION LIST',
  },
  {
    route: '/acknowledgements',
    title: 'ACKNOWLEDGEMENTS',
  },
];
