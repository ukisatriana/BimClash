import React, {useState} from 'react'
import { Card, Table, Input, Button, Menu, Select } from 'antd';
import projectData from "assets/data/project-data.json";
import { EditOutlined, DeleteOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex';
import { useNavigate } from "react-router-dom";
import utils from 'utils'

const { Option } = Select

const categories = ['Cloths', 'Bags', 'Shoes', 'Watches', 'Devices']

const DataClashList = () => {
	const navigate = useNavigate();
	const [list, setList] = useState(projectData)
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	const dropdownMenu = row => (
		<Menu>
			<Menu.Item onClick={() => viewDetails(row)}>
				<Flex alignItems="center">
					<EditOutlined />
					<span className="ml-2">Edit</span>
				</Flex>
			</Menu.Item>
			<Menu.Item onClick={() => deleteRow(row)}>
				<Flex alignItems="center">
					<DeleteOutlined />
					<span className="ml-2">{selectedRows.length > 0 ? `Delete (${selectedRows.length})` : 'Delete'}</span>
				</Flex>
			</Menu.Item>
		</Menu>
	);
	
	const addDataClash = () => {
		navigate(`/app/data-clash/data-clash-add`)
	}
	
	const viewDetails = row => {
		navigate(`/app/data-clash/data-clash-edit/${row.id}`)
	}
	
	const deleteRow = row => {
		const objKey = 'id'
		let data = list
		if(selectedRows.length > 1) {
			selectedRows.forEach(elm => {
				data = utils.deleteArrayRow(data, objKey, elm.id)
				setList(data)
				setSelectedRows([])
			})
		} else {
			data = utils.deleteArrayRow(data, objKey, row.id)
			setList(data)
		}
	}

	const tableColumns = [
		{
			title: 'ID',
			dataIndex: 'id'
		},
		{
			title: 'Project Code',
			dataIndex: 'projectCode',
			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'kodeProyek')
		},
		{
			title: 'Nama',
			dataIndex: 'projectLocation',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'projectLocation')
		},
		{
			title: 'Project Type',
			dataIndex: 'projectType',
			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'projectType')
		},
		{
			title: 'Divisi',
			dataIndex: 'divisi',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'divisi')
		},
		{
			title: 'Manager Proyek',
			dataIndex: 'managerProyek',
			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'managerProyek')
		},
		{
			title: 'Kontak MP',
			dataIndex: 'kontakMp',
			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'kontakMp')
		},
		{
			title: 'Pic BIM',
			dataIndex: 'picBim',
			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'picBIM')
		},
		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right">
					<EllipsisDropdown menu={dropdownMenu(elm)}/>
				</div>
			)
		}
	];
	
	const rowSelection = {
		onChange: (key, rows) => {
			setSelectedRows(rows)
			setSelectedRowKeys(key)
		}
	};

	const onSearch = e => {
		const value = e.currentTarget.value
		const searchArray = e.currentTarget.value? list : projectData
		const data = utils.wildCardSearch(searchArray, value)
		setList(data)
		setSelectedRowKeys([])
	}

    const handleShowCategory = value => {
		if(value !== 'All') {
			const key = 'category'
			const data = utils.filterArray(projectData, key, value)
			setList(data)
		} else {
			setList(projectData)
		}
	}


	return (
		<Card>
			<Flex alignItems="center" justifyContent="space-between" mobileFlex={false}>
				<Flex className="mb-1" mobileFlex={false}>
					<div className="mr-md-3 mb-3">
						<Input placeholder="Search" prefix={<SearchOutlined />} onChange={e => onSearch(e)}/>
					</div>
					<div className="mb-3">
						<Select 
							defaultValue="All" 
							className="w-100" 
							style={{ minWidth: 180 }} 
							onChange={handleShowCategory} 
							placeholder="Category"
						>
							<Option value="All">Nama Proyek</Option>
							{
								categories.map(elm => (
									<Option key={elm} value={elm}>{elm}</Option>
								))
							}
						</Select>
					</div>
				</Flex>
				<div>
					<Button onClick={addDataClash} type="primary" icon={<PlusCircleOutlined />} block>Add Data Clash</Button>
				</div>
			</Flex>
			<div className="table-responsive">
				<Table 
					columns={tableColumns} 
					dataSource={list} 
					rowKey='id' 
					rowSelection={{
						selectedRowKeys: selectedRowKeys,
						type: 'checkbox',
						preserveSelectedRowKeys: false,
						...rowSelection,
					}}
				/>
			</div>
		</Card>
	)
}

export default DataClashList
