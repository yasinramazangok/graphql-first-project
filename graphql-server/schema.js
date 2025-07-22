

export const typeDefs = `#graphql

type Course {
  id: ID!
  title: String!
  description: String
  subjects: [String!]!
  instructor: Instructor!
}

type Instructor {
  id: ID!
  name: String!
  courses: [Course!]
}

type Query {
  courses: [Course]
  instructors: [Instructor]
  course(id:ID!): Course
  instructor(id:ID!): Instructor
}

type Mutation{
  deleteCourse(id:ID!): [Course]
  getInstructorById(id:ID!): [Instructor]
  addCourse(courseAdd: courseAddInput!): Course
  updateCourse(id:ID!, courseUpdate: courseUpdateInput): Course
}

input courseAddInput{
  title: String!,
  description: String!,
  subjects: [String!]!
}

input courseUpdateInput{
  title: String,
  description: String,
  subjects: [String!]
}


`

