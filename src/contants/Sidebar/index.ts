interface IChild {
  route: string;
  name: string;
}

interface sidebarItem {
  route: string;
  title: string;
  child: IChild[];
}

export const sidebarItems: sidebarItem[] = [
  {
    route: '/welcome',
    title: 'WELCOME',
    child: []
  },
  {
    route: './future-patient-journey/index.html',
    title: 'FUTURE PATIENT JOURNEY',
    child: []
  },
  {
    route: '/systems-enablers',
    title: 'SYSTEMS ENABLERS',
    child: [
      {
        route: '',
        name: 'Partners'
      },
      {
        route: '',
        name: 'Roche Initiatives'
      }
    ]
  },
  {
    route: '/abbreviations',
    title: 'ABBREVIATION LIST',
    child: []
  },
  {
    route: '/acknowledgements',
    title: 'ACKNOWLEDGEMENTS',
    child: []
  },
];
