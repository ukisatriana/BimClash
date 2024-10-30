import React from 'react'
import { Input, Row, Col, Card, Form } from 'antd';


const rules = {
	namaKatClash: [
		{
			required: true,
			message: 'Please enter Nama Kategori Clash',
		}
	],
	ketKategoriClash: [
		{
			required: true,
			message: 'Please enter Keterangan Kategori Clash',
		}
	],
}


const KategoriClashField = () => {

    const initialValues = {
        namaKatClash: '',
        ketKatClash: ''
    }

    const [values, setValues] = React.useState(initialValues);

    function handleKategoriClashChange(e) {
        const {name , value} = e.target;
            setValues({
                ...values,
                [name]: value});
        }

	return (
		<Card title="Kategori Clash">
			<Row gutter={16}>
				<Col span={24}>
                    <Form.Item name="namaKatClash" label="Nama Kateori Clash" rules={rules.namaKatClash}>
					    <Input 
                        type='text' 
                        placeholder="Enter Kategori Clash" 
                        value={values.namaKatClash}
                        name="namaKatClash"
                        onChange={e => handleKategoriClashChange(e)}
                        />
				    </Form.Item>
				</Col>
                <Col span={24}>
                    <Form.Item name="ketKatClash" label="Keterangan Kategori Clash" rules={rules.ketKategoriClash}>
					    <Input
                        type='text'
                        placeholder="Enter Kategori Clash"
                        value={values.ketKatClash}
                        name='ketKatClash'
                        onChange={e => handleKategoriClashChange(e)}
                        />
				    </Form.Item>
				</Col>
			</Row>
		</Card>
	)
}

export default KategoriClashField
