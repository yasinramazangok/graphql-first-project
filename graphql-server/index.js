

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";
import db from "./_db.js";


const resolvers = {
    Query:{
        courses(){
            return db.courseList
        },

        instructors(){
            return db.instructorList
        },

        course(parent, args){
            return db.courseList.find(c => c.id === args.id)
        },

        instructor(_, args){
            return db.instructorList.find(i => i.id === args.id)
        }
    },

    Instructor:{
        courses(parent){
            return db.courseList.filter(c => c.instructor_id === parent.id)
        },
    },

    Course:{
        instructor(parent){
            return db.instructorList.find(i => i.id === parent.instructor_id)        
        },
    },

    Mutation:{
        deleteCourse(_,args){
            db.courseList = db.courseList.filter(c => c.id !== args.id)
            return db.courseList
        },

        getInstructorById(_,args){
            db.instructorList = db.instructorList.filter(i => i.id === args.id)
            return db.instructorList
        },

        addCourse(_,args){
            let course = {
                ...args.courseAdd,
                id:Math.floor(Math.random()*10000).toString()
            }

            db.courseList.push(course)
            return course
        },

        updateCourse(_,args){
            db.courseList = db.courseList.map(c => {
                if(c.id === args.id){
                    return {...c, ...args.courseUpdate}
                }

                return c
            })
            return db.courseList.find(c => c.id === args.id)
        }
    }
}

const server = new ApolloServer({
    // typeDefs
    typeDefs,

    // resolvers
    resolvers
})

const {url} = await startStandaloneServer(server, {
    listen: {port:4000}
})

console.log('server başlatıldı! - port : ', 4000);