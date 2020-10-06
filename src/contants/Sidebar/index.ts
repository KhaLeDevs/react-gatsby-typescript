import { ReactElement } from 'react';

interface sidebarItem {
  path: string;
  name: string;
  icon?: ReactElement | null;
  routes: sidebarItem[];
}

export const sidebarItems: sidebarItem[] = [
  {
    path: '/patient-journey',
    name: 'Patient Journey',
    icon: null,
    routes: [
      {
        name: 'Early Diagnosis',
        path: '/early-diagnosis',
        routes: []
      },
      {
        name: 'Care Plan',
        path: '/care-plan',
        routes: []
      },
      {
        name: 'Intervensions',
        path: '/intervensions',
        routes: []
      },
      {
        name: 'Remote Monitoring & Care',
        path: '/remote-monitoring-care',
        routes: []
      },
    ],
  },
  {
    path: '/phc-ecosystem',
    name: 'PHC Ecosystem',
    icon: null,
    routes: [
      {
        name: 'Policy',
        path: '/policy',
        routes: [],
      },
      {
        name: 'Partners & Collaborators',
        path: '/partners-collaborators',
        routes: []
      },
      {
        name: 'Roche Initiatives',
        path: '/roche-initiatives',
        routes: []
      },
    ],
  },
  {
    path: '/lorem-ipsum',
    name: 'Lorem Ipsum',
    icon: null,
    routes: [],
  },
  {
    path: '/acknowledgements',
    name: 'Acknowledgements',
    icon: null,
    routes: [],
  },
];
