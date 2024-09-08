import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const TaskInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  margin-bottom: 20px;
  background-color: #f3f3f3;
  padding: 10px;
`;

export const TaskInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 16px;
  color: #000;
  background-color: #f3f3f3;
  border-bottom: 1px solid #ccc;
`;

export const AddButton = styled.button`
  background-color: #f3f3f3;
  border: none;
  margin-left: 10px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TaskList = styled.div`
  background-color: #e8d4d4;  
  padding: 20px;
  width: 350px;
  height: 400px;
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export const CheckBox = styled.span`
  cursor: pointer;
  margin-right: 10px;
  color: green;
  margin-top: 5px;
`;

export const TaskText = styled.span`
  flex: 1;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
  margin-top: 5px;
`;
