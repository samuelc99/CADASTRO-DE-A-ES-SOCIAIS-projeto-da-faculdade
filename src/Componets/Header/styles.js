import styled from "styled-components";

export const Container = styled.div`
    width: 1280px;
    margin: 0 auto;
     

    header {
      width: 67.5%;
      top: 20px;
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid black;
      padding-bottom: 12px;
      margin-bottom: 130px;

      h1 {
        font-size: 24px;
        font-weight: bold;
      }

      .search {
      margin-top: 10px;
      padding: 12px;
      width: 100%;
      max-width: 350px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }

        nav {
          display: flex;
          gap: 24px;

          a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: black;
            font-size: 14px;
           

            &:hover {
              text-decoration: underline;
              transition: ease 100ms;
              font-size: 15px;             
            }
          }

    svg {
      display: flex;
      width: 23px;
      height: 23px;
      margin: 0 2px 2px 0;
    }


      }
  }
  
`