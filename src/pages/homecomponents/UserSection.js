import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Col, Image } from 'react-bootstrap'

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


export default function UserSection({setSelectedUser}) {
    
    const { loading, data, error } = useQuery(GET_USERS)

    let usersMarkup 
  if (!data || loading) {
    usersMarkup = <p>Loading..</p>
  } else if (data.getUsers.length === 0) {
    usersMarkup = <p>No users have joined yet</p>
  } else if (data.getUsers.length > 0) {
    usersMarkup = data.getUsers.map((users) => (
      <div
        className="d-flex p-3"
        key={users.username}
        onClick={() => setSelectedUser(users.username)}
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
      </div>
    ))
  }
    return (
        <Col xs={4} className="p-0 bg-secondary">{usersMarkup}</Col>
    )
}
