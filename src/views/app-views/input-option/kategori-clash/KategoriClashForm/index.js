import React, { useState, useEffect } from 'react'
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import { Tabs, Form, Button, message } from 'antd';
import Flex from 'components/shared-components/Flex';
import KategoriClashField from './KategoriClashField';
import FirestoreService from 'services/FirestoreService';
import { useNavigate } from 'react-router-dom';


const ADD = 'ADD'
const EDIT = 'EDIT'

const KategoriClashForm = props => {
	const { mode = ADD, param } = props
    const navigate = useNavigate();
	const [form] = Form.useForm();
	const [submitLoading, setSubmitLoading] = useState(false)

    const initialValues = {
        namaKatClash: '',
        ketKatClash: ''
    }

	// useEffect(() => {
    // 	if(mode === EDIT) {
	// 		console.log('is edit')
	// 		console.log('props', props)
	// 		const { id } = param
	// 		const produtId = parseInt(id)
	// 		const productData = projectData.filter( product => product.id === produtId)
	// 		const product = productData[0]
	// 		form.setFieldsValue({
	// 			projectName: product.projectName,
	// 			projectLocation: product.projectLocation,
	// 			projectType: product.projectType,
	// 			owner: product.owner,
	// 			contractor: product.contractor,
	// 			subcontractor: product.subcontractor
	// 		});
	// 	}
  	// }, [form, mode, param, props]);

    useEffect(() => {
        const fetchData = async () => {
            if (mode === EDIT) {
                const { id } = param;
                try {
                    const document = await FirestoreService.getDocument('kategoriClash', id);
                    form.setFieldsValue(document);
                } catch (error) {
                    message.error('Error fetching document: ' + error.message);
                }
            }
        };

        fetchData();
    }, [form, mode, param]);

	const onReset = () => {
		form.resetFields();
	  };

    const onFinish = () => {
        setSubmitLoading(true);
        form.validateFields().then(values => {
            setTimeout(() => {
                setSubmitLoading(false);
                if (mode === ADD) {
                    message.success(`Created ${values.namaKatClash} to Kategori Clash`);
                    navigate('/app/input-option/kategori-clash/kategori-clash-list');
                }
                if (mode === EDIT) {
                    message.success(`Product saved`);
                    navigate('/app/input-option/kategori-clash/kategori-clash-list');
                }
            }
            , 1500);
        }).catch(info => {
            setSubmitLoading(false);
        });
    };

    const handleFinish = async (values) => {
        try {
            if (mode === ADD) {
                const docId = await FirestoreService.createDocument('kategoriClash', values);
                message.success(`Kategori Clash created with ID: ${docId}`);
            }
            else if (mode === EDIT) {
                const { id } = param;
                await FirestoreService.updateDocument('kategoriClash', id, values);
                message.success(`Kategori Clash updated successfully`);
            }
            form.resetFields();
            onFinish();
        } catch (error) {
            message.error('Error creating/updating Kategori Clash: ' + error.message);
        }
    };

	return (
		<>
			<Form
				layout="vertical"
				form={form}
				name="advanced_search"
				className="ant-advanced-search-form"
				initialValues={initialValues}
                onFinish={handleFinish}
			>
				<PageHeaderAlt className="border-bottom" overlap>
					<div className="container">
						<Flex className="py-2" mobileFlex={false} justifyContent="space-between" alignItems="center">
							<h2 className="mb-3">{mode === 'ADD'? 'Add New Kategori Clash' : `Edit Kategori Clash`} </h2>
							<div className="mb-3">
								<Button className="mr-2" onClick={onReset}>Discard</Button>
								<Button type="primary" onClick={() => onFinish()} htmlType="submit" loading={submitLoading} >
									{mode === 'ADD'? 'Add' : `Save`}
								</Button>
							</div>
						</Flex>
					</div>
				</PageHeaderAlt>
				<div className="container">
					<Tabs 
						defaultActiveKey="1" 
						style={{marginTop: 30}}
						items={[
							{
								label: 'Kategori Field',
								key: '1',
								children: <KategoriClashField />,
							}
						]}
					/>
				</div>
			</Form>
		</>
	)
}

export default KategoriClashForm