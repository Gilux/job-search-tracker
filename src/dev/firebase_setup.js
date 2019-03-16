import firebase from "firebase"

firebase.database().ref('fields').set(
  [
    {id: 1, name: "Finance"},
    {id: 2, name: "Gaming"},
    {id: 3, name: "Marketing"},
    {id: 4, name: "Public Service"}
  ]
);

firebase.database().ref('technos').set(
  [
    { id: 1, name: "VueJS" },
    { id: 2, name: "ReactJS" },
    { id: 3, name: "Laravel" },
    { id: 4, name: "PHP" },
    { id: 5, name: "Symfony" },
    { id: 6, name: "AngularJS" },
    { id: 7, name: "WordPress" },
  ]
);

firebase
  .database()
  .ref("users/WK8158iuqtbV5qjGgOluQynKg5n2/applications")
  .set([
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
      location: { lat: -10.0, lng: 10.0 },
      // field: {},
      field_id: 4,
      technos: [1, 2]
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
      location: { lat: -10.0, lng: 10.0 },
      field_id: 3,
      technos: [2, 3]
    }
  ]);

