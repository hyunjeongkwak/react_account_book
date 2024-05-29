// Inputs.jsx
import { useState } from 'react';
import { Section, InfoBox, Input, P, SaveBtn } from '../styled';

const Inputs = ({ addEntry }) => {
  const [date, setDate] = useState('');
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleItemChange = (e) => {
    setItem(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const submitInput = () => {
    const newEntry = {
      id: crypto.randomUUID(),
      date,
      item,
      amount: parseFloat(amount),
      description,
    };

    addEntry(newEntry);

    setDate('');
    setItem('');
    setAmount('');
    setDescription('');
  };

  return (
    <Section>
      <InfoBox>
        <P>날짜</P>
        <Input type="date" value={date} onChange={handleDateChange} />
      </InfoBox>
      <InfoBox>
        <P>항목</P>
        <Input type="text" value={item} onChange={handleItemChange} placeholder="지출 항목" />
      </InfoBox>
      <InfoBox>
        <P>금액</P>
        <Input type="number" value={amount} onChange={handleAmountChange} placeholder="지출 금액" />
      </InfoBox>
      <InfoBox>
        <P>내용</P>
        <Input type="text" value={description} onChange={handleDescriptionChange} placeholder="지출 내용" />
      </InfoBox>
      <SaveBtn onClick={submitInput}>저장</SaveBtn>
    </Section>
  );
};

export default Inputs;
