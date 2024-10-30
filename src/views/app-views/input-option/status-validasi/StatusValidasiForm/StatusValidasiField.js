import React from 'react'
import { Input, Row, Col, Card, Form } from 'antd';


const rules = {
	namaStatValidasi: [
		{
			required: true,
			message: 'Please enter Nama Status Validasi',
		}
	],
	ketStatusValidasi: [
		{
			required: true,
			message: 'Please enter Keterangan Status Validasi',
		}
	],
}


const StatusValidasiField = () => {

    const initialValues = {
        namaStatusValidasi: '',
        ketStatusValidasi: ''
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
                    <Form.Item name="namaStatusValidasi" label="Nama Status Validasi" rules={rules.namaStatValidasi}>
					    <Input 
                        placeholder="Enter Kategori Clash" 
                        type='text'
                        value={values.namaStatusValidasi}
                        name="namaStatusValidasi"
                        onChange={e => handleStatusValidasiChange(e)}
                        />
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="ketStatusValidasi" label="Keterangan Status Validasi" rules={rules.ketStatusValidasi}>
					    <Input.TextArea
                        placeholder="Enter Kategori Clash"
                        type='text'
                        name='ketStatusValidasi'
                        value={values.ketStatusValidasi}
                        onChange={e => handleStatusValidasiChange(e)}
                        />
				    </Form.Item>
				</Col>
			</Row>
		</Card>
	)
}

export default StatusValidasiField
