import { useLocation } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { ADD_SCORE } from '../../../utils/mutations';
import { useEffect } from 'react';

const GameInfo = ({ user }) => {
    const [addScore] = useMutation(ADD_SCORE)
    const location = useLocation();

    useEffect(() => {
        addScore({
            variables: { userID: user, guesses: location.state.guessArr.length }
        })
    }, [])

    console.log(location);
    console.log(user);

    return (
        <div className='flex flex-col items-center '>
            <div className='flex flex-col bg-gray-100 w-1/2 items-center'>

                <div className='flex flex-col justify-center items-center bg-gray-400 w-3/4 h-full rounded-lg'>
                    <div>
                        {location.state.guessArr.length > 3 ? (
                            <ul>
                                <li>{location.state.guessArr.length - 2}</li>
                                <li>{location.state.guessArr.length - 1}</li>
                                <li>{location.state.guessArr.length}</li>
                                <li>{location.state.guessArr.length + 1}</li>
                                <li>{location.state.guessArr.length + 2}</li>
                            </ul>
                        ) :
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        }
                    </div>
                    <div>
                        <button className='mx-2'>Home</button>
                        <button className='mx-2'>Next</button>
                        <button className='mx-2'>Replay</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameInfo;