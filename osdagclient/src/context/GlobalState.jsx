import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

/*
    Author: Sai Charan (Fossee' 23)
    This file contains the GlobalState and GlobalProvider components which are used to manage the state of the application.
*/

import axios from 'axios';

//initial state
let initialValue = {
    data: [],
    results: null,
    subDesignTypes: null,
    leafLevelDesignType: null
}

const BASE_URL = 'http://127.0.0.1:8000/'


//create context
export const GlobalContext = createContext(initialValue);

//provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialValue);

    useEffect(() => {
        // Fetch initial data from API and update the state
        const fetchData = async () => {
            try {
                const response = await axios.get(BASE_URL + "osdag-web/");
                const data = response.data.result;
                dispatch({ type: 'GET_MODULES', payload: data });
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    //action
    const getDesignTypes = async (conn_type) => {
        try {
            const response = await axios.get(`${BASE_URL}osdag-web/${conn_type}`);
            const data = response.data.result;
            dispatch({ type: 'GET_DESIGNTYPES', payload: data });
        } catch (error) {
            console.error(error);
        }
    }

    const getSubDesignTypes = async (designType, name) => {
        try {
            const response = await axios.get(`${BASE_URL}osdag-web/${designType}/${name.toLowerCase().replaceAll("_", '-')}`);
            const data = response.data.result;
            // console.log(data)
            dispatch({ type: 'GET_SUB_DESIGNTYPES', payload: data });
        } catch (error) {
            console.error(error);
        }
    }

    const getLeafLevelDesignType = async (designType, prev, name) => {
        try {
            const response = await axios.get(`${BASE_URL}osdag-web/${designType}/${prev.toLowerCase().replaceAll("_", '-')}/${name.toLowerCase().replaceAll("_", '-')}`);
            const data = response.data.result;
            // console.log(data)
            dispatch({ type: 'GET_LEAF_DESIGNTYPES', payload: data });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <GlobalContext.Provider value={{
            data: state.data,
            results: state.results,
            subDesignTypes: state.subDesignTypes,
            leafLevelDesignType: state.leafLevelDesignType,
            getDesignTypes,
            getSubDesignTypes,
            getLeafLevelDesignType
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
