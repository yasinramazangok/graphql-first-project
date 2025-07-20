

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