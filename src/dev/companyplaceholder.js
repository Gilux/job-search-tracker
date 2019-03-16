const companyplaceholder = [
  {
    id: 1,
    job_name: "Front-end Developer",
    company_name: "Ubisoft, inc",
    logo_url: "ubisoft.com",
    status: "OPEN",
    ratings: {
      projects: 3,
      salary: 2,
      location: 5
    },
    history: [
      {
        id: "10202034023434",
        date: "2019-02-24",
        action: "CV sent"
      }
    ],
    personal_notes: "lorem ipsum",
    location: {lat: -10.000, lng: 10.000},
    // field: {},
    field_id: 4,
    technos: [1,2]
  },
  {
    id: 2,
    job_name: "Back-end Developer",
    company_name: "Google",
    logo_url: "google.com",
    status: "OPEN",
    ratings: {
      projects: 5,
      salary: 5,
      location: 1
    },
    history: [
      {
        id: "10202034023454",
        date: "2019-02-27",
        action: "Second mail sent"
      },
      {
        id: "10202034023434",
        date: "2019-02-24",
        action: "CV sent"
      }
    ],
    personal_notes: "lorem ipsum",
    location: { lat: -10.000, lng: 10.000 },
    field_id: 3,
    technos: [2,3]
  }
];

export default companyplaceholder;
