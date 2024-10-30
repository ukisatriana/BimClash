import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectForm from '../ProjectForm';

const EditProject = () => {
	const params = useParams();

	return (
        <ProjectForm mode="EDIT" param={params}/>
	)
}

export default EditProject

