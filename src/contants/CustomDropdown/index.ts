interface IChild {
  route: string;
  name: string;
}
export interface ICustomDropdownItem {
  name: string;
  title: string;
  icon: string;
  color: string;
  child: IChild[];
}

export const customDropdownData: ICustomDropdownItem[] = [
  {
    name: 'diagnosis-dropdown',
    title: 'Early Personalised Diagnosis',
    icon: require('@src/images/arrow-dropdown.2ed7f2a2.svg').default,
    color: 'rgb(0, 102, 204)',
    child: [
      {
        route: 'future-patient-journey/diagnosis/overview.html',
        name: 'Overview',
      },
      {
        route: 'future-patient-journey/diagnosis/diagnostics.html',
        name: 'Diagnostics',
      },
      {
        route: 'future-patient-journey/diagnosis/genomics.html',
        name: 'Genomics',
      },
      {
        route: 'future-patient-journey/diagnosis/advanced-imaging.html',
        name: 'Advanced Imaging',
      },
      {
        route: 'future-patient-jou rney/diagnosis/digital-pathology.html',
        name: 'Digital Pathology',
      },
      {
        route: 'future-patient-journey/diagnosis/cds-systems.html',
        name: 'CDS Systems',
      },
      {
        route: 'future-patient-journey/diagnosis/digital-health.html',
        name: 'Digital Health and SaMD',
      },
    ],
  },
  {
    name: 'monitoring-dropdown',
    title: 'Personalised Remote Monitoring & Care',
    icon: require('@src/images/arrow-dropdown.2ed7f2a2.svg').default,
    color: 'rgb(0, 102, 204)',
    child: [
      {
        route: 'future-patient-journey/monitoring/overview.html',
        name: 'Overview',
      },
      {
        route: 'future-patient-journey/monitoring/diagnostics.html',
        name: 'Diagnostics',
      },
      {
        route: 'future-patient-journey/monitoring/genomics.html',
        name: 'Genomics',
      },
      {
        route: 'future-patient-journey/monitoring/advanced-imaging.html',
        name: 'Advanced Imaging',
      },
      {
        route: 'future-patient-journey/monitoring/cds-systems.html',
        name: 'CDS Systems',
      },
      {
        route: 'future-patient-journey/monitoring/digital-health.html',
        name: 'Digital Health and SaMD',
      },
    ],
  },
  {
    name: 'data-dropdown',
    title: 'Data & Insights',
    icon: require('@src/images/arrow-dropdown.2ed7f2a2.svg').default,
    color: 'rgb(0, 102, 204)',
    child: [
      {
        route: 'future-patient-journey/data/overview.html',
        name: 'Overview',
      },
      {
        route: 'future-patient-journey/data/real-world-data.html',
        name: 'Real-World Data',
      },
      {
        route: 'future-patient-journey/data/advanced-analytics.html',
        name: 'Advanced Analytics',
      },
    ],
  },
  {
    name: 'care-dropdown',
    title: 'Personalised Care Plan',
    icon: require('@src/images/arrow-dropdown.2ed7f2a2.svg').default,
    color: 'rgb(0, 102, 204)',
    child: [
      {
        route: 'future-patient-journey/care/overview.html',
        name: 'Overview',
      },
      {
        route: 'future-patient-journey/care/diagnostics.html',
        name: 'Diagnostics',
      },
      {
        route: 'future-patient-journey/care/cds-systems.html',
        name: 'CDS Systems',
      },
      {
        route: 'future-patient-journey/care/digital-health.html',
        name: 'Digital Health and SaMD',
      },
    ],
  },
  {
    name: 'access-dropdown',
    title: 'Rapid Access to Personalised Interventions',
    icon: require('@src/images/arrow-dropdown.2ed7f2a2.svg').default,
    color: 'rgb(0, 102, 204)',
    child: [
      {
        route: 'future-patient-journey/access/overview.html',
        name: 'Overview',
      },
      {
        route: 'future-patient-journey/access/diagnostics.html',
        name: 'Diagnostics',
      },
      {
        route: 'future-patient-journey/access/cds-systems.html',
        name: 'CDS Systems',
      },
      {
        route: 'future-patient-journey/access/digital-health.html',
        name: 'Digital Health and SaMD',
      },
      {
        route: 'future-patient-journey/access/value-based-healthcare.html',
        name: 'Value-based Healthcare',
      },
    ],
  },
  {
    name: 'roche-dropdown',
    title: 'Roche Initiatives',
    icon: require('@src/images/arrow-dropdown.2ed7f2a2.svg').default,
    color: 'rgb(237, 139, 0)',
    child: [
      {
        route: 'systems-enablers/roches-initiatives/context.html',
        name: 'Context',
      },
      {
        route: 'systems-enablers/roches-initiatives/showcases.html',
        name: 'Showcases',
      },
      {
        route: 'systems-enablers/roches-initiatives/shining-towers.html',
        name: 'Shining Towers',
      },
      {
        route: 'systems-enablers/roches-initiatives/examples.html',
        name: 'Examples',
      },
    ],
  },
  {
    name: 'partners-dropdown',
    title: 'Partners',
    icon: require('@src/images/arrow-dropdown.2ed7f2a2.svg').default,
    color: 'rgb(237, 139, 0)',
    child: [
      {
        route: 'systems-enablers/partner/stakeholders.html',
        name: 'Stakeholders',
      },
      {
        route: 'systems-enablers/partner/policy.html',
        name: 'Policy',
      },
      {
        route: 'systems-enablers/partner/phc-it.html',
        name: 'PHC IX/Technology',
      },
      {
        route: 'systems-enablers/partner/patient-partnerships.html',
        name: 'Patient Partnerships',
      },
    ],
  },
];
