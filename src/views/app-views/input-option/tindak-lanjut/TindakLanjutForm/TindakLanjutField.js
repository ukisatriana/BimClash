import React from 'react'
import { Input, Row, Col, Card, Form } from 'antd';


const rules = {
	namaTindakLanjut: [
		{
			required: true,
			message: 'Please enter Nama Tindak Lanjut',
		}
	],
	ketTindakLanjut: [
		{
			required: true,
			message: 'Please enter Keterangan Tindak Lanjut',
		}
	],
}


const TindakLanjutField = () => {

    const initialValues = {
        namaTindakLanjut: '',
        ketTindakLanjut: ''
    }

    const [values, setValues] = React.useState(initialValues);

    function handleStatusValidasiChange(e) {
        const {name , value} = e.target;
            setValues({
                ...values,
                [name]: value});
    }


	return (
		<Card title="Status Valiadasi">
			<Row gutter={16}>
				<Col span={24}>
                    <Form.Item name="namaTindakLanjut" label="Nama Tindak Lanjut" rules={rules.namaTindakLanjut}>
					    <Input 
                        placeholder="Enter Nama Tindak Lanjut" 
                        type='text'
                        value={values.namaTindakLanjut}
                        name="namaTindakLanjut"
                        onChange={e => handleStatusValidasiChange(e)}
                        />
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="ketTindakLanjut" label="Keterangan Tindak Lanjut" rules={rules.ketTindakLanjut}>
					    <Input.TextArea
                        placeholder="Enter Keterangan Tindak Lanjut"
                        type='text'
                        name='ketTindakLanjut'
                        value={values.ketTindakLanjut}
                        onChange={e => handleStatusValidasiChange(e)}
                        />
				    </Form.Item>
				</Col>
			</Row>
		</Card>
	)
}

export default TindakLanjutField
