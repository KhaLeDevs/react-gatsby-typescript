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
    route: '/systems-enablers',
    title: 'SYSTEMS ENABLERS',
  },
  {
    route: '/abbreviations',
    title: 'ABBREVIATION LIST',
  },
  {
    route: '/acknowledgements',
    title: 'ACKNOWLEDGEMENTS',
  },
];
