import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MemoStateContext } from '../App';
import MemoForm from '../components/MemoForm';

const MemoEdit = () => {
  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const memoList = useContext(MemoStateContext);

  useEffect(() => {
    if (memoList.length >= 1) {
      const targetMemo = memoList.find((it) => parseInt(it.id) === parseInt(id));
      if (targetMemo) {
        setOriginData(targetMemo);
      } else {
        navigate('/memo', { replace: true });
      }
    }
  }, [id, memoList]);

  return (
    <div>
      {originData && <MemoForm isEdit={true} originData={originData} />}
    </div>
  );
};

export default MemoEdit;