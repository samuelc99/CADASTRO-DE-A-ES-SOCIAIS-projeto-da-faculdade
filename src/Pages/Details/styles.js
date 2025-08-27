import styled from "styled-components";

export const Container = styled.div`
  background-color: #f1f5f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 150px;

  .content {
    background-color: #ffffff;
    padding: 48px;
    border-radius: 16px;
    max-width: 900px;
    width: 100%;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    margin: 40px auto;
  }

  h1 {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 36px;
    color: #1e293b;
    text-align: center;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .info p {
    font-size: 18px;
    color: #334155;
    line-height: 1.6;

    strong {
      font-weight: 700;
      color: #2563eb;
    }

    a {
      color: #10b981;
      font-weight: 600;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
