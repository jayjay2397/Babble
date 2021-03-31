import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Col, Image } from 'react-bootstrap'
import classNames from 'classnames'


import { useMessageDispatch, useMessageState } from '../../context/msgcontext'

const GET_USERS = gql`
  query getUsers {
    getUsers {
      username
      createdAt
      latestMessage {
        uuid
        from
        to
        content
        createdAt
      }
    }
  }
`


export default function UserSection() {

    const dispatch = useMessageDispatch()
    const { users } = useMessageState()
    const selectedUser = users?.find((u) => u.selected === true)?.username
    
    
    const { loading } = useQuery(GET_USERS, {
        onCompleted: (data) =>
          dispatch({ type: 'SET_USERS', payload: data.getUsers }),
        onError: (err) => console.log(err),
      })

    let usersMarkup 
 if (!users || loading) {
    usersMarkup = <p>Loading..</p>
} else if (users.length === 0) {
    usersMarkup = <p>No users have joined yet</p>
} else if (users.length > 0) {
    usersMarkup = users.map((users) => {

        const selected = selectedUser === users.username

    return(
      <div
        role = "button"
        className={classNames('MsgHover d-flex p-3', {
            'bg-white': selected,
          })}
        key={users.username}
        onClick={() => dispatch({ type: 'SET_SELECTED_USER', payload: users.username })}
      >
        <Image
          src={users.imageUrl}
          roundedCircle
          className="mr-2"
          style={{ width: 50, height: 50, objectFit: 'cover' }}
        />
        <div>
          <p className="text-success">{users.username}</p>
          <p className="font-weight-light">
            {users.latestMessage
              ? users.latestMessage.content
              : 'You are now connected!'}
          </p>
        </div>
      </div>)
    })
  }
    return (
        <Col xs={4} className="p-0 bg-secondary">{usersMarkup}</Col>
    )
}
