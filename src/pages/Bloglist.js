import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../features/blogs/blogSlice';
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
   },
   {
      title: 'Category',
      dataIndex: 'category',
   },
   {
      title: 'Action',
      dataIndex: 'action',
   }
];

const Bloglist = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getBlogs())
   }, [])

   const blogState = useSelector((state) => state.blog.blogs)
   const data1 = [];
   for (let i = 0; i < blogState.length; i++) {
      data1.push({
         key: i,
         name: blogState[i].title,
         category: blogState[i].category,
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
         <h3 className="mb-4 title">Blogs List</h3>
         <div>
            <Table columns={columns} dataSource={data1} />
         </div>
      </div>
   )
}

export default Bloglist