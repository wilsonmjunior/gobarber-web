import React, { useRef, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiMail } from 'react-icons/fi';
import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationError';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.svg';

import { Container, Content, AnimationContainer, Background } from './styles';
import api from '../../services/api';

interface ForgotPasswordData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape<ForgotPasswordData>({
          email: Yup.string().required('O e-mail deve ser informado'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/password/forgot', {
          email: data.email,
        });

        addToast({
          type: 'success',
          title: 'E-mail de recuperação enviado',
          description: 'Ótimo, agora verifique sua caixa de mensagens.',
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na recuperação de senha',
          description: 'Ocorreu um erro ao recuperar a senha.',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" placeholder="E-mail" icon={FiMail} />

            <Button loading={loading} type="submit">
              Entrar
            </Button>
          </Form>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default ForgotPassword;
