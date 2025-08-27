import styled from "styled-components";

export const Container = styled.div`
box-sizing: border-box;
background-color: #d1d5db;
padding: 150px ;
height: 100vh;
  
  
  .textarea{
  grid-column: span 2;
  grid-row: span 2;
  }

  .link {
  grid-column: span 2;
  width: 100%;

  }

 main {

  width: 750px;
  background-color: #ffffff;
  display: flex;
  margin: auto;
  min-height: 700px;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 12px;

 }

  h1 {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 25px;
  }
`


export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 60px);
  gap: 35px;

`

export const FormGroup = styled.div`
  span {
    width: 100%;
    font-size: 12px;
    color: #6b7280;
    margin-top: 0;
  }


`

export const Label = styled.label`
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background-color: #fef2f2;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 80%;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background-color: #fef2f2;
  resize: none;



`

export const SubmitButton = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 20px;
  border-radius: 8px;

  font-weight: 500;
  border: none;
  cursor: pointer;

  transition: background-color 0.2s ease;
  height: 60px;
  margin: 40px 0 0 15px;
  justify-content: center;

  grid-column: span 2;
  



  &:hover {
    background-color:rgb(41, 77, 179);
  }


`






