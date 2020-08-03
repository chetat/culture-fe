import React, { useEffect } from 'react';
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../../components/UserCard';
import { fetchUsers } from '../../actions/usersAction';


const UsersList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const users = useSelector(state => state.users.users_data)

    const showUsers = (users_data) => {
        const users_initial = [];
        let cat_users = []
        if (typeof users_data !== "undefined" && Array.isArray(users_data)){
            cat_users = users_data.reduce((accu, user) => {
                let initial = user.name[0]
    
                if (!accu[initial]) {
                    accu[initial] = { users: [user] }
                } else {
                    accu[initial].users.push(user)
                }
                return accu;
            }, {})
        }
      
        for (const [key, value] of Object.entries(cat_users)) {
            users_initial.push(<UserCard  users_prop={value} initial={key}  />)
        }

        if (users_initial.length > 0){
            return (
            <Container>
                <h2 className="mt-5">Active Users</h2>  {users_initial};
            </Container>
            )
        } else {
            return  <h3 className="my-5">No User Registered</h3>
        }
    }

    return (
        showUsers(users)
    )


}

export default UsersList;