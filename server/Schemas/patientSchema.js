var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;

const {addDailyInfo,updateDailyInfo,getPatient} = require('../Resolvers/patient-resolvers-server');

const Type = new GraphQLObjectType({
    name: 'patient',
    fields: function(){
        return {
            id: {
                type: GraphQLID
            },
            Name: {
                type: GraphQLString
            },
            Temperature:{
                type: GraphQLInt
            },
            RespitoryRate:{
                type: GraphQLInt
            },
            Bloodpressure:{
                type: GraphQLInt
            },
            Weight:{
                type: GraphQLString
            },
            PulseRate:{
                type: GraphQLString
            },
            CovidSymptom:{
                type: GraphQLString
            },
            Date:{
                type: GraphQLString
            }

        }
    }
});


//TODO - mutations


const querytype = new GraphQLObjectType({

    name:'Query',
    fields: function(){
        return {
            patients: {
                type: new GraphQLList(patientType),
                resolve: getPatient
            }

        }
    }

})

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: function(){
        return {
            addDailyInfo:{

                type: patientType,
                args:{

                    Name:{
                        type: new GraphQLNonNull(GraphQLString)
                    },

                    Temperature: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    RespitoryRate: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    Bloodpressure: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    Weight: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    PulseRate: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    CovidSymptom: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    Date: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                },
                resolve: addDailyInfo


                    
                }
            }
        }
    }
)




