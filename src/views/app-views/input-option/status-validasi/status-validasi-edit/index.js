import React from 'react';
import { useParams } from 'react-router-dom';
import StatusValidasiForm from '../StatusValidasiForm';

const EditStatusValidasi = () => {
	const params = useParams();

	return (
		<StatusValidasiForm mode="EDIT" param={params}/>
	)
}

export default EditStatusValidasi
