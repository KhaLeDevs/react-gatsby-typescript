import { ReactElement } from 'react';

export interface sidebarItem {
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
        routes: [],
      },
      {
        name: 'Care Plan',
        path: '/care-plan',
        routes: [],
      },
      {
        name: 'Intervensions',
        path: '/intervensions',
        routes: [],
      },
      {
        name: 'Remote Monitoring & Care',
        path: '/remote-monitoring-care',
        routes: [],
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
        routes: [
          {
            name: 'Data Policy',
            path: 'data-policy',
            routes: [],
          },
          {
            name: 'Regulatory Policy',
            path: 'regulatory-policy',
            routes: [],
          },
          {
            name: 'Ecosystem Policy',
            path: 'ecosystem-policy',
            routes: [],
          },
        ],
      },
      {
        name: 'Partners & Collaborators',
        path: '/partners-collaborators',
        routes: [
          {
            name: 'External Stakeholders',
            path: 'external-stakeholders',
            routes: [],
          },
          {
            name: 'External Partners',
            path: 'external-partners',
            routes: [],
          },
          {
            name: 'Collaboration Models',
            path: 'collaboration-models',
            routes: [],
          },
        ],
      },
      {
        name: 'Roche Initiatives',
        path: '/roche-initiatives',
        routes: [
          {
            name: 'Lorem Ipsum',
            path: '/lorem-ipsum',
            routes: [],
          },
          {
            name: 'Lorem Ipsum',
            path: '/lorem-ipsum',
            routes: [],
          },
          {
            name: 'Lorem Ipsum',
            path: '/lorem-ipsum',
            routes: [],
          },
        ],
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
