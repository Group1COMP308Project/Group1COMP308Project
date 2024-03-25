var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;


const nurseType = new GraphQLObjectType({
    name: 'nurse',
    fields: function(){
        return {
            id: {
                type: GraphQLID
            },
            name: {
                type: GraphQLString
            },
            temperature:{
                type: GraphQLInt
            },
            heartrate:{
                type: GraphQLInt
            },
            bloodpressure:{
                type: GraphQLInt
            },
            hasvitiedbefore:{
                type: GraphQLString
            },
            motivationtips:{
                type: GraphQLString
            },
            medicalcoditions:{
                type: GraphQLString
            }

        }
    }
});


//TODO - mutations
