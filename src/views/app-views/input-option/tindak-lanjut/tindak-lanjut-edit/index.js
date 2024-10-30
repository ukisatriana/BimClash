import React from 'react';
import { useParams } from 'react-router-dom';
import TindakLanjutForm from '../TindakLanjutForm';

const EditTindakLanjut = () => {
	const params = useParams();

	return (
		<TindakLanjutForm mode="EDIT" param={params}/>
	)
}

export default EditTindakLanjut
