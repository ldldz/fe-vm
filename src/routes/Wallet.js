import { useContext } from "react";
import styled from "styled-components";
import MoneyAmount from "../components/Wallet/MoneyAmount";
import { WalletContext } from "../contexts/WalletContext";

export default function Wallet() {
  const { amountOfMoney, getTotalMoney } = useContext(WalletContext);

  return (
    <WalletWrapper>
      {Object.entries(amountOfMoney).map(([valueKey, amount]) => (
        <MoneyAmount key={valueKey} value={Number(valueKey)} amount={amount} />
      ))}
      <div>🔫</div>
      <TotalMoney>{getTotalMoney().toLocaleString()}원</TotalMoney>
    </WalletWrapper>
  );
}

const WalletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;
const TotalMoney = styled.div`
  font-size: 40px;
`;
