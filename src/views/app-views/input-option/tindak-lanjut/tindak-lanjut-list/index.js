import React, { useState, useEffect} from 'react'
import { Card, Table, Input, Button, Menu, message } from 'antd';
import projectData from "assets/data/project-data.json";
import { EditOutlined, DeleteOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex';
import { useNavigate } from "react-router-dom";
import FirestoreService from 'services/FirestoreService';
import utils from 'utils'


const TindakLanjutList = () => {
	const navigate = useNavigate();
	const [list, setList] = useState([]);
	const [selectedRows, setSelectedRows] = useState([]);
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    useEffect(() => {
		const fetchData = async () => {
		  try {
			const data = await FirestoreService.getDocuments('tindakLanjut');
			setList(data);
            // console.log('isi', data)
		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		};
	
		fetchData();
	  }, []);

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
	
	const addTindakLanjut = () => {
		navigate(`/app/input-option/tindak-lanjut/tindak-lanjut-add`)
	}
	
	const viewDetails = row => {
		navigate(`/app/input-option/tindak-lanjut/tindak-lanjut-edit/${row.id}`)
	}

	
	
	const deleteRow = async row => {
		try {
		  await FirestoreService.deleteDocument('tindakLanjut', row.id);
		  message.success('Nama Tindak Lanjut deleted successfully');
		  setList(list.filter(item => item.id !== row.id));
		} catch (error) {
		  message.error('Error deleting Jenis Clash: ' + error.message);
		}
	  };

	const tableColumns = [
		// {
		// 	title: 'ID',
		// 	dataIndex: 'id'
		// },
        {
			title: 'No',
			dataIndex: 'no',
			render: (text, record, index) => index + 1
		},
		{
			title: 'Nama Tindak Lanjut',
			dataIndex: 'namaTindakLanjut',
			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'namaTindakLanjut')
		},
		{
			title: 'Keterangan Tindak Lanjut',
			dataIndex: 'ketTindakLanjut',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'ketTindakLnajut')
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

	return (
		<Card>
			<Flex alignItems="center" justifyContent="space-between" mobileFlex={false}>
				<Flex className="mb-1" mobileFlex={false}>
					<div className="mr-md-3 mb-3">
						<Input placeholder="Search" prefix={<SearchOutlined />} onChange={e => onSearch(e)}/>
					</div>
				</Flex>
				<div>
					<Button onClick={addTindakLanjut} type="primary" icon={<PlusCircleOutlined />} block>Add Tindak Lanjut</Button>
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

export default TindakLanjutList
