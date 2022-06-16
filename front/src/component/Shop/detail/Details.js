import { useNavigate } from 'react-router';

const Details = ({ detailState }) => {
    const navigate = useNavigate();
    const onMoveNext = () => {
        navigate('/party');
    };
};
