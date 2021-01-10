import { LoginPayload } from 'modules/auth/domain/interfaces/LoginPayload';
import UDFormInput from 'modules/ud-form/components/input';
import UDButton from 'modules/ud-ui/button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { FormProvider, UseFormMethods } from 'react-hook-form';

type Props = {
  onLogin: (data: LoginPayload) => void;
  methods: UseFormMethods<LoginPayload>;
};

const AuthComponentsLoginForm = (props: Props) => {
  const { methods, onLogin } = props;
  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onLogin)}>
        <Form.Group>
          <UDFormInput name="email" label="Email" />
        </Form.Group>
        <Form.Group>
          <UDFormInput name="password" label="Пароль" />
        </Form.Group>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <UDButton type="submit">Войти</UDButton>
          </Col>
        </Row>
      </Form>
    </FormProvider>
  );
};

export default AuthComponentsLoginForm;
