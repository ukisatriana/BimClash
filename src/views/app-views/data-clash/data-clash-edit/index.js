import React from 'react';
import { useParams } from 'react-router-dom';
import DataClashForm from '../DataClashForm';

const EditDataClash = () => {
	const params = useParams();

	return (
        <DataClashForm mode="EDIT" param={params}/>
	)
}

export default EditDataClash

