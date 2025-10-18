import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    background-color: white;
    border-radius: 8px;
    padding: 26px;
    display: flex;
    align-items: center;
    gap: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    display: flex;
    

    .icon {
    background-image: url(https://escoladepais.org.br/wp-content/uploads/2020/11/Artigos7-30-400x400.jpg);
    background-size: cover;

    min-width: 64px;
    height: 64px;
    border-radius: 12px;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    margin-right: 3px;
    margin-bottom: -1px;
  }
  img {
    width: 100px;
  }

  .info {
    flex: 1;
  }

    h2 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 4px;
    }

    p {
      font-size: 14px;
      color: #4b5563;
    }

    .description{  

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 65%;
    }
  

  button {
    position: absolute;
    top: 42%;
    right: 15px;

    background-color: #ea580c;
    color: white;
    padding: 12px 17px;
    margin-right: 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.2s ease;



    &:hover {
      background-color: #c2410c;
      padding: 13px 18px;
      transition: ease 100ms;
    }
  }
`
