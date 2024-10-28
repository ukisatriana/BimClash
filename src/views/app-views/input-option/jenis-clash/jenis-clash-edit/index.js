import React from 'react';
import { useParams } from 'react-router-dom';
import JenisClashForm from '../JenisClashForm';

const EditJenisClash = () => {
	const params = useParams();

	return (
		<JenisClashForm mode="EDIT" param={params}/>
	)
}

export default EditJenisClash
