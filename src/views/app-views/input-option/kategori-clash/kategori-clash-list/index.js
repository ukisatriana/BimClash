import React, {useState, useEffect} from 'react'
import { Card, Table, Input, Button, Menu, message } from 'antd';
import projectData from "assets/data/project-data.json";
import { EditOutlined, DeleteOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex';
import { useNavigate } from "react-router-dom";
import FirestoreService from 'services/FirestoreService';
import utils from 'utils'

const KategoriClashList = () => {
	const navigate = useNavigate();
	const [list, setList] = useState([])
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

    useEffect(() => {
		const fetchData = async () => {
		  try {
			const data = await FirestoreService.getDocuments('kategoriClash');
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
	
	const addKategoriClash = () => {
		navigate(`/app/input-option/kategori-clash/kategori-clash-add`)
	}
	
	const viewDetails = row => {
		navigate(`/app/input-option/kategori-clash/kategori-clash-edit/${row.id}`)
	}

	
	
	const deleteRow = async row => {
		try {
		  await FirestoreService.deleteDocument('kategoriClash', row.id);
		  message.success('Kategori Clash deleted successfully');
		  setList(list.filter(item => item.id !== row.id));
		} catch (error) {
		  message.error('Error deleting Kategori Clash: ' + error.message);
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
			title: 'Nama Kategori Clash',
			dataIndex: 'namaKatClash',
			
			sorter: (a, b) => utils.antdTableSorter(a, b, 'namaKatClash')
		},
		{
			title: 'Keterangan Kategori Clash',
			dataIndex: 'ketKatClash',
			sorter: (a, b) => utils.antdTableSorter(a, b, 'ketKatClash')
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
					<Button onClick={addKategoriClash} type="primary" icon={<PlusCircleOutlined />} block>Add Kategori Clash</Button>
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

export default KategoriClashList
