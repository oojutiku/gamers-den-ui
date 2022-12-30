import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Modal from './Modal';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

interface LoginProps {
  
}

const Login: FC<LoginProps> = (props: LoginProps) => {

  const location = useLocation();
  return (
    <Modal>
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </Modal>
  )
};

export default Login;
