import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.div`
  height: 144px;
  background: #28262e;

  display: flex;
  align-items: center;

  div {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    svg {
      color: #999591;
      width: 24px;
      height: 24px;

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -80px auto 0;

  width: 100%;
  max-width: 700px;

  form {
    display: flex;
    flex: 1;
    flex-direction: column;

    margin: 80px 0;
    width: 340px;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }
  }
`;

export const AvatarInput = styled.div`
  margin: -93px 0 32px 0;
  position: relative;

  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #ff9000;
    border-radius: 50%;
    cursor: pointer;
    right: 0;
    bottom: 0;
    outline: 0;
    border: none;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }
    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const FormContent = styled.div`
  padding-top: 24px;
`;
