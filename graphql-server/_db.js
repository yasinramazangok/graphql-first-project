

let courseList = [
  {
    id: "1",
    title: "MVC ve SQL Server Web Uygulama",
    description: "Kurs Açıklama",
    subjects: ["MVC", "SQL Server", "Bootstrap", "Entity Framework"],
    instructor_id: "1"
  },
  {
    id: "2",
    title: "Next 13 Kursu",
    description: "Kurs Açıklama",
    subjects: ["Next", "Veritabanı"],
    instructor_id: "1"
  },
  {
    id: "3",
    title: "MERN ile Authentication",
    description: "Kurs Açıklama",
    subjects: ["MongoDB", "Express", "React", "Node"],
    instructor_id: "3"
  },
  {
    id: "4",
    title: "MVC - Web API ve SQL Server Konuları",
    description: "Kurs Açıklama",
    subjects: ["MVC", "SQL Server", "Web API"],
    instructor_id: "4"
  }
]

let instructorList = [
  { id: "1", name: "Luffy" },
  { id: "2", name: "Nami" },
  { id: "3", name: "Zoro" },
  { id: "4", name: "Sanji" },
  { id: "5", name: "Usop" },
];


export default {courseList, instructorList }