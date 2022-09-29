// Hooks
import {useState, useEffect, useReducer} from "react";

// Firebase
import {db} from "../firebase/config";
import { collection, addDoc, Timestamp, doc } from "firebase/firestore";

const initialState = {
    loading: null,
    error: null
}

const insertReducer = (state, action) => {

    switch(action.type){
        case "LOADING":
            return {loading: true, error: null}
        case "INSERTED_DOC":
            return {loading: false, error: null}
        case "ERROR":
            return {loading: false, error: action.payload}
        default:
            return state;
    }


}

export const useInsertDocument = (docCollection) => {

    const [response, dispatch] = useReducer(insertReducer, initialState);

    // Deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const checkCancelVeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(action)
        }
    }
    
    const insertDocument = async(document) => {

        checkCancelVeforeDispatch({
            type: "LOADING",
        })

        try {

            const newDocument = {...document, createAt: Timestamp.now()}

            const insertedDocument = await addDoc(
                collection(db, docCollection),
                newDocument
            )

            checkCancelVeforeDispatch({
                type: "INSERTED_DOC",
                payload: insertedDocument,
            })

        } catch (error) {
            
            checkCancelVeforeDispatch({
                type: "ERROR",
                payload: error.message,
            })

        }

    };

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {insertDocument, response};
}