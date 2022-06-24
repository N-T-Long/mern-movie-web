import React from 'react';
import { useEffect, useState } from 'react';
import {Button} from "react-bootstrap"
import MUIDataTable from "mui-datatables";
import adminApi from '../../api/adminApi';


function UserList(props) {
    const [data, setData] = useState([]);

    useEffect( () => {
        fetchAllUser()
    },[] )
    
    const columns = [
        "Tài khoản", 
        "Giới tính", 
        "Quyền", 
        "Email", 
        "Ngày tạo",
        {
            name: "Chỉnh sửa",
            options: {
              filter: false,
              customBodyRender: (value, tableMeta, updateValue) => (
                < >
                    <Button variant="warning" className="button-edit" > Chỉnh sửa</Button>
                    <Button  onClick={() =>{handleRemoveUser(value)}} variant="danger" className="button-edit">Xóa</Button>
                   
                </>
              )
            }
          },

];

    const options = {
        selectableRows: "none",
        responsive: "stacked",
        download: false,
        print: false

    };

    const handleRemoveUser = async (user) => {
        if (window.confirm(`Bạn chắc chắn muốn xóa người dùng: ${user.username}`) === true) {
            const res = await adminApi.removeUser(user._id)
            if (res.success === true)
            fetchAllUser()
        }
    }
    



    const fetchAllUser = async () => {
        const res = await adminApi.getAllUsers();
        let newData = [];
        res.users.map((user) => newData.push([
            user.username,
            user.gender, 
            user.role,
            user.email, 
            user.create_at,
            user
        ])
        )
        setData(newData);
    }
    return (
        <div className="" >
          <MUIDataTable
            title={"Danh sách tài khoản"}
            data={data}
            columns={columns}
            options={options}
            />
        </div>

    );
}

export default UserList;