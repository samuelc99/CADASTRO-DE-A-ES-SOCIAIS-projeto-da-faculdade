import styled from "styled-components";

export const Container = styled.div`
  width: 80rem; 
  margin: 0 auto;

  header {
    width: 67.5%;
    top: 1.25rem; 
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.125rem solid black; 
    padding-bottom: 0.75rem; 
    margin-bottom: 8.125rem; 

    h1 {
      font-size: 1.5rem; 
      font-weight: bold;
    }

    .search {
      margin-top: 0.625rem; 
      padding: 0.75rem; 
      width: 100%;
      max-width: 21.875rem; 
      border-radius: 0.25rem; 
      border: 0.0625rem solid #ccc; 
    }

    nav {
      display: flex;
      gap: 1.5rem; 

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: black;
        font-size: 0.875rem; 

        &:hover {
          text-decoration: underline;
          transition: ease 100ms;
          font-size: 0.9375rem; 
        }
      }

      svg {
        display: flex;
        width: 1.4375rem; 
        height: 1.4375rem; 
        margin: 0 0.125rem 0.125rem 0; 
      }
    }
  }
`
