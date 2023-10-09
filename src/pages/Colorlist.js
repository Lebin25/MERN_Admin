import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getColors } from '../features/color/colorSlice';
import { Link } from 'react-router-dom'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'

const columns = [
   {
      title: 'SNo',
      dataIndex: 'key',
   },
   {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
   },
   {
      title: 'Action',
      dataIndex: 'action',
   }
];

const Colorlist = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getColors())
   }, [])

   const colorState = useSelector((state) => state.color.colors)
   const data1 = [];
   for (let i = 0; i < colorState.length; i++) {
      data1.push({
         key: i + 1,
         name: colorState[i].title,
         action: (
            <>
               <Link to='/' className='fs-3 text-danger'>
                  <BiEdit />
               </Link>
               <Link to='/' className='ms-3 fs-3 text-danger'>
                  <AiFillDelete />
               </Link>
            </>
         )
      });
   }
   return (
      <div>
         <h3 className="mb-4 title">Colors</h3>
         <div>
            <Table columns={columns} dataSource={data1} />
         </div>
      </div>
   )
}

export default Colorlist