import React from 'react';
import { useParams } from 'react-router-dom';
import KategoriClashForm from '../KategoriClashForm';

const EditKategoriClash = () => {
	const params = useParams();

	return (
		<KategoriClashForm mode="EDIT" param={params}/>
	)
}

export default EditKategoriClash
