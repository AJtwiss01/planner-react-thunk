import autReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers  } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer =  combineReducers({
    auth: autReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})


export default rootReducer

