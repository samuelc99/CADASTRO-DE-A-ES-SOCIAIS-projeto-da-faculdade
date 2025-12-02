import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: white;
  border-radius: 0.5rem; /* 8px */
  padding: 1.625rem; /* 26px */
  display: flex;
  align-items: center;
  gap: 1rem; /* 16px */
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.4); /* 2px 4px */

  .icon {
    background-image: url(https://escoladepais.org.br/wp-content/uploads/2020/11/Artigos7-30-400x400.jpg);
    background-size: cover;

    min-width: 4rem; /* 64px */
    height: 4rem; /* 64px */
    border-radius: 0.75rem; /* 12px */
    font-size: 1.75rem; /* 28px */

    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    margin-right: 0.1875rem; /* 3px */
    margin-bottom: -0.0625rem; /* -1px */
  }

  img {
    width: 6.25rem; /* 100px */
  }

  .info {
    flex: 1;
  }

  h2 {
    font-size: 1rem; /* 16px */
    font-weight: 600;
    margin-bottom: 0.25rem; /* 4px */
  }

  p {
    font-size: 0.875rem; /* 14px */
    color: #4b5563;
  }

  .description {
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 60%;
    bottom: 0.2rem;
  }

  button {
    position: absolute;
    top: 42%;
    right: 0.9375rem; /* 15px */

    background-color: #ea580c;
    color: white;
    padding: 0.75rem 1.0625rem; /* 12px 17px */
    margin-right: 1.25rem; /* 20px */
    border: none;
    border-radius: 0.375rem; /* 6px */
    cursor: pointer;
    font-size: 0.875rem; /* 14px */
    font-weight: 500;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #c2410c;
      padding: 0.8125rem 1.125rem; /* 13px 18px */
      transition: ease 100ms;
    }
  }
`;

