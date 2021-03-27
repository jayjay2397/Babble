import React, { Fragment }from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { gql, useLazyQuery, useQuery } from '@apollo/client'
import BG1 from '../video/bg1.mp4'

import {useAuthDispatch} from '../context/auth'

const GET_USERS = gql`
  query getUsers {
    getUsers {
      username
      email
      createdAt
      imageUrl
      latestMessage {
        uuid
        from
        to
        content
        createdAt
      }
    }
  }

  const GET_MESSAGES = gql'
    query getMessages($from: String!) {
      getMessages(from: $from) {
        uuid 
        from  
        to
        content
        createdAt
      }
    }
`

export default function Home({history}) {

    const dispatch = useAuthDispatch()
    const [selectedUser, setSelectedUser] = useState(null)

    const logout = () =>{
        dispatch({ type: 'LOGOUT' })
        history.push('/login')
    }

    const { loading, data, error } = useQuery(GET_USERS)

    const [
      getMessages, 
      { loading: messagesLoading, data: messageData },
    ] = useLazyQuery(GET_MESSAGES)

    useEffect(() => {
      if (selectUser) {
        getMessages({ variables: { from: selectedUser }})
      }
    }, [selectedUser])

      if (messagesData) console.log(messagesData.getmessages)

      let usersMarkup
      if (!data || loading) {
        usersMarkup = <p>Loading...</p>
      } else if (data.getUsers.length === 0) {
        usersMarkup = <p>No users have joined yet</p>
      } else if (data.getUsers.map((user) ==> (
        <div 
        className="d-flex p-3"
        key={user.username}
        onClick={() ==> setSelectedUser(user.username)}
      >
        <image
        src={user.imageUrl}
        roundedCircle
        className="mr-2"
        style={{ width: 50, height: 50, objectFit: 'cover' }}
      />
      <div>
        <p classname="text-success">{user.username}</p>
        <p classname="font-weight-light">
          {user.latestMessage
          ? user.latestMessage.content
          : 'You are now connected!'}
        </p>
      </div>
    </div>
   ))
}

return (
  <Fragment>
    <Row className= "bg-white justify-content-around mb-1">
      <Link to="/login">
        <Button variant="link">Logins</Button>
      </Link>
      <Link to="/register">
        <Button variant="link">Register</Button>
      </Link>
      <Button variant="link" onClick={logout}>
        Logout
      </Button>
    </Row>
    <Row className="bg-white">
      <Col xs={4} className="p-0 bg-secondary">
        {usersMarkup}
      </Col>
      <Col xs={8}>
        {messagesData && messagesData.getMessages.lenght > 0 ? (
          messagesData.getMessages.map(message) => (
            <p key={message.uuid}>{message.content}</p>
          ))
        ) : ( 
          <p>Messages</p>
        )}
      </Col>
    </Row>
  </Fragment>
)
}