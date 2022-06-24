import React from 'react';
import { useEffect, useState } from 'react';
import {Button, Table} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import {adminActions} from "../../redux-toolkit/slice/admin"
import MUIDataTable from "mui-datatables";
import adminApi from '../../api/adminApi';


function UserList(props) {
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const movieList = useSelector(state => state.admin.movielist);
    const genres = useSelector(state => state.public.genres);
    const countries = useSelector(state => state.public.countries);
    const [show, setShow] = useState(false);

    useEffect( () => {
        const fetchAllUser = async () => {
            const res = await adminApi.getAllUsers();
            let newData = [];
            res.users.map((user) => newData.push([
                user.username,
                user.gender, 
                user.role,
                user.email, 
                user.create_at
            ])
            )
            setData(newData);
        }
        fetchAllUser()
    },[] )

    const columns = [
        "Tài khoản", 
        "Giới tính", 
        "Quyền", 
        "Email", 
        "Ngày tạo",
];

    const options = {
        selectableRows: "none",
        responsive: "stacked",
        download: false,
        print: false

    };



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