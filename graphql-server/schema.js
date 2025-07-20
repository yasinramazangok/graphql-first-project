

export const typeDefs = `#graphql

type Course {
  id: ID!
  title: String!
  description: String
  subjects: [String!]!
}

type Instructor {
  id: ID!
  name: String!
}

type Query {
  courses: [Course]
  instructors: [Instructor]
  course(id:ID!):Course
  instructor(id:ID!):Instructor
}

`

